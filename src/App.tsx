import { useForm } from "react-hook-form";
import "./App.css";
import { Form } from "./components/molecules/Form";
import { Todo, createTodoSchema } from "./lib/schema/Todo";
import { zodResolver } from "@hookform/resolvers/zod";
import { Header } from "./components/organisms/Header";
import { List } from "./components/organisms/List";
import useSWR, { Fetcher } from "swr";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    control,
    getValues,
    formState: { errors },
  } = useForm<Todo>({ resolver: zodResolver(createTodoSchema) });
  const onSubmit = async (data: Todo) => {};
  const fetcher = async (path: string) => {
    const response = await fetch(path);
    const json = await response.json();
    return json;
  };

  const { data } = useSWR<Todo[], Error>("/todos", fetcher);
  const updateTodo = (todo: Todo) => {};
  if (!data) return <p>error</p>;

  return (
    <div className="App">
      <Header title="TODOリスト">
        <Form buttonName="追加" register={register("title")} onSubmit={handleSubmit(onSubmit)} />
      </Header>
      <main>
        <ul>
          {data.map((todo) => {
            return <List key={todo.id} updateTodo={updateTodo} todo={todo} />;
          })}
        </ul>
      </main>
    </div>
  );
}

export default App;
