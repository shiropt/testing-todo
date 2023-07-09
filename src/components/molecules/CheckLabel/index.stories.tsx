import type { Meta, StoryObj } from "@storybook/react";

import { CheckLabel } from ".";

const meta: Meta<typeof CheckLabel> = {
  title: "Components/molecules/CheckLabel",
  component: CheckLabel,
};

export default meta;
type Story = StoryObj<typeof CheckLabel>;
const mockRegister: any = "";

// export const CheckLabels: Story = {
//   render: () => (
//     <div>
//       <h2>No Check</h2>
//       <CheckLabel label="買い物へ行く" register={mockRegister} check={false} />
//       <h2>Check</h2>
//       <CheckLabel label="買い物へ行く" register={mockRegister} check />
//       <h2>EditMode</h2>
//       <CheckLabel isEdit label="買い物へ行く" register={mockRegister} check={false} />
//     </div>
//   ),
// };
