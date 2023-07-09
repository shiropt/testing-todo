import type { Meta, StoryObj } from "@storybook/react";

import { List } from ".";

const meta: Meta<typeof List> = {
  title: "Components/organisms/List",
  component: List,
};

export default meta;
type Story = StoryObj<typeof List>;

// export const Default: Story = {
//   args: {
//     label: "買い物に行く",
//     check: false,
//   },
// };

// export const Checked: Story = {
//   args: {
//     label: "買い物に行く",
//     check: true,
//   },
// };
// export const IsEdit: Story = {
//   args: {
//     label: "買い物に行く",
//     check: false,
//     isEdit: true,
//   },
// };
// const mockRegister: any = "";
// export const Lists: Story = {
//   render: () => (
//     <div>
//       <List
//         label="買い物へ行く買い物へ行く買い物へ行く買い物へ行く買い物へ行く買い物へ行く買い物へ行く買い物へ行く買い物へ行く買い物へ行く買い物へ行く買い物へ行く買い物へ行く買い物へ行く買い物へ行く買い物へ行く買い物へ行く買い物へ行く買い物へ行く買い物へ行く"
//         check={false}
//         register={mockRegister}
//       />
//       <List label="買い物へ行く" check={true} register={mockRegister} />
//       <List label="買い物へ行く" check={false} isEdit register={mockRegister} />
//     </div>
//   ),
// };
