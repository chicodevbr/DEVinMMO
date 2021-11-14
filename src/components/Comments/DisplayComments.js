import React from 'react';
import moment from 'moment';
import { useDataLayerValue } from '../../context/DataLayer';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

import {
  ButtonComment,
  CommentContainer,
  CommentFooter,
  NameStyled,
  Paragraph,
} from './CommentStyled';

const DisplayComments = (props) => {
  const [{ data }, dispatch] = useDataLayerValue();
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
          {data}
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
