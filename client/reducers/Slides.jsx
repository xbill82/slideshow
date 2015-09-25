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

export function visibility(state = 'visible', action) {
  switch (action.type) {
    case SHOW_SLIDE:
      return 'visible';
    case HIDE_SLIDE:
      return 'hidden';
    default:
      return state;
  }
}
