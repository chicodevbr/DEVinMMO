import React from 'react';
import { useThemeToggle } from '../../context/AppThemeProvider';
import { ToggleButton } from '@adobe/react-spectrum';

import { FaMoon } from 'react-icons/fa';

const ThemeToggle = (props) => {
  const { toggleTheme } = useThemeToggle();
  return (
    <ToggleButton
      staticColor={'white'}
      width={{ base: '40px' }}
      onPress={toggleTheme}
      onClick={props.onClick}
      isQuiet
    >
      <FaMoon color="white" />
    </ToggleButton>
  );
};

export default ThemeToggle;
