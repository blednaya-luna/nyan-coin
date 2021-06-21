import { createEvent, createStore } from 'effector';

export const toggleOpenSignInModal = createEvent();

export const $signInModalIsOpen = createStore(false).on(
  toggleOpenSignInModal,
  (signInModalIsOpen) => !signInModalIsOpen,
);
