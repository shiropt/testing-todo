import { render, screen } from "@testing-library/react";

import { Form } from ".";

import userEvent from "@testing-library/user-event";

import { useForm } from "react-hook-form";
import { FC } from "react";

export const TestForm: FC = () => {
  const { register, handleSubmit } = useForm<{ title: string }>();
  const mockSubmit = jest.fn();
  return <Form onSubmit={handleSubmit(mockSubmit)} buttonName="追加" register={register("title")} />;
};

const setup = async () => {
  render(<TestForm />);
  const textbox = screen.getByRole("textbox");
  const form = screen.getByRole("form");
  const button = screen.getByRole("button", { name: "追加" });
  return { form, textbox, button };
};

test("Formコンポーネントが表示されること", async () => {
  const { form } = await setup();
  expect(form).toBeInTheDocument();
});
test("Formコンポーネント入力テスト", async () => {
  const { textbox } = await setup();
  userEvent.type(textbox, "タイトル");
  expect(textbox).toHaveValue("タイトル");
});
test("ボタン名表示テスト", async () => {
  const { button, textbox } = await setup();
  userEvent.type(textbox, "タイトル");
  userEvent.click(button);
  expect(button).toBeInTheDocument();
});
