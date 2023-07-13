import { db } from "./db";
import { todos } from "./data/todos";

todos.forEach((todo) => {
  db.todo.create({
    id: todo.id,
    title: todo.title,
    createdDate: todo.createdDate.toString(),
    dueDate: todo.dueDate.toString(),
    isCompleted: todo.isCompleted,
  });
});

export const handlers = [...db.todo.toHandlers("rest")];
