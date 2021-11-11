import React from 'react';
import { PlatformCard, PlatformParagraph } from './PlatformStyled';

const Platform = (props) => {
  return (
    <React.Fragment>
      {props.platform === 'PC (Windows)' && (
        <PlatformCard>
          <PlatformParagraph>PC</PlatformParagraph>
        </PlatformCard>
      )}
      {props.platform === 'PC (Windows), Web Browser' && (
        <PlatformCard>
          <PlatformParagraph>PC/Web</PlatformParagraph>
        </PlatformCard>
      )}
    </React.Fragment>
  );
};

export default Platform;
