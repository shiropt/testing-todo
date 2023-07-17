import { Reducer } from 'redux';
import { Todo } from '../@types';

export const ADD_TODO = 'ADD_TODO';
export const SET_TODOS = 'SET_TODO';

export const addTodo = (todo: Todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  } as const;
};
export const setTodos = (todos: Todo[]) => {
  return {
    type: SET_TODOS,
    payload: todos,
  } as const;
};

export type Action = ReturnType<typeof addTodo | typeof setTodos>;

export const todosReducer: Reducer<Todo[], Action> = (
  state: Todo[] = [],
  action,
) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case SET_TODOS:
      return [...action.payload];
    default:
      return state;
  }
};
