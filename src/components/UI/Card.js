import React from 'react';
import CardStyled from './CardStyled';

const Card = (props) => {
  return (
    <CardStyled className={`${props.ClassName}`} style={props.style}>
      {props.children}
    </CardStyled>
  );
};

export default Card;
