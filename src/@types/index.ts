export type Todo = {
  id: number;
  title: string;
  createdDate: string;
  isCompleted: boolean;
  dueDate: string;
  isEditMode: boolean;
};

export enum Tab {
  All = 'All',
  Daily = 'Daily',
}
