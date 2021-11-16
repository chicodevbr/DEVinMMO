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
      isQuiet
      width={{ base: '30px' }}
      onClick={toggleTheme}
    >
      {isDark ? (
        <Light aria-label="Switch to Dark Mode" />
      ) : (
        <Moon aria-label="Switch to Light Mode" />
      )}
    </ToggleButton>
  );
};

export default ThemeToggle;
