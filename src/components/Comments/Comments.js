import React from 'react';
import { useLocation } from 'react-router-dom';

import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
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
import { ErrorComment } from './CommentStyled';

const storageArr = JSON.parse(localStorage.getItem('comments')) || [];

const Comments = () => {
  let location = useLocation();

  const handleCommentSubmit = (values) => {
    let storage = {};

    storage.id = Date.now().toLocaleString();
    storage.name = values.name;
    storage.email = values.email;
    storage.comment = values.comment;
    storage.gameLocation = location.pathname;
    storage.count = 0;
    storage.date = new Date();

    storageArr.push(storage);
    localStorage.setItem('comments', JSON.stringify(storageArr));
    window.location.reload();
  };
  return (
    <FormContainer>
      <Formik
        initialValues={{
          game: '',
          name: '',
          email: '',
          comment: '',
        }}
        validationSchema={commentSchema}
        onSubmit={handleCommentSubmit}
      >
        {({ values, handleChange, handleSubmit, handleBlur, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <h3>Comments</h3>
            <FormHeader>
              <FormFieldset>
                <Input
                  element="input"
                  placeholder="Name"
                  type="text"
                  id="name"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage component={ErrorComment} name="name" />
              </FormFieldset>
              <FormFieldset>
                <Input
                  element="input"
                  placeholder="E-mail"
                  type="email"
                  id="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage component={ErrorComment} name="email" />
              </FormFieldset>
            </FormHeader>

            <FormFieldset>
              <Input
                type="text"
                id="comment"
                name="comment"
                values={values.comment}
                placeholder="Write a comment"
                style={{ height: '100px' }}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorMessage component={ErrorComment} name="comment" />
            </FormFieldset>
            <FormFooter>
              <Button
                style={{ background: '#F6683D', color: 'white' }}
                type="submit"
                disabled={isSubmitting}
              >
                Submit
              </Button>
            </FormFooter>
          </Form>
        )}
      </Formik>
      {storageArr &&
        storageArr.map((data) => {
          return data.gameLocation === location.pathname ? (
            <DisplayComments
              key={data.id}
              name={data.name}
              date={data.date}
              comment={data.comment}
            />
          ) : null;
        })}
    </FormContainer>
  );
};

export default Comments;

const commentSchema = yup.object().shape({
  name: yup.string().required('This filed is required'),
  email: yup.string().email().required('This filed is required'),
  comment: yup.string().required('This filed is required'),
});
