import type { Meta, StoryObj } from '@storybook/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../lib/i18n';

import { Page } from '.';
import { Provider } from 'react-redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { ReactNode } from 'react';
import { todos } from '../../mocks/data/todos';
import { Todo } from '../../@types';

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

const meta: Meta<typeof Page> = {
  decorators: [
    (Story) => (
      <MockStore todoState={todos}>
        <I18nextProvider i18n={i18n}>
          <Story />
        </I18nextProvider>
      </MockStore>
    ),
  ],
  title: 'Components/pages',
  component: Page,
  excludeStories: /.*MockedState$/,
};

export default meta;
type Story = StoryObj<typeof Page>;

export const PageStory: Story = {
  render: () => <Page />,
};
