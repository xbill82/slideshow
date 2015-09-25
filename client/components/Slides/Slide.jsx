import React from 'react';

export default class Slide extends React.Component {

  render() {
    switch (this.props.tagName) {
      case 'video':
        return this.renderVideo(this.props.src);
        break;

      default:
      case 'img':
        return this.renderImage(this.props.src);
        break;
    }
  }

  renderImage(src) {
    return (
      <img src={src} ></img>
    );
  }

  renderVideo(src) {
    return (
      <video src={src} autoPlay ref="video"></video>
    )
  }

  pauseSlide() {
    if (this.refs.video) {
      React.findDOMNode(this.refs.video).pause();
    }
  }

  playSlide() {
    if (this.refs.video) {
      React.findDOMNode(this.refs.video).play();
    }
  }
}

Slide.defaultProps = {
  tagName: 'img'
};
