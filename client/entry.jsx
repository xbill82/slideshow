'use strict';

import 'styles/main.css';

import React from 'react/addons';
import SlideContainer from 'components/Slides/SlideContainer.jsx';

var slides = [
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
]

var i = 0;
var visibility = 'visible';

React.render(<SlideContainer tagName={slides[i].tagName} src={slides[i].src} visibility={visibility}/>, document.body);
