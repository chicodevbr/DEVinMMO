import React from 'react';
import moment from 'moment';

const DisplayComments = (props) => {
  return (
    <div key={props.key}>
      <p>
        {props.name}
        <span>{moment(props.date).fromNow()}</span>
      </p>
      <p>{props.comment}</p>
    </div>
  );
};

export default DisplayComments;
