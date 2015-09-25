import { INCREMENT_INDEX, DECREMENT_INDEX, SHOW_SLIDE, HIDE_SLIDE } from '../actions/SlideActions.jsx';

export function index(state = 0, action) {
  switch (action.type) {
    case INCREMENT_INDEX:
      return state + 1;
    case DECREMENT_INDEX:
      return state - 1;
    default:
      return state;
  }
}

export function opacity(state = 1, action) {
  switch (action.type) {
    case SHOW_SLIDE:
      return 1;
    case HIDE_SLIDE:
      return 0;
    default:
      return state;
  }
}
