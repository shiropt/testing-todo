import { styled } from "styled-components";
import { CheckLabel } from "../../molecules/CheckLabel";
import { FC, memo, useCallback, useMemo } from "react";
import type { Props as CheckLabelProps } from "../../molecules/CheckLabel";
import { Button } from "../../atoms/Button";
import { useForm, FormProvider } from "react-hook-form";
import { Todo } from "../../../lib/schema/Todo";
type Props = { todo: Todo } & CheckLabelProps;

export const List: FC<Props> = ({ ...props }) => {
  const methods = useForm<Todo>();

  const onSubmit = (data: Todo) => {
    console.log("onSubmit");
    const { title, isDone, isEdit } = data;
    console.log({ onSubmit: data });
    props.updateTodo({ ...props.todo, title, isDone, isEdit: !isEdit });
  };
  console.log("レンダリング");

  // (data: Todo) => {
  //   const { title, isDone, isEdit } = data;
  //   console.log({ onSubmit: data });
  //   // updateTodo({ ...todo, title, isDone, isEdit: !isEdit });
  // }
  const memo = useMemo(() => methods, [methods]);

  return (
    <ListWrapper $isEdit={props.todo.isEdit}>
      <FormProvider {...memo}>
        <FormWrapper onSubmit={memo.handleSubmit(onSubmit)}>
          <CheckLabelWrapper>
            <CheckLabel {...props} />
          </CheckLabelWrapper>
          <div>
            {props.todo.isEdit ? (
              <ButtonWrapper>
                <ListButton
                  onClick={() => props.updateTodo({ ...props.todo, isEdit: false })}
                  type="submit"
                  variant="ADD"
                >
                  確定
                </ListButton>
              </ButtonWrapper>
            ) : (
              <ButtonWrapper>
                <ListButton
                  type="button"
                  onClick={() => props.updateTodo({ ...props.todo, isEdit: true })}
                  variant="EDIT"
                >
                  編集
                </ListButton>
                <ListButton variant="DELETE">削除</ListButton>
              </ButtonWrapper>
            )}
          </div>
        </FormWrapper>
      </FormProvider>
    </ListWrapper>
  );
};

const ListWrapper = styled.li<{ $isEdit: boolean }>`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  background: ${(props) => (props.$isEdit ? "#e8f8ff" : "#FFFF")};
`;
const FormWrapper = styled.form`
  display: flex;
  justify-content: space-between;
  flex: 1;
  flex-wrap: wrap;
  align-items: center;
`;

const ListButton = styled(Button)`
  margin-right: 8px;
`;
const ButtonWrapper = styled.div`
  min-width: 120px;
  display: flex;
  justify-content: right;
`;
const CheckLabelWrapper = styled.div`
  flex: 1;
  min-width: 150px;
`;
