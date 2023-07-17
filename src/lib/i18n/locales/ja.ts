export const ja = {
  tab: {
    all: '全てのToDo',
    thisWeek: '今週のToDo',
  },
  list: {
    all: '全てのTodoリスト',
    thisWeek: '今週のTodoリスト',
  },
  label: {
    task: 'タスク名',
    createdDate: '作成日',
    dueDate: '期日',
  },
  placeholder: {
    task: '新しいタスクを入力',
    dueDate: '期日を入力 (YYYY/MM/DD)',
  },
  button: {
    add: '追加',
    cancel: 'キャンセル',
    update: '更新',
    delete: '削除',
  },
} as const;

export type Ja = typeof ja;
