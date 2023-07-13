import { FC, useState } from "react";
import { Button } from "../../atoms/Button";
import { Todo } from "../../../types";

type Props = {
  todo: Todo;
  onUpdate: (id: number, updatedTitle: string) => void;
  onCancel: () => void;
};
export const EditTodoItem: FC<Props> = ({ todo, onUpdate, onCancel }) => {
  const [title, setTitle] = useState(todo.title);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleUpdate = () => {
    onUpdate(todo.id, title);
  };

  return (
    <li className="todo-item">
      <input className="todo-checkbox" type="checkbox" onChange={() => {}} checked={todo.isCompleted} disabled />
      <div className="todo-details">
        <input type="text" value={title} onChange={handleTitleChange} className="edit-todo-input" />
        <div className="todo-dates">
          <span>作成日: {todo.createdDate}</span>
          <span>期日: {todo.dueDate}</span>
        </div>
      </div>
      <div className="todo-actions">
        <Button variant="EDIT" onClick={handleUpdate}>
          更新
        </Button>
        <Button variant="DELETE" onClick={onCancel}>
          キャンセル
        </Button>
      </div>
    </li>
  );
};
