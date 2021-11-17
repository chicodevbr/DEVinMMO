import React from 'react';
import { useThemeToggle } from '../../context/AppThemeProvider';
import { ToggleButton } from '@adobe/react-spectrum';

import Moon from '@spectrum-icons/workflow/Moon';

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
      <Moon aria-label="Switch to Dark Mode" />
    </ToggleButton>
  );
};

export default ThemeToggle;
