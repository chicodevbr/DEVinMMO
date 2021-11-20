import React from 'react';
import CarouselGame from '../Carousel/Carousel';
import { CarouselBox } from './HeroStyled';

const CarouselHero = (props) => {
  const data = [
    {
      image: props.image0,
      caption: props.caption0,
    },
    {
      image: props.image1,
      caption: props.caption1,
    },
    {
      image: props.image2,
      caption: props.caption2,
    },
  ];
  return (
    <CarouselBox>
      <CarouselGame
        data={data}
        width="800"
        height="500px"
        thumbnails={false}
        slideNumber={false}
      />
    </CarouselBox>
  );
};

export default CarouselHero;
