import { createEvent, createStore } from 'effector';

export const toggleTheme = createEvent();
export const $theme = createStore<'light' | 'dark'>('dark').on(
  toggleTheme,
  (theme) => (theme === 'dark' ? 'light' : 'dark'),
);
