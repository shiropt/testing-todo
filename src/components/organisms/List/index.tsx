import { styled } from "styled-components";
import { CheckLabel } from "../../molecules/CheckLabel";
import { FC } from "react";
import type { Props as CheckLabelProps } from "../../molecules/CheckLabel";
import { Button } from "../../atoms/Button";
type Props = CheckLabelProps;

export const List: FC<Props> = ({ ...props }) => {
  return (
    <ListWrapper {...props}>
      <CheckLabelWrapper>
        <CheckLabel {...props} />
      </CheckLabelWrapper>
      <div>
        {props.isEdit ? (
          <ButtonWrapper>
            <ListButton variant="ADD">確定</ListButton>
          </ButtonWrapper>
        ) : (
          <ButtonWrapper>
            <ListButton variant="EDIT">編集</ListButton>
            <ListButton variant="DELETE">削除</ListButton>
          </ButtonWrapper>
        )}
      </div>
    </ListWrapper>
  );
};

const ListWrapper = styled.li<Props>`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  background: ${(props) => (props.isEdit ? "#e8f8ff" : "#FFFF")};
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
