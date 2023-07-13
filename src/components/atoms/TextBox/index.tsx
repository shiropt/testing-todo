import { ComponentProps, forwardRef } from "react";
import { styled } from "styled-components";

type Props = { label?: string; error?: string } & ComponentProps<"input">;

export const TextBox = forwardRef<HTMLInputElement, Props>((props, ref) => {
  return (
    <Wrapper>
      <Label>{props.label}</Label>
      <Input {...props} ref={ref} />
    </Wrapper>
  );
});
const Wrapper = styled.div`
  margin-bottom: 16px;
`;
const Label = styled.label`
  display: block;
`;
const Input = styled.input`
  display: block;
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;
