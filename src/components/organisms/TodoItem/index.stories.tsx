import type { Meta, StoryObj } from '@storybook/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../../lib/i18n';

import { TodoItem } from '.';
import { Provider } from 'react-redux';
import { legacy_createStore } from 'redux';
import { todosReducer } from '../../../state/todo';
import { styled } from 'styled-components';
import { Tab, Todo } from '../../../@types';
const store = legacy_createStore(todosReducer);

const meta: Meta<typeof TodoItem> = {
  decorators: [
    (Story) => (
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <Story />
        </I18nextProvider>
      </Provider>
    ),
  ],
  title: 'Components/organisms/TodoItem',
  component: TodoItem,
};

export default meta;
type Story = StoryObj<typeof TodoItem>;

const todo: Todo = {
  id: 1,
  title: '買い物',
  isCompleted: false,
  isEditMode: false,
  createdDate: '2022/12/22',
  dueDate: '2023/1/22',
};
export const TodoItemStory: Story = {
  render: () => (
    <Container>
      <h3>default</h3>
      <TodoItem todo={todo} />
      <h3>isCompleted</h3>
      <TodoItem todo={{ ...todo, isCompleted: true }} />
      <h3>isEditMode</h3>
      <TodoItem todo={{ ...todo, isEditMode: true }} />
    </Container>
  ),
};
const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;
