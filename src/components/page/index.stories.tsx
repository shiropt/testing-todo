import type { Meta, StoryObj } from "@storybook/react";
import { List } from "../organisms/List";
import { Header } from "../organisms/Header";
import { Form } from "../molecules/Form";
import { styled } from "styled-components";

const meta: Meta<typeof List> = {
  title: "Components/page/Todo",
  component: List,
};

export default meta;
type Story = StoryObj<typeof List>;
const mockRegister: any = "";

// export const Page: Story = {
//   render: () => (
//     <div>
//       <Header title="TODOリスト">
//         <Form buttonName="追加" register={mockRegister} />
//       </Header>
//       <Main>
//         <List
//           label="買い物へ行く買い物へ行く買い物へ行く買い物へ行く買い物へ行く買い物へ行く買い物へ行く買い物へ行く買い物へ行く買い物へ行く買い物へ行く買い物へ行く買い物へ行く買い物へ行く買い物へ行く買い物へ行く買い物へ行く買い物へ行く買い物へ行く買い物へ行く"
//           check={false}
//           register={mockRegister}
//         />
//         <List label="買い物へ行く" check={false} register={mockRegister} />
//         <List label="買い物へ行く" check={false} register={mockRegister} />
//         <List label="買い物へ行く" check={false} register={mockRegister} />
//         <List label="買い物へ行く" check={false} isEdit register={mockRegister} />
//         <List label="買い物へ行く" check={true} register={mockRegister} />
//         <List label="買い物へ行く" check={true} register={mockRegister} />
//         <List label="買い物へ行く" check={true} register={mockRegister} />
//         <List label="買い物へ行く" check={false} register={mockRegister} />
//         <List label="買い物へ行く" check={false} register={mockRegister} />
//         <List label="買い物へ行く" check={false} register={mockRegister} />
//         <List label="買い物へ行く" check={false} register={mockRegister} />
//         <List label="買い物へ行く" check={false} register={mockRegister} />
//         <List label="買い物へ行く" check={false} register={mockRegister} />
//         <List label="買い物へ行く" check={false} register={mockRegister} />
//         <List label="買い物へ行く" check={false} register={mockRegister} />
//         <List label="買い物へ行く" check={false} register={mockRegister} />
//         <List label="買い物へ行く" check={false} register={mockRegister} />
//         <List label="買い物へ行く" check={false} register={mockRegister} />
//         <List label="買い物へ行く" check={false} register={mockRegister} />
//         <List label="買い物へ行く" check={false} register={mockRegister} />
//         <List label="買い物へ行く" check={false} register={mockRegister} />
//         <List label="買い物へ行く" check={false} register={mockRegister} />
//         <List label="買い物へ行く" check={false} register={mockRegister} />
//         <List label="買い物へ行く" check={false} register={mockRegister} />
//         <List label="買い物へ行く" check={false} register={mockRegister} />
//         <List label="買い物へ行く" check={false} register={mockRegister} />
//         <List label="買い物へ行く" check={false} register={mockRegister} />
//         <List label="買い物へ行く" check={false} register={mockRegister} />
//         <List label="買い物へ行く" check={false} register={mockRegister} />
//         <List label="買い物へ行く" check={false} register={mockRegister} />
//         <List label="買い物へ行く" check={false} register={mockRegister} />
//       </Main>
//     </div>
//   ),
// };
// const Main = styled.main`
//   margin-top: 16px;
// `;
