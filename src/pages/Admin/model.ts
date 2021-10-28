import { createEvent, restore } from 'effector';

export const setTab = createEvent<number>();
export const $tab = restore(setTab, 0);
