import React from 'react';
import Slide from 'components/Slides/Slide.jsx';

export default class SlideContainer extends React.Component {
  onKey(event) {
    console.log('Keypressed ');
  }

  render() {
    var style = {
      visibility: this.props.visibility
    };

    return (
      <div className="container" style={style} onKeyPress={this.onKey} tabIndex="1" ref="divContainer">
        <Slide tagName={this.props.tagName} src={this.props.src} />
      </div>
    )
  }

  componentDidMount() {
    React.findDOMNode(this.refs.divContainer).focus();
  }

}
