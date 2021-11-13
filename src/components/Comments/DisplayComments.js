import React from 'react';
import moment from 'moment';
import { CommentContainer, NameStyled, Paragraph } from './ComentStyled';

const DisplayComments = (props) => {
  return (
    <CommentContainer key={props.key}>
      <Paragraph>
        <NameStyled>{props.name}</NameStyled>
        {moment(props.date).fromNow()}
      </Paragraph>
      <p>{props.comment}</p>
    </CommentContainer>
  );
};

export default DisplayComments;
