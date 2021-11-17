import React from 'react';
import { useThemeToggle } from '../../context/AppThemeProvider';
import { Flex, View, ToggleButton } from '@adobe/react-spectrum';
import Light from '@spectrum-icons/workflow/Light';
import Moon from '@spectrum-icons/workflow/Moon';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useThemeToggle();
  return (
    <Flex wrap grid="size-40">
      <View backgroundColor="static-yellow-400" padding="size-50">
        <ToggleButton
          staticColor={'white'}
          width={{ base: '40px' }}
          onClick={toggleTheme}
        >
          {!isDark ? (
            <Moon aria-label="Switch to Dark Mode" />
          ) : (
            <Light aria-label="Switch to Light Mode" />
          )}
        </ToggleButton>
      </View>
    </Flex>
  );
};

export default ThemeToggle;
