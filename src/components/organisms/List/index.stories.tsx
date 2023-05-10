import type { Meta, StoryObj } from "@storybook/react";

import { List } from ".";

const meta: Meta<typeof List> = {
  title: "Components/organisms/List",
  component: List,
};

export default meta;
type Story = StoryObj<typeof List>;

export const Default: Story = {
  args: {
    label: "買い物に行く",
    check: false,
  },
};

export const Checked: Story = {
  args: {
    label: "買い物に行く",
    check: true,
  },
};
export const IsEdit: Story = {
  args: {
    label: "買い物に行く",
    check: false,
    isEdit: true,
  },
};
export const Lists: Story = {
  render: () => (
    <div>
      <List
        label="買い物へ行く買い物へ行く買い物へ行く買い物へ行く買い物へ行く買い物へ行く買い物へ行く買い物へ行く買い物へ行く買い物へ行く買い物へ行く買い物へ行く買い物へ行く買い物へ行く買い物へ行く買い物へ行く買い物へ行く買い物へ行く買い物へ行く買い物へ行く"
        check={false}
        setCheck={() => {}}
      />
      <List label="買い物へ行く" check={true} setCheck={() => {}} />
      <List label="買い物へ行く" check={false} isEdit setCheck={() => {}} />
    </div>
  ),
};
