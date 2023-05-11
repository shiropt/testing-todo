import { ComponentProps, FC, forwardRef } from "react";
import { TextBox } from "../../atoms/TextBox";
import { Button } from "../../atoms/Button";
import { styled } from "styled-components";
import { UseFormRegisterReturn } from "react-hook-form";

type Props = {
  register: UseFormRegisterReturn;
  buttonName: string;
} & ComponentProps<"form">;

export const Form = forwardRef<HTMLFormElement, Props>(({ register, buttonName, ...rest }, ref) => {
  return (
    <FormWrapper name="form" {...rest} ref={ref}>
      <TextBox {...register} />
      <Button type="submit" variant="ADD">
        {buttonName}
      </Button>
    </FormWrapper>
  );
});

const FormWrapper = styled.form`
  display: flex;
  flex: 1;
`;
