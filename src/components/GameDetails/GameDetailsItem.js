import React from 'react';

import Container from '../UI/Container';
import { Content, Image, ImageBox, Title } from './GameDetailsItemStyled';
import {
  InfoContainer,
  InfoContent,
  Paragraph,
  SubTitle,
} from '../Games/GameItemStyled';

const DetailsItem = (props) => {
  return (
    <Container>
      <Title>
        <h1>{props.title}</h1>
      </Title>
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
    </Container>
  );
};

export default DetailsItem;
