import type { Meta, StoryObj } from '@storybook/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../../lib/i18n';

import { TodoForm } from '.';
import { Provider } from 'react-redux';
import { legacy_createStore } from 'redux';
import { todosReducer } from '../../../state/todo';
import { styled } from 'styled-components';
const store = legacy_createStore(todosReducer);

const meta: Meta<typeof TodoForm> = {
  decorators: [
    (Story) => (
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <Story />
        </I18nextProvider>
      </Provider>
    ),
  ],
  title: 'Components/organisms/TodoForm',
  component: TodoForm,
};

export default meta;
type Story = StoryObj<typeof TodoForm>;

export const TodoFormStory: Story = {
  render: () => (
    <Container>
      <TodoForm />
    </Container>
  ),
};
const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;
