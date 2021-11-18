import React from 'react';
import { Carousel } from 'react-carousel-minimal';

const CarouselGame = (props) => {
  const slideNumberStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  };

  const captionStyle = {
    fontSize: '2rem',
    fontWeight: '600',
    cursor: 'pointer',
  };
  return (
    <div>
      <Carousel
        data={props.data}
        time={5000}
        width={props.width}
        height={props.height}
        captionStyle={captionStyle}
        radius="5px"
        slideNumber={props.slideNumber}
        slideNumberStyle={slideNumberStyle}
        captionPosition="bottom"
        automatic={true}
        dots={true}
        pauseIconColor="white"
        pauseIconSize="40px"
        slideBackgroundColor="darkgrey"
        slideImageFit="cover"
        thumbnails={props.thumbnails}
        thumbnailWidth="200px"
        style={props.style}
      />
    </div>
  );
};

export default CarouselGame;
