import React from 'react';

export default class IndexComponent extends React.Component {
  render() {
    switch (this.props.tagName) {
      case 'video':
        return this.renderVideo(this.props.src, this.props.visibility);
        break;

      default:
      case 'img':
        return this.renderImage(this.props.src, this.props.visibility);
        break;
    }
  }

  renderImage(src, visibility) {
    var style = {
      visibility: visibility
    };

    return (
      <img src={src} style={style}></img>
    );
  }

  renderVideo(src, visibility) {
    var style = {
      visibility: visibility
    };

    return (
      <video src={src} autoPlay style={style}></video>
    )
  }
}

IndexComponent.defaultProps = {
  tagName: 'img'
};
