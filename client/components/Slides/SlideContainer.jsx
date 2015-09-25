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

    switch(event.key) {
      case 's':
        console.log('pressed s' );
        show();
      break;
      case ' ':
        console.log('pressed spacebar' );
        toggleVisibility();
      break;
      case 'h':
        console.log('pressed h');
        hide();
      break;
      case 'n':
        console.log('pressed n');
        nextSlide();
      break;
      case 'd':
        console.log('pressed p');
        previousSlide();
      break;
    }
  }

  render() {
    var style = {
      opacity: this.props.opacity
    };

    if (this.props.opacity < 1)
      this.refs.slide.pauseSlide();
    else
      this.refs.slide.playSlide();

    return (
      <div className="container" style={style} onKeyPress={this.onKey} tabIndex="1" ref="divContainer">
        <Slide tagName={this.slides[this.props.index].tagName} src={this.slides[this.props.index].src} ref="slide"/>
      </div>
    )
  }

  componentDidMount() {
    React.findDOMNode(this.refs.divContainer).focus();
  }

}
