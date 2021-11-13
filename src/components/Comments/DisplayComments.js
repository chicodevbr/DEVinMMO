import React, { useReducer } from 'react';
import moment from 'moment';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

import {
  ButtonComment,
  CommentContainer,
  CommentFooter,
  NameStyled,
  Paragraph,
} from './CommentStyled';

const initialState = {
  count: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.payload,
      };
    case 'DECREMENT':
      return {
        count: state.count - action.payload,
      };

    default:
      throw new Error('Unexpected action');
  }
};

const DisplayComments = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CommentContainer key={props.key}>
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
