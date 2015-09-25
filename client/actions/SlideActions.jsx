export const INCREMENT_INDEX = 'INCREMENT_INDEX';
export const DECREMENT_INDEX = 'DECREMENT_INDEX';
export const SHOW_SLIDE = 'SHOW_SLIDE';
export const HIDE_SLIDE = 'HIDE_SLIDE';

export function toggleVisibility() {
  return (dispatch, getState) => {
    const { opacity } = getState();

    if (opacity > 0) {
      dispatch(hide());
    } else {
      dispatch(show());
    }
  };
}

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

export function nextSlide() {
  return {
    type: INCREMENT_INDEX
  };
}

export function previousSlide() {
  return {
    type: DECREMENT_INDEX
  };
}