import React from 'react';
import { useThemeToggle } from '../../context/AppThemeProvider';
import { ToggleButton } from '@adobe/react-spectrum';
import Light from '@spectrum-icons/workflow/Light';
import Moon from '@spectrum-icons/workflow/Moon';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useThemeToggle();
  return (
    <ToggleButton
      staticColor={'white'}
      width={{ base: '35px' }}
      onClick={toggleTheme}
      isQuiet
    >
      {!isDark ? (
        <Moon aria-label="Switch to Dark Mode" />
      ) : (
        <Light aria-label="Switch to Light Mode" />
      )}
    </ToggleButton>
  );
};

export default ThemeToggle;
