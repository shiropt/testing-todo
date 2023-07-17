/* eslint-disable array-callback-return */
import { useEffect, useRef, useState } from 'react';
import './App.css';
import { TodoForm } from './components/organisms/TodoForm';
import { TodoTab } from './components/organisms/TodoTab';
import { TodoList } from './components/organisms/TodoList';
import { useTodo } from './hooks/todo';
import { Tab } from './@types';

function App() {
  const isMount = useRef(false);
  const { fetchTodos } = useTodo();

  useEffect(() => {
    if (!isMount.current) {
      (async () => {
        await fetchTodos();
      })();
    }
  }, []);

  const [activeTab, setActiveTab] = useState<Tab>(Tab.All);

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container">
      <TodoTab activeTab={activeTab} handleTabChange={handleTabChange} />
      <TodoForm />
      <TodoList activeTab={activeTab} />
    </div>
  );
}

export default App;
