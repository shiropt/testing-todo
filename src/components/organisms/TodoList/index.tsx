import { FC } from "react";
import { Tab, Todo } from "../../../types";
import { EditTodoItem } from "../EditTodoItem";
import { TodoItem } from "../Header/TodoItem";

type Props = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  activeTab: Tab;
  filteredTodos: Todo[];
  editTodoId: number | null;
  handleEditTodo: (id: number) => void;
  setEditTodoId: React.Dispatch<React.SetStateAction<number | null>>;
  handleUpdateTodo: (id: number, updatedTitle: string) => void;
  handleDeleteTodo: (id: number) => void;
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

export const TodoList: FC<Props> = ({
  activeTab,
  filteredTodos,
  editTodoId,
  handleEditTodo,
  setEditTodoId,
  handleUpdateTodo,
  handleDeleteTodo,
  todos,
}) => {
  console.log("todosだにゃ", todos);

  const data = groupedTodos([...filteredTodos]).sort((a, b) => {
    return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
  });

  return (
    <div>
      {activeTab === Tab.All && (
        <div>
          <h2>全てのTodoリスト</h2>
          <ul className="todo-list">
            {todos.map((todo) =>
              editTodoId === todo.id ? (
                <EditTodoItem
                  key={todo.id}
                  todo={todo}
                  onUpdate={handleUpdateTodo}
                  onCancel={() => setEditTodoId(null)}
                />
              ) : (
                <TodoItem key={todo.id} todo={todo} onEdit={handleEditTodo} onDelete={handleDeleteTodo} />
              )
            )}
          </ul>
        </div>
      )}

      {activeTab === Tab.Daily && (
        <div>
          <h2>今週のTodoリスト</h2>
          {data.map((item) => {
            return (
              <div key={item.dueDate}>
                <h3> {item.dueDate}</h3>
                <ul className="todo-list">
                  {item.todos.map((todo) =>
                    editTodoId === todo.id ? (
                      <EditTodoItem
                        key={todo.id}
                        todo={todo}
                        onUpdate={handleUpdateTodo}
                        onCancel={() => setEditTodoId(null)}
                      />
                    ) : (
                      <TodoItem key={todo.id} todo={todo} onEdit={handleEditTodo} onDelete={handleDeleteTodo} />
                    )
                  )}
                </ul>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
