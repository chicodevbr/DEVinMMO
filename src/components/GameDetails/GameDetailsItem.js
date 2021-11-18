import React from 'react';

import {
  Content,
  DetailsWrap,
  ImageBox,
  TitleDetail,
} from './GameDetailsItemStyled';
import { Paragraph, SubTitle } from '../Games/GameItemStyled';
import RequirementsList from './RequirementsList';
import CarouselGame from '../Carousel/Carousel';
import Comments from '../Comments/Comments';

const DetailsItem = (props) => {
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
  ];
  const platform = props.platform;
  return (
    <>
      <DetailsWrap>
        <TitleDetail>{props.title}</TitleDetail>

        <ImageBox>
          <CarouselGame
            data={data}
            width="100%"
            height="600px"
            thumbnails={true}
            slideNumber={true}
          />
        </ImageBox>

        <SubTitle>Genre</SubTitle>
        <Paragraph>{props.genre}</Paragraph>

        <SubTitle>Platform</SubTitle>
        <Paragraph>{props.platform}</Paragraph>

        <Content>
          <h3>Description</h3>
          {props.description}
        </Content>

        {platform !== 'Web Browser' && (
          <RequirementsList
            os={props.os}
            processor={props.processor}
            memory={props.memory}
            graphics={props.graphics}
            storage={props.storage}
          />
        )}
      </DetailsWrap>
      <Comments />
    </>
  );
};

export default DetailsItem;
