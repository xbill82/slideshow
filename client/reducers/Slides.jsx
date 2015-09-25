import { INCREMENT_INDEX, DECREMENT_INDEX, SHOW_SLIDE, HIDE_SLIDE } from '../actions/SlideActions.jsx';
import { slides } from '../config/Slides.jsx';

export function index(state = 0, action) {
  switch (action.type) {
    case INCREMENT_INDEX:
      if (state < slides.length - 1)
        return state + 1;
      else
        return state;
    case DECREMENT_INDEX:
      if (state > 0)
        return state - 1;
      else
        return state;
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
