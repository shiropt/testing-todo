import { FC } from "react";
import { styled } from "styled-components";
import { TextBox } from "../../atoms/TextBox";

export type Props = {
  label: string;
  check: boolean;
  isEdit?: boolean;
  setCheck: (check: boolean) => void;
};

export const CheckLabel: FC<Props> = ({ label, check, isEdit = false, setCheck }) => {
  return (
    <>
      <Wrapper>
        <CheckBox type="checkbox" checked={check} onChange={() => setCheck(!check)} />
        {isEdit ? <TextBoxWrapper placeholder="Todoを入力してください" /> : <Label isCheck={check}>{label}</Label>}
      </Wrapper>
    </>
  );
};
const Label = styled.label<{ isCheck: boolean }>`
  text-decoration: ${({ isCheck }) => (isCheck ? `line-through` : "none")};
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
