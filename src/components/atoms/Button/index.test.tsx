import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from ".";
test("childrenにtestを渡してボタン名に表示されること", () => {
  render(<Button variant="ADD">test</Button>);
  expect(screen.getByRole("button", { name: "test" })).toBeInTheDocument();
});

test("disabledを渡して非活性になること", () => {
  render(
    <Button variant="ADD" disabled>
      test
    </Button>
  );
  expect(screen.getByRole("button")).toBeDisabled();
});

test("ボタンクリックでイベントが発火すること", () => {
  const mockFn = jest.fn();
  render(
    <Button onClick={mockFn} variant="ADD">
      test
    </Button>
  );
  fireEvent.click(screen.getByRole("button"));
  expect(mockFn).toHaveBeenCalled();
});
