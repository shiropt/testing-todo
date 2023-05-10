import { useForm } from "react-hook-form";
import "./App.css";
import { Button } from "./components/atoms/Button";
import { Form } from "./components/molecules/Form";
import { Todo, createTodoSchema } from "./lib/schema/Todo";
import { zodResolver } from "@hookform/resolvers/zod";
import { Header } from "./components/organisms/Header";
import { useState } from "react";
import { CheckLabel } from "./components/molecules/CheckLabel";
import { List } from "./components/organisms/List";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<Todo>({ resolver: zodResolver(createTodoSchema) });
  const onSubmit = (data: Todo) => console.log(data.title);
  const [check, setCheck] = useState(false);

  return (
    <div className="App">
      <Header title="TODOリスト">
        <Form buttonName="追加" register={register("title")} onSubmit={handleSubmit(onSubmit)} />
      </Header>
      <main>
        <ul>
          <List check={check} label="買い物に行く" setCheck={setCheck} />
          <List check={check} label="洗濯する" setCheck={setCheck} />
          <List check={check} label="プログラミングの勉強をする" setCheck={setCheck} />
        </ul>
      </main>
    </div>
  );
}

export default App;
