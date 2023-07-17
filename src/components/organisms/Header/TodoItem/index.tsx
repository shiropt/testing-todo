import { FC } from 'react';
import { Button } from '../../../atoms/Button';
import { Todo } from '../../../../@types';
import { useTodo } from '../../../../hooks/todo';

type Props = {
  todo: Todo;
};

export const TodoItem: FC<Props> = ({ todo }) => {
  const { updateTodo, deleteTodo } = useTodo();

  const { title, isCompleted, dueDate, createdDate } = todo;

  return (
    <li className="todo-item">
      <input
        className="todo-checkbox"
        type="checkbox"
        onChange={() => {
          updateTodo({ ...todo, isCompleted: !isCompleted });
        }}
        checked={isCompleted}
      />
      <div className="todo-details">
        <span className={`todo-title ${isCompleted ? 'completed' : ''}`}>
          {title}
        </span>
        <div className="todo-dates">
          <span>作成日: {createdDate}</span>
          <span>期日: {dueDate}</span>
        </div>
      </div>
      <div className="todo-actions">
        <Button
          variant="EDIT"
          onClick={() => {
            updateTodo({ ...todo, isEditMode: true });
          }}>
          編集
        </Button>
        <Button
          variant="DELETE"
          onClick={() => {
            deleteTodo(todo.id);
          }}>
          削除
        </Button>
      </div>
    </li>
  );
};
