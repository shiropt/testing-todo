import { FC, ReactNode } from "react";
import { styled } from "styled-components";
type Props = {
  title: string;
  children: ReactNode;
};

export const Header: FC<Props> = ({ title, children }) => {
  return (
    <HeaderWrapper>
      <Title>{title}</Title>
      {children}
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  background-color: #333;
  color: #fff;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
`;

const Title = styled.h1`
  width: 70%;
  margin: 0;
  font-size: 24px;
`;
