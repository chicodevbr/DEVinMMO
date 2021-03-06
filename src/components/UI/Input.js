import React from 'react';
import { InputStyled, TextAreaStyled } from './InputStyled';

const Input = (props) => {
  const element =
    props.element === 'input' ? (
      <InputStyled
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        onBlur={props.onBlur}
        value={props.value}
        style={props.style}
        size={props.size}
      />
    ) : (
      <TextAreaStyled
        id={props.id}
        row={props.row || 100}
        cols={props.cols || 60}
        onChange={props.onChange}
        placeholder={props.placeholder}
        onBlur={props.onBlur}
        value={props.value}
      />
    );

  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      {element}
    </div>
  );
};

export default Input;
