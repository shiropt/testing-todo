import type { Meta, StoryObj } from "@storybook/react";

import { Button } from ".";
import { styled } from "styled-components";

const meta: Meta<typeof Button> = {
  title: "Components/atoms/Button",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Buttons: Story = {
  render: () => (
    <div>
      <div>
        <h2>Small</h2>
        <ButtonWrapper size="SMALL" variant="ADD">
          Button
        </ButtonWrapper>
        <ButtonWrapper size="SMALL" variant="EDIT">
          Button
        </ButtonWrapper>
        <ButtonWrapper size="SMALL" variant="DELETE">
          Button
        </ButtonWrapper>
      </div>
      <Flex>
        <div>
          <h2>Medium(default)</h2>
          <ButtonWrapper variant="ADD">Button</ButtonWrapper>
          <ButtonWrapper variant="EDIT">Button</ButtonWrapper>
          <ButtonWrapper variant="DELETE">Button</ButtonWrapper>
        </div>
        <div>
          <h2>Disabled</h2>
          <ButtonWrapper disabled variant="ADD">
            Button
          </ButtonWrapper>
          <ButtonWrapper disabled variant="EDIT">
            Button
          </ButtonWrapper>
          <ButtonWrapper disabled variant="DELETE">
            Button
          </ButtonWrapper>
        </div>
      </Flex>
      <div>
        <h2>Large</h2>
        <ButtonWrapper size="LARGE" variant="ADD">
          Button
        </ButtonWrapper>
        <ButtonWrapper size="LARGE" variant="EDIT">
          Button
        </ButtonWrapper>
        <ButtonWrapper size="LARGE" variant="DELETE">
          Button
        </ButtonWrapper>
      </div>
    </div>
  ),
};

const ButtonWrapper = styled(Button)`
  margin: 0 8px;
`;
const Flex = styled.div`
  display: flex;
`;
