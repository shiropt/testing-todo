import { factory, primaryKey } from '@mswjs/data';

export const db = factory({
  todo: {
    id: primaryKey(Number),
    title: String,
    isCompleted: Boolean,
    createdDate: String,
    dueDate: String,
    isEditMode: Boolean,
  },
});
