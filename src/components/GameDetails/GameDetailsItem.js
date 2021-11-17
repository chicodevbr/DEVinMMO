import React from 'react';

import { Content, DetailsWrap, ImageBox } from './GameDetailsItemStyled';
import { Paragraph, SubTitle } from '../Games/GameItemStyled';
import RequirementsList from './RequirementsList';
import CarouselGameDetail from '../Carousel/Carousel';
import Comments from '../Comments/Comments';

const DetailsItem = (props) => {
  return (
    <>
      <DetailsWrap>
        <h1>{props.title}</h1>

        <ImageBox>
          <CarouselGameDetail
            image0={props.image0}
            image1={props.image1}
            image2={props.image2}
            image3={props.image3}
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

        <RequirementsList
          os={props.os}
          processor={props.processor}
          memory={props.memory}
          graphics={props.graphics}
          storage={props.storage}
        />
      </DetailsWrap>
      <Comments />
    </>
  );
};

export default DetailsItem;
