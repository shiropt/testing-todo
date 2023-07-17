import styled from "styled-components";

import { ComponentProps, FC, ReactNode } from "react";

type Variant = "ADD" | "DELETE" | "EDIT";
type Size = "SMALL" | "MEDIUM" | "LARGE";
export type Props = {
  children: ReactNode;
  variant: Variant;
  size?: Size;
} & ComponentProps<"button">;

export const Button: FC<Props> = ({ children, size = "MEDIUM", ...props }) => {
  return (
    <ButtonWrapper size={size} {...props}>
      {children}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button<Pick<Props, "size" | "variant">>`
  padding: 10px;
  border: none;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  white-space: nowrap;
  width: ${({ size }) => {
    switch (size) {
      case "SMALL":
        return "60px";
      case "LARGE":
        return "120px";
      default:
        return "80px";
    }
  }};
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
  &:hover {
    opacity: 0.8;
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
