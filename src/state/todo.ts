import { log } from "console";
import { Reducer } from "redux";
import { Todo } from "../types";

const ADD_TODO = "ADD_TODO";

export const addTodo = (todo: Todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  } as const;
};

type Action = ReturnType<typeof addTodo>;

export const todosReducer: Reducer<Todo[], Action> = (state: Todo[] = [], action) => {
  console.log("todosReducer", action.payload);
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    default:
      return state;
  }
};
