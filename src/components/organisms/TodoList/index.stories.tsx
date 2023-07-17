import type { Meta, StoryObj } from '@storybook/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../../lib/i18n';

import { TodoList } from '.';
import { Provider } from 'react-redux';
import { legacy_createStore } from 'redux';
import { todosReducer } from '../../../state/todo';
import { styled } from 'styled-components';
import { Tab, Todo } from '../../../@types';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { todos } from '../../../mocks/data/todos';
import { ReactNode } from 'react';

type Props = {
  todoState: Todo[];
  children: ReactNode;
};

const MockStore = ({ todoState, children }: Props) => {
  return (
    <Provider
      store={configureStore({
        reducer: {
          todos: createSlice({
            name: 'todos',
            initialState: todoState,
            reducers: {
              updateTodo: (state, action) => {
                state = action.payload;
              },
            },
          }).reducer,
        },
      })}>
      {children}
    </Provider>
  );
};

const meta: Meta<typeof TodoList> = {
  decorators: [
    (Story) => (
      <MockStore todoState={todos}>
        <I18nextProvider i18n={i18n}>
          <Story />
        </I18nextProvider>
      </MockStore>
    ),
  ],
  title: 'Components/organisms/TodoList',
  component: TodoList,
  excludeStories: /.*MockedState$/,
};

export default meta;
type Story = StoryObj<typeof TodoList>;

export const AllTodoList: Story = {
  render: () => <Container>{<TodoList activeTab={Tab.All} />}</Container>,
};
export const ThisWeekTodoList: Story = {
  render: () => <Container>{<TodoList activeTab={Tab.Daily} />}</Container>,
};
const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;
