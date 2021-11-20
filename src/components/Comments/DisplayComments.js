import React, { useEffect } from 'react';
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

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem('comments')) || [];
    storage[0].count = data;
    console.log(storage);
    localStorage.setItem('comments', JSON.stringify(storage));
  }, [data]);

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
          {props.count}
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
