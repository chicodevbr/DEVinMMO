import React from 'react';

import { ButtonPlatform, PlatformCard } from './PlatformStyled';

const Platform = (props) => {
  return (
    <PlatformCard>
      {props.platform === 'PC (Windows)' && <ButtonPlatform>PC</ButtonPlatform>}
      {props.platform === 'PC (Windows), Web Browser' ||
        (props.platform === 'Web Browser' && (
          <ButtonPlatform>Web</ButtonPlatform>
        ))}
    </PlatformCard>
  );
};

export default Platform;
