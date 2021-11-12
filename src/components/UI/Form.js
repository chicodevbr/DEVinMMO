import React from 'react';
import { FieldsetStyled, FormFooterStyled, FormStyled } from './FormStyled';

export const Form = (props) => {
  return <FormStyled onSubmit={props.onSubmit}>{props.children}</FormStyled>;
};

export const FormFooter = (props) => {
  return <FormFooterStyled>{props.children}</FormFooterStyled>;
};

export const FormFieldset = (props) => {
  return <FieldsetStyled>{props.children}</FieldsetStyled>;
};
