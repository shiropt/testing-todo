/* eslint-disable array-callback-return */
import { useEffect, useState } from "react";
import "./App.css";
import { TodoForm } from "./components/organisms/TodoForm";
import { TodoTab } from "./components/organisms/TodoTab";
import { Tab, Todo } from "./types";
import { TodoList } from "./components/organisms/TodoList";
import { isThisWeek } from "./utils/date";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./state";

function App() {
  useEffect(() => {
    fetch("/todos")
      .then((response) => response.json())
      .then((todos) => {
        setTodos(todos);

        dispatch({ type: "ADD_TODO", payload: todos });
        console.log({ todos });
      });
  }, []);
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();
  const [todos2, setTodos] = useState<Todo[]>([]);
  const [editTodoId, setEditTodoId] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<Tab>(Tab.All);

  const handleEditTodo = (id: number) => {
    setEditTodoId(id);
  };

  const handleDeleteTodo = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
  };

  const handleUpdateTodo = (id: number, updatedTitle: string) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          title: updatedTitle,
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
    setEditTodoId(null);
  };

  const filteredTodos = activeTab === Tab.All ? todos : todos.filter((todo) => isThisWeek(new Date(todo.dueDate)));
  console.log("todosおや", todos);

  return (
    <div className="container">
      <TodoTab activeTab={activeTab} handleTabChange={handleTabChange} />
      <TodoForm todos={todos} setTodos={setTodos} />
      <TodoList
        key={todos.length}
        todos={todos}
        activeTab={activeTab}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
        editTodoId={editTodoId}
        handleEditTodo={handleEditTodo}
        setEditTodoId={setEditTodoId}
        handleDeleteTodo={handleDeleteTodo}
        handleUpdateTodo={handleUpdateTodo}
      />
    </div>
  );
}

export default App;
