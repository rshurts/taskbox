import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Provider } from 'react-redux';

import { PureInboxScreen } from './InboxScreen';
import { defaultTasks } from './TaskList.stories';

// Mocked redux store
const store = {
  getState: () => ({ tasks: defaultTasks }),
  subscribe: () => 0,
  dispatch: () => action('dispatch')
}

storiesOf('InboxScreen', module)
  .addDecorator(story => <Provider store={store}><div style={{ padding: '3rem' }}>{story()}</div></Provider>)
  .add('default', () => <PureInboxScreen />)
  .add('error', () => <PureInboxScreen error="Error message" />);
