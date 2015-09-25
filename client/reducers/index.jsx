import { combineReducers } from 'redux';
import { index, opacity } from './Slides.jsx';

const rootReducer = combineReducers({
  index: index,
  opacity: opacity
});

export default rootReducer;
