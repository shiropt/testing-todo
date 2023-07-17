import { FC, useState } from 'react';
import { Button } from '../../atoms/Button';
import { Todo } from '../../../@types';
import { useTodo } from '../../../hooks/todo';
import { TextBox } from '../../atoms/TextBox';
import { styled } from 'styled-components';
import { useTranslation } from 'react-i18next';

type Props = {
  todo: Todo;
};
export const EditTodoItem: FC<Props> = ({ todo }) => {
  const [title, setTitle] = useState(todo.title);
  const { updateTodo } = useTodo();
  const { t } = useTranslation();
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return (
    <li className="todo-item">
      <input
        className="todo-checkbox"
        type="checkbox"
        onChange={() => {
          updateTodo({
            ...todo,
            isCompleted: !todo.isCompleted,
          });
        }}
        checked={todo.isCompleted}
      />
      <div className="todo-details">
        <TextBoxWrapper
          type="text"
          value={title}
          onChange={handleTitleChange}
          className="edit-todo-input"
        />
        <div className="todo-dates">
          <span>
            {' '}
            {t('label.dueDate')}: {todo.createdDate}
          </span>
          <span>
            {t('label.dueDate')}: {todo.dueDate}
          </span>
        </div>
      </div>
      <div className="todo-actions">
        <Button
          variant="EDIT"
          onClick={() => {
            updateTodo({ ...todo, title, isEditMode: false });
          }}>
          {t('button.update')}
        </Button>
        <Button
          variant="DELETE"
          onClick={() => {
            updateTodo({ ...todo, isEditMode: false });
          }}>
          {t('button.cancel')}
        </Button>
      </div>
    </li>
  );
};
const TextBoxWrapper = styled(TextBox)`
  width: 450px;
  height: 40px;
`;
