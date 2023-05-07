import type { Meta, StoryObj } from "@storybook/react";

import { TextBox } from ".";

const meta: Meta<typeof TextBox> = {
  title: "Components/atoms/TextBox",
  component: TextBox,
};

export default meta;
type Story = StoryObj<typeof TextBox>;

export const Default: Story = {};
