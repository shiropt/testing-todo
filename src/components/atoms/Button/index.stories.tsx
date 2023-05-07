import type { Meta, StoryObj } from "@storybook/react";

import { Button } from ".";

const meta: Meta<typeof Button> = {
  title: "Components/atoms/Button",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Delete: Story = {
  args: { children: "削除", variant: "DELETE" },
};
export const Add: Story = {
  args: { children: "追加", variant: "ADD" },
};

export const Edit: Story = {
  args: { children: "編集", variant: "EDIT" },
};
