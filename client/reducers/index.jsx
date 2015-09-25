import { combineReducers } from 'redux';
import { index, visibility } from './Slides.jsx';

const rootReducer = combineReducers({
  index: index,
  visibility: visibility
});

export default rootReducer;
