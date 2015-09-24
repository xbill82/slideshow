import React from 'react';
import Slide from 'components/Slides/Slide.jsx';

export default class SlideContainer extends React.Component {
  getInitialState() {
    return {
      slides: [
        {
          tagName: 'img',
          src: 'http://mbaction.com/wp-content/uploads/2014/11/Screen-Shot-2014-10-30-at-11.35.37-AM.jpg'
        },
        {
          tagName: 'img',
          src: 'http://cruiser.mototribe.com/sites/default/files/styles/large/public/Fat%20Boy%20Lo.jpg?itok=TFHW2F5H'
        },
        {
          tagName: 'img',
          src: 'assets/IMG_3537.jpg'
        },
        {
          tagName: 'video',
          src: 'assets/bear.mp4'
        }
      ],
      index: 0,
      visibility: 'visible'
    };
  }

  onKey(event) {
    console.log('Keypressed ');
  }

  render() {
    var style = {
      visibility: this.state.visibility
    };

    return (
      <div className="container" style={style} onKeyPress={this.onKey} tabIndex="1" ref="divContainer">
        <Slide tagName={this.state.slides[this.state.index].tagName} src={this.state.slides[this.state.index].src} />
      </div>
    )
  }

  componentDidMount() {
    React.findDOMNode(this.refs.divContainer).focus();
  }

}
