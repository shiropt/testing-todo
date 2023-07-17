import type { Meta, StoryObj } from '@storybook/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../../lib/i18n';

import { TodoTab } from '.';
import { Provider } from 'react-redux';
import { legacy_createStore } from 'redux';
import { todosReducer } from '../../../state/todo';
import { styled } from 'styled-components';
import { Tab } from '../../../@types';
const store = legacy_createStore(todosReducer);

const meta: Meta<typeof TodoTab> = {
  decorators: [
    (Story) => (
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <Story />
        </I18nextProvider>
      </Provider>
    ),
  ],
  title: 'Components/organisms/TodoTab',
  component: TodoTab,
};

export default meta;
type Story = StoryObj<typeof TodoTab>;

export const TodoTabStory: Story = {
  render: () => (
    <Container>
      <TodoTab activeTab={Tab.All} handleTabChange={() => {}} />
    </Container>
  ),
};
const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;
