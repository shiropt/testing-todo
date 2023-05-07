import { ComponentProps, FC } from "react";
import { styled } from "styled-components";
type Props = {} & ComponentProps<"input">;

export const TextBox: FC<Props> = ({ ...props }) => {
  return <TextBoxWrapper {...props} />;
};

const TextBoxWrapper = styled.input`
  padding: 10px;
  border: 2px solid #ccc;
  flex: 1;
  outline: "none";
`;
