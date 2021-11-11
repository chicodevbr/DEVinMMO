import React from 'react';

import Container from '../UI/Container';
import { Content, DetailsWrap, Image, ImageBox } from './GameDetailsItemStyled';
import {
  InfoContainer,
  InfoContent,
  Paragraph,
  SubTitle,
} from '../Games/GameItemStyled';
import RequirementsList from './RequirementsList';

const DetailsItem = (props) => {
  return (
    <Container>
      <DetailsWrap>
        <h1>{props.title}</h1>
      </DetailsWrap>
      <ImageBox>
        <Image src={props.image} alt={props.title} />
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
    </Container>
  );
};

export default DetailsItem;
