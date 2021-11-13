import React from 'react';

import { useFormik } from 'formik';
import {
  Form,
  FormFieldset,
  FormFooter,
  FormContainer,
  FormHeader,
} from '../UI/Form';
import Input from '../UI/Input';
import Button from '../UI/Button';
import DisplayComments from './DisplayComments';

const storageArr = JSON.parse(localStorage.getItem('comments')) || [];

const Comments = (props) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      comment: '',
      date: new Date(),
    },
    onSubmit: (values) => {
      let storage = {};

      storage.id = Date.now().toLocaleString();
      storage.name = values.name;
      storage.email = values.email;
      storage.comment = values.comment;
      storage.date = values.date;

      storageArr.push(storage);
      localStorage.setItem('comments', JSON.stringify(storageArr));
      window.location.reload();
    },
  });
  return (
    <FormContainer>
      <Form onSubmit={formik.handleSubmit}>
        <h3>Comments</h3>
        <FormHeader>
          <FormFieldset>
            <Input
              element="input"
              placeholder="Name"
              type="text"
              id="name"
              name="name"
              value={props.values}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </FormFieldset>
          <FormFieldset>
            <Input
              element="input"
              placeholder="E-mail"
              type="email"
              id="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </FormFieldset>
        </FormHeader>

        <FormFieldset>
          <Input
            type="text"
            id="comment"
            name="comment"
            placeholder="Write a comment"
            style={{ height: '100px' }}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </FormFieldset>
        <FormFooter>
          <Button type="submit">Submit</Button>
        </FormFooter>
      </Form>
      {storageArr.map((data) => {
        return (
          <DisplayComments
            key={data.id}
            name={data.name}
            date={data.date}
            comment={data.comment}
          />
        );
      })}
    </FormContainer>
  );
};

export default Comments;
