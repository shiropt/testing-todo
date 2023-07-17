import { FC } from 'react';
import { Tab, Todo } from '../../../@types';
import { TodoItem } from '../TodoItem';
import { useTodo } from '../../../hooks/todo';
import { isThisWeek } from '../../../utils/date';
import { useTranslation } from 'react-i18next';
import { styled } from 'styled-components';

type Props = {
  activeTab: Tab;
};

const groupedTodos = (todos: Todo[]) => {
  const grouped = todos.reduce((acc, todo) => {
    const dueDate = todo.dueDate;
    if (!acc[dueDate]) {
      acc[dueDate] = [];
    }
    acc[dueDate].push(todo);
    return acc;
  }, {} as { [key: string]: Todo[] });
  return Object.entries(grouped).map(([dueDate, todos]) => {
    return {
      dueDate,
      todos,
    };
  });
};

export const TodoList: FC<Props> = ({ activeTab }) => {
  const { t } = useTranslation();

  const { todos } = useTodo();
  const filteredTodos =
    activeTab === Tab.All
      ? todos
      : todos.filter((todo) => isThisWeek(new Date(todo.dueDate)));

  const data = groupedTodos([...filteredTodos]).sort((a, b) => {
    return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
  });

  return (
    <div>
      {activeTab === Tab.All && (
        <div>
          <h2>{t('tab.all')}</h2>
          <Ul className="todo-list">
            {todos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </Ul>
        </div>
      )}

      {activeTab === Tab.Daily && (
        <div>
          <h2>{t('list.thisWeek')}</h2>
          {data.map((item) => {
            return (
              <div key={item.dueDate}>
                <h3> {item.dueDate}</h3>
                <Ul className="todo-list">
                  {item.todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} />
                  ))}
                </Ul>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
const Ul = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
