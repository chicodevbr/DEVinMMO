import React from 'react';
import { BoxStyled } from './BoxStyled';

const Container = (props) => {
  return <BoxStyled>{props.children}</BoxStyled>;
};

export default Container;
