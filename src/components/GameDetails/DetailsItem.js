import React from 'react';
import Box from '../UI/Box';
import Container from '../UI/Container';

const DetailsItem = (props) => {
  return (
    <Container>
      <div>
        <h1>{props.title}</h1>
      </div>
      <img src={props.thumbnail} alt={props.title} />
      <article>{props.description}</article>
      <Box>
        <h2>Requisitos de sistema</h2>
        <p>Sistema Operacional</p>
        <span></span>
      </Box>
    </Container>
  );
};

export default DetailsItem;
