export const ja = {
  translation: {
    tab: {
      all: '全てのToDo',
      thisWeek: '今週のToDo',
    },
  },
} as const;

const { translation } = ja;
export type Translation = typeof translation;
