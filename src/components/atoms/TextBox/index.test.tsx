import { render, screen } from "@testing-library/react";
import { TextBox } from ".";
import userEvent from "@testing-library/user-event";
test("デフォルトtextboxロールで表示されること", () => {
  render(<TextBox />);
  expect(screen.getByRole("textbox")).toBeInTheDocument();
});

test("意図したplaceholderが表示されること", () => {
  render(<TextBox placeholder="入力してください" />);
  expect(screen.getByPlaceholderText("入力してください")).toBeInTheDocument();
});

test("テキストボックスに入力できること", () => {
  render(<TextBox />);
  userEvent.type(screen.getByRole("textbox"), "test-text");
  expect(screen.getByRole("textbox")).toHaveValue("test-text");
});
