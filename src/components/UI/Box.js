import React from 'react';
import { BoxStyled } from './BoxStyled';

const Box = (props) => {
  return <BoxStyled>{props.children}</BoxStyled>;
};

export default Box;
