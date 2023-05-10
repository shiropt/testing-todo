import { ComponentProps, forwardRef } from "react";
import { styled } from "styled-components";
type Props = {} & ComponentProps<"input">;

const TextBoxWrapper = styled.input`
  padding: 10px;
  border: 2px solid #ccc;
  flex: 1;
  outline: "none";
`;

export const TextBox = forwardRef<HTMLInputElement, Props>(({ ...props }, ref) => {
  return <TextBoxWrapper {...props} ref={ref} />;
});
