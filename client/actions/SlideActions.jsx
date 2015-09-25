export const INCREMENT_INDEX = 'INCREMENT_INDEX';
export const DECREMENT_INDEX = 'DECREMENT_INDEX';
export const SHOW_SLIDE = 'SHOW_SLIDE';
export const HIDE_SLIDE = 'HIDE_SLIDE';

export function show() {
  return {
    type: SHOW_SLIDE
  };
}

export function hide() {
  return {
    type: HIDE_SLIDE
  };
}

export function increment() {
  return {
    type: INCREMENT_INDEX
  };
}

export function decrement() {
  return {
    type: DECREMENT_INDEX
  };
}
