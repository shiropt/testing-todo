export type Todo = {
  id: number;
  title: string;
  createdDate: string;
  isCompleted: boolean;
  dueDate: string;
};

export enum Tab {
  All = "All",
  Daily = "Daily",
}
