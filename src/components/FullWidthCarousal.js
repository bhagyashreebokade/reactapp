import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: 'https://cdn.cnn.com/cnnnext/dam/assets/191017192836-01-trump-dallas-rally-1017-screegrab-super-tease.jpg',
    altText: 'Wall Street Journal',
    caption: 'Wall Street Journal',
    header: 'Wall Street',
    key: '1'
  },
  {
    src: 'https://media2.foxnews.com/BrightCove/694940094001/2019/10/03/694940094001_6091759440001_6091754645001-vs.jpg',
    altText: 'Top business headlines',
    header: 'Top business headlines',
    caption: 'Top business headlines in the US right now',
    key: '2'
  },
  {
    src: 'https://s3media.247sports.com/Uploads/Assets/85/482/9482085.jpg?fit=bounds&crop=1200:630,offset-y0.50&width=1200&height=375',
    altText: 'The Verge',
    header: 'The Verge',
    caption: 'Top headlines from The Verge right now',
    key: '3'
  }
];

const FullWidthCarousal = () => <UncontrolledCarousel items={items} />;

export default FullWidthCarousal;