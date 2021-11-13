import React, { useReducer, useState } from 'react';
import moment from 'moment';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

import {
  ButtonComment,
  CommentContainer,
  CommentFooter,
  NameStyled,
  Paragraph,
} from './CommentStyled';

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + action.payload,
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - action.payload,
      };

    default:
      throw new Error('Unexpected action');
  }
};

const storageArr = JSON.parse(localStorage.getItem('comments')) || [];

const DisplayComments = (props) => {
  const initialState = {
    name: props.name,
    count: 0,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  let count = state.count;
  const updateLocalStorage = (update) => {
    storageArr.forEach((comment) => {
      console.log(count);
      if (comment.name === props.name) {
        console.log(comment.name);
        console.log(props.name);
        storageArr.count = update;
        localStorage.setItem('comments', JSON.stringify(storageArr));
      }
    });
  };

  useState(() => {
    if (state !== initialState) {
      updateLocalStorage(count);
    }
  }, [state]);

  return (
    <CommentContainer>
      <Paragraph>
        <NameStyled>{props.name}</NameStyled>
        {moment(props.date).fromNow()}
      </Paragraph>
      <p>{props.comment}</p>
      <CommentFooter>
        <p>
          <ButtonComment
            onClick={() => dispatch({ type: 'INCREMENT', payload: 1 })}
          >
            <FaArrowUp />
          </ButtonComment>
          {state.count}
          <ButtonComment
            onClick={() => dispatch({ type: 'DECREMENT', payload: 1 })}
          >
            <FaArrowDown />
          </ButtonComment>
        </p>
      </CommentFooter>
    </CommentContainer>
  );
};

export default DisplayComments;
