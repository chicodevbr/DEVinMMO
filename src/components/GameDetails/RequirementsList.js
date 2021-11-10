import React from 'react';
import Box from '../UI/Box';

const RequirementsList = (props) => {
  return (
    <Box>
      <h2>Requirements</h2>
      <ul>
        <li>
          <span>OS:</span>
          <span>{props.os}</span>
        </li>
        <li>
          <span>Processor:</span>
          <span>{props.processor}</span>
        </li>
        <li>
          <span>Memory:</span>
          <span>{props.memory}</span>
        </li>
        <li>
          <span>Graphics:</span>
          <span>{props.graphics}</span>
        </li>
        <li>
          <span>Storage:</span>
          <span>{props.storage}</span>
        </li>
      </ul>
    </Box>
  );
};

export default RequirementsList;
