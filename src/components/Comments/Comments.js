import React from 'react';
import { useFormik } from 'formik';
import { Form, FormFooter } from '../UI/Form';
import Input from '../UI/Input';

const Comments = (props) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      comment: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <Form onSubmit={formik.handleSubmit}>
      <Input
        element="input"
        label="Name"
        type="text"
        id="name"
        name="name"
        value={props.values}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <Input
        element="input"
        label="E-mail"
        type="email"
        id="email"
        name="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <Input
        label="Comment"
        type="text"
        id="comment"
        name="comment"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <FormFooter>
        <button type="submit">Submit</button>
      </FormFooter>
    </Form>
  );
};

export default Comments;
