import React from 'react';
import { Carousel } from 'react-carousel-minimal';

const CarouselGameDetail = (props) => {
  const data = [
    {
      image: props.image0,
    },
    {
      image: props.image1,
    },
    {
      image: props.image2,
    },
    {
      image: props.image3,
    },
  ];

  const slideNumberStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  };
  return (
    <div>
      <Carousel
        data={data}
        time={5000}
        width="100%"
        height="600px"
        radius="5px"
        slideNumber={true}
        slideNumberStyle={slideNumberStyle}
        captionPosition="bottom"
        automatic={false}
        dots={true}
        pauseIconColor="white"
        pauseIconSize="40px"
        slideBackgroundColor="darkgrey"
        slideImageFit="cover"
        thumbnails={true}
        thumbnailWidth="200px"
        style={{
          overflow: 'hidden',
        }}
      />
    </div>
  );
};

export default CarouselGameDetail;
