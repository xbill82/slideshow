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
    const { show, hide, increment, decrement } = this.props;

    switch(event.key) {
      case 's':
        console.log('pressed s' );
        show();
      break;
      case 'h':
        console.log('pressed h');
        hide();
      break;
      case 'n':
        console.log('pressed n');
        increment();
      break;
      case 'd':
        console.log('pressed d');
        decrement();
      break;
    }
  }

  render() {
    var style = {
      visibility: this.props.visibility
    };

    return (
      <div className="container" style={style} onKeyPress={this.onKey} tabIndex="1" ref="divContainer">
        <Slide tagName={this.slides[this.props.index].tagName} src={this.slides[this.props.index].src} />
      </div>
    )
  }

  componentDidMount() {
    React.findDOMNode(this.refs.divContainer).focus();
  }

}
