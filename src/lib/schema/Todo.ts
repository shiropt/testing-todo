import * as z from "zod";

export const createTodoSchema = z.object({
  title: z.string().min(1, "1文字以上入力してください"),
  isDone: z.boolean(),
});
export type Todo = z.infer<typeof createTodoSchema> & { id: number; isEdit: boolean };
