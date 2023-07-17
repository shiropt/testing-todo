import { useDispatch, useSelector } from 'react-redux';
import { Todo } from '../types';
import { request } from '../utils/api';
import { SET_TODOS } from '../state/todo';
import { RootState } from '../state';

export const useTodo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos);

  const addTodo = async (todo: Todo) => {
    await request<Todo>('POST', `/todos`, todo);
    await fetchTodos();
  };

  const fetchTodos = async () => {
    const todos = await request<Todo[]>('GET', '/todos');
    dispatch({ type: SET_TODOS, payload: todos });
  };

  const updateTodo = async (todo: Todo) => {
    await request<Todo>('PUT', `/todos/${todo.id}`, todo);
    await fetchTodos();
  };

  const deleteTodo = async (id: number) => {
    await request<Todo>('DELETE', `/todos/${id}`);
    await fetchTodos();
  };
  return { todos, addTodo, fetchTodos, updateTodo, deleteTodo };
};
