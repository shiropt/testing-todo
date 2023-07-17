import { FC, useState } from 'react';
import { Button } from '../../atoms/Button';
import { Todo } from '../../../@types';
import { useTodo } from '../../../hooks/todo';
import { styled } from 'styled-components';
import { useTranslation } from 'react-i18next';
import { TextBox } from '../../atoms/TextBox';

type Props = {
  todo: Todo;
};

export const TodoItem: FC<Props> = ({ todo }) => {
  const { updateTodo, deleteTodo } = useTodo();
  const [title, setTitle] = useState(todo.title);

  const { t } = useTranslation();

  const { isCompleted, dueDate, createdDate } = todo;

  return (
    <ItemWrapper>
      <CheckBox
        type="checkbox"
        onChange={() => {
          updateTodo({ ...todo, isCompleted: !isCompleted });
        }}
        checked={isCompleted}
      />
      <div>
        {todo.isEditMode ? (
          <TextBoxWrapper
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="edit-todo-input"
          />
        ) : (
          <Title $isCompleted={isCompleted}>{todo.title}</Title>
        )}

        <Dates className="todo-dates">
          <span>
            {t('label.dueDate')}: {todo.createdDate}: {createdDate}
          </span>
          <span>
            {t('label.dueDate')}: {dueDate}
          </span>
        </Dates>
      </div>
      <TodoActions className="todo-actions">
        {todo.isEditMode ? (
          <div>
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
        ) : (
          <div>
            <Button
              variant="EDIT"
              onClick={() => {
                updateTodo({ ...todo, isEditMode: true });
              }}>
              {t('button.edit')}
            </Button>
            <Button
              variant="DELETE"
              onClick={() => {
                deleteTodo(todo.id);
              }}>
              {t('button.delete')}
            </Button>
          </div>
        )}
      </TodoActions>
    </ItemWrapper>
  );
};

const ItemWrapper = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
`;
const CheckBox = styled.input`
  margin-right: 10px;
`;
const Title = styled.span<{ $isCompleted: boolean }>`
  font-size: 18px;
  color: #333;
  margin-bottom: 8px;
  ${({ $isCompleted }) =>
    $isCompleted &&
    `  text-decoration: line-through;
  color: #999;`}
`;

const TodoActions = styled.div`
  margin-left: auto;
`;
const Dates = styled.div`
  font-size: 14px;
  color: #888;
`;
const TextBoxWrapper = styled(TextBox)`
  width: 450px;
  height: 40px;
`;
