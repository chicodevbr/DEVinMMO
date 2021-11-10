import React from 'react';
import Container from '../UI/Container';
import { Content, Image, ImageBox, Title } from './GameDetailsItemStyled';

const DetailsItem = (props) => {
  return (
    <Container>
      <Title>
        <h1>{props.title}</h1>
      </Title>
      <ImageBox>
        <Image src={props.image} alt={props.title} />
      </ImageBox>

      <Content>
        <h3>Description</h3>
        {props.description}
      </Content>
    </Container>
  );
};

export default DetailsItem;
