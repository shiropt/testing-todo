import type { Meta, StoryObj } from "@storybook/react";

import { Header } from ".";
import { Form } from "../../molecules/Form";

const meta: Meta<typeof Header> = {
  title: "Components/organisms/Header",
  component: Header,
};

export default meta;
type Story = StoryObj<typeof Header>;

const mockRegister: any = "";
export const Todo: Story = {
  args: { children: <Form buttonName="追加" register={mockRegister} />, title: "TODOリスト" },
};
