import { useEffect, useRef, useState } from 'react';
import { TodoForm } from '../organisms/TodoForm';
import { TodoTab } from '../organisms/TodoTab';
import { TodoList } from '../organisms/TodoList';
import { styled } from 'styled-components';
import { useTodo } from '../../hooks/todo';
import { Tab } from '../../@types';

export const Page = () => {
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
    <Container>
      <TodoTab activeTab={activeTab} handleTabChange={handleTabChange} />
      <TodoForm />
      <TodoList activeTab={activeTab} />
    </Container>
  );
};
const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;
