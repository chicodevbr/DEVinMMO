import React from 'react';

const Input = (props) => {
  const element =
    props.element === 'input' ? (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        onBlur={props.onBlur}
        value={props.value}
      />
    ) : (
      <textarea
        id={props.id}
        row={props.row || 3}
        onChange={props.onChange}
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
