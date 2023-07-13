import { FC } from "react";
import { Button } from "../../../atoms/Button";
import { Todo } from "../../../../types";

type Props = {
  todo: Todo;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
};

export const TodoItem: FC<Props> = ({ todo, onEdit, onDelete }) => {
  const { id, title, isCompleted, dueDate, createdDate } = todo;
  const handleEdit = () => {
    onEdit(id);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <li className="todo-item">
      <input className="todo-checkbox" type="checkbox" onChange={() => {}} checked={isCompleted} />
      <div className="todo-details">
        <span className={`todo-title ${isCompleted ? "completed" : ""}`}>{title}</span>
        <div className="todo-dates">
          <span>作成日: {createdDate}</span>
          <span>期日: {dueDate}</span>
        </div>
      </div>
      <div className="todo-actions">
        <Button variant="EDIT" onClick={handleEdit}>
          編集
        </Button>
        <Button variant="DELETE" onClick={handleDelete}>
          削除
        </Button>
      </div>
    </li>
  );
};
