import React from 'react';

export default class IndexComponent extends React.Component {
  onKey(event) {
    console.log('Keypressed ');
  }

  render() {
    var style = {
      visibility: this.props.visibility
    };

    return (
      <div className="container" style={style} onKeyPress={this.onKey} tabIndex="1" ref="divContainer">
        {this.renderTag()}
      </div>
    )
  }

  componentDidMount() {
    React.findDOMNode(this.refs.divContainer).focus();
  }

  renderTag() {
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

  renderImage(src, visibility) {
    return (
      <img src={src} ></img>
    );
  }

  renderVideo(src) {
    return (
      <video src={src} autoPlay></video>
    )
  }
}

IndexComponent.defaultProps = {
  tagName: 'img'
};
