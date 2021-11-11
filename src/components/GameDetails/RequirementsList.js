import React from 'react';

import {
  ListTitle,
  RequirementsCard,
  SubTitleRequirements,
} from './GameDetailsItemStyled';

const RequirementsList = (props) => {
  return (
    <RequirementsCard>
      <SubTitleRequirements>Requirements</SubTitleRequirements>
      <ul>
        <li>
          <ListTitle>OS:</ListTitle>
          <span>{props.os}</span>
        </li>
        <li>
          <ListTitle>Processor:</ListTitle>
          <span>{props.processor}</span>
        </li>
        <li>
          <ListTitle>Memory:</ListTitle>
          <span>{props.memory}</span>
        </li>
        <li>
          <ListTitle>Graphics:</ListTitle>
          <span>{props.graphics}</span>
        </li>
        <li>
          <ListTitle>Storage:</ListTitle>
          <span>{props.storage}</span>
        </li>
      </ul>
    </RequirementsCard>
  );
};

export default RequirementsList;
