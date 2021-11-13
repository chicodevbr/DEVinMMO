import React from 'react';
import { ButtonStyled } from './ButtonStyled';

const Button = (props) => {
  return (
    <ButtonStyled
      className={`${props.ClassName}`}
      style={props.style}
      onClick={props.onClick}
      type={props.type}
    >
      {props.children}
    </ButtonStyled>
  );
};

export default Button;
