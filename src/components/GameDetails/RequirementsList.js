import React from 'react';

import {
  ListDescription,
  ListTitle,
  RequirementsCard,
  SubTitleRequirements,
  TR,
} from './GameDetailsItemStyled';

const RequirementsList = (props) => {
  return (
    <RequirementsCard>
      <SubTitleRequirements>Requirements</SubTitleRequirements>

      <table>
        <tbody>
          <TR>
            <td>
              <ListTitle>OS:</ListTitle>
            </td>
            <td>
              <ListDescription>{props.os}</ListDescription>
            </td>
          </TR>
          <TR>
            <td>
              <ListTitle>Processor:</ListTitle>
            </td>
            <td>
              <ListDescription>{props.processor}</ListDescription>
            </td>
          </TR>
          <TR>
            <td>
              <ListTitle>Memory:</ListTitle>
            </td>
            <td>
              <ListDescription>{props.memory}</ListDescription>
            </td>
          </TR>
          <TR>
            <td>
              <ListTitle>Graphics:</ListTitle>
            </td>
            <td>
              <ListDescription>{props.graphics}</ListDescription>
            </td>
          </TR>
          <TR>
            <td>
              <ListTitle>Storage:</ListTitle>
            </td>
            <td>
              <ListDescription>{props.storage}</ListDescription>
            </td>
          </TR>
        </tbody>
      </table>
    </RequirementsCard>
  );
};

export default RequirementsList;
