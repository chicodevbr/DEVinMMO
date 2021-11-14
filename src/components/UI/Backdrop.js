import React from 'react';
import ReactDOM from 'react-dom';
import { BackdropStyled } from './BackdropStyled';

const Backdrop = (props) => {
  return ReactDOM.createPortal(
    <BackdropStyled onClick={props.onClick}></BackdropStyled>,
    document.getElementById('backdrop-root')
  );
};

export default Backdrop;
