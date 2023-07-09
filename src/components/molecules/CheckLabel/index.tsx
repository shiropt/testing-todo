import { ChangeEvent, FC } from "react";
import { styled } from "styled-components";
import { TextBox } from "../../atoms/TextBox";
import { useFormContext } from "react-hook-form";
import { Todo } from "../../../lib/schema/Todo";

export type Props = {
  todo: Todo;
  updateTodo: (todo: Todo) => void;
};

export const CheckLabel: FC<Props> = ({ ...props }, ref) => {
  const { register, getValues } = useFormContext<Todo>();
  const isDone = getValues("isDone") || false;
  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    props.updateTodo({ ...props.todo, isDone: checked });
  };
  return (
    <>
      <Wrapper>
        <CheckBox checked={isDone} type="checkbox" {...register("isDone", { onChange: handleCheckboxChange })} />
        {props.todo.isEdit ? (
          <TextBoxWrapper {...register("title")} placeholder="Todoを入力してください" />
        ) : (
          <Label $isCheck={isDone}>{props.todo.title}</Label>
        )}
      </Wrapper>
    </>
  );
};
const Label = styled.label<{ $isCheck: boolean }>`
  text-decoration: ${(props) => (props.$isCheck ? `line-through` : "none")};
  margin-left: 8px;
`;

const CheckBox = styled.input`
  cursor: pointer;
  width: 24px;
  height: 24px;
`;

const TextBoxWrapper = styled(TextBox)`
  margin-left: 8px;
  width: 100%;
  min-width: 150px;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
