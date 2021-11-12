import React from 'react';

import Container from '../UI/Container';
import { Content, DetailsWrap, ImageBox } from './GameDetailsItemStyled';
import {
  InfoContainer,
  InfoContent,
  Paragraph,
  SubTitle,
} from '../Games/GameItemStyled';
import RequirementsList from './RequirementsList';
import CarouselGameDetail from '../Carousel/Carousel';
import Comments from '../Comments/Comments';

const DetailsItem = (props) => {
  return (
    <Container>
      <DetailsWrap>
        <h1>{props.title}</h1>
      </DetailsWrap>
      <ImageBox>
        <CarouselGameDetail
          image0={props.image0}
          image1={props.image1}
          image2={props.image2}
          image3={props.image3}
        />
      </ImageBox>
      <InfoContainer>
        <InfoContent>
          <SubTitle>Genre</SubTitle>
          <Paragraph>{props.genre}</Paragraph>
        </InfoContent>
        <InfoContent>
          <SubTitle>Platform</SubTitle>
          <Paragraph>{props.platform}</Paragraph>
        </InfoContent>
      </InfoContainer>

      <Content>
        <h3>Description</h3>
        {props.description}
      </Content>
      <DetailsWrap>
        <RequirementsList
          os={props.os}
          processor={props.processor}
          memory={props.memory}
          graphics={props.graphics}
          storage={props.storage}
        />
      </DetailsWrap>
      <DetailsWrap>
        <Comments />
      </DetailsWrap>
    </Container>
  );
};

export default DetailsItem;
