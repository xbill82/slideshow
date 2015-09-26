import React from 'react';
import Slide from 'components/Slides/Slide.jsx';
import { slides } from '../../config/Slides.jsx';

export default class SlideContainer extends React.Component {
  constructor(props) {
    super(props);
    this.slides = slides;
    this.onKey = this.onKey.bind(this);
  }

  onKey(event) {
    const { toggleVisibility, show, hide, nextSlide, previousSlide } = this.props;

    switch(event.keyCode) {
      case 83: // KeyS
        console.log('Showing slide');
        show();
      break;
      case 32: // Spacebar
        console.log('Toggling slide visibility');
        toggleVisibility();
      break;
      case 72: // KeyH
        console.log('Hiding slide');
        hide();
      break;
      case 39: // Right arrow
        console.log('Next slide');
        nextSlide();
      break;
      case 37: // Left arrow
        console.log('Previous slide');
        previousSlide();
      break;
    }
  }

  render() {
    var style = {
      opacity: this.props.opacity
    };

    return (
      <div className="container" style={style} onKeyDown={this.onKey} tabIndex="1" ref="divContainer">
        <Slide tagName={this.slides[this.props.index].tagName} src={this.slides[this.props.index].src} ref="slide"/>
      </div>
    )
  }

  componentDidMount() {
    React.findDOMNode(this.refs.divContainer).focus();
  }

  componentDidUpdate() {
    if (this.refs.slide) {
      if (this.props.opacity < 1)
        this.refs.slide.pauseSlide();
      else
        this.refs.slide.playSlide();
    }
  }

}
