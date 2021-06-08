import { MouseEvent } from 'react';
import { createEvent, createStore } from 'effector';

export const openSignInModal = createEvent<MouseEvent>();
export const closeSignInModal = createEvent<MouseEvent>();

export const $signInModalIsOpen = createStore(false)
  .on(openSignInModal, () => true)
  .on(closeSignInModal, () => false);

export const signInWithKeeper = createEvent<MouseEvent>();
