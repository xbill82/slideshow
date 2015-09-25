import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SlideContainer from '../components/Slides/SlideContainer.jsx';
import * as SlideActions from '../actions/SlideActions.jsx';

function mapStateToProps(state) {
  return {
    visibility: state.visibility,
    index: state.index
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(SlideActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SlideContainer);
