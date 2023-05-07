import styled from "styled-components";

import { ComponentProps, FC, ReactNode } from "react";

type Variant = "ADD" | "DELETE" | "EDIT";
type Props = {
  children: ReactNode;
  variant: Variant;
} & ComponentProps<"button">;

export const Button: FC<Props> = ({ children, ...props }) => {
  return <ButtonWrapper {...props}>{children}</ButtonWrapper>;
};

const ButtonWrapper = styled.button<{ variant: Variant }>`
  padding: 10px;
  border: none;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${({ variant }) => {
    switch (variant) {
      case "ADD":
        return "#4CAF50";
      case "DELETE":
        return "#FF0000";
      case "EDIT":
        return "#0066FF";
    }
  }};
`;
