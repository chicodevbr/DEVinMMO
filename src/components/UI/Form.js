import React from 'react';
import {
  FieldsetStyled,
  FormContainerStyled,
  FormFooterStyled,
  FormHeaderStyled,
  FormStyled,
} from './FormStyled';

export const Form = (props) => {
  return <FormStyled onSubmit={props.onSubmit}>{props.children}</FormStyled>;
};

export const FormFooter = (props) => {
  return <FormFooterStyled>{props.children}</FormFooterStyled>;
};

export const FormFieldset = (props) => {
  return <FieldsetStyled>{props.children}</FieldsetStyled>;
};

export const FormContainer = (props) => {
  return <FormContainerStyled>{props.children}</FormContainerStyled>;
};

export const FormHeader = (props) => {
  return <FormHeaderStyled>{props.children}</FormHeaderStyled>;
};
