import { combineReducers, legacy_createStore } from "redux";
import { todosReducer } from "./todo";

export const store = legacy_createStore(
  combineReducers({
    todos: todosReducer,
  })
);
export type RootState = ReturnType<typeof store.getState>;
