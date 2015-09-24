import React from 'react';

export default class IndexComponent extends React.Component {
  render() {
    switch (this.props.tagName ) {
      default:
      case 'img':
        return this.renderImage(this.props.src);
        break;
    }
  }

  renderImage(src) {
    return (
      <img src={src}></img>
    );
  }

  renderVideo(src) {}
}

IndexComponent.defaultProps = {
  tagName: 'img'
};
