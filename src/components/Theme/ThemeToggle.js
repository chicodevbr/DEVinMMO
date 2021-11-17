import React from 'react';
import { useThemeToggle } from '../../context/AppThemeProvider';
import { Flex, View, ToggleButton } from '@adobe/react-spectrum';

import Moon from '@spectrum-icons/workflow/Moon';

const ThemeToggle = (props) => {
  const { toggleTheme } = useThemeToggle();
  return (
    <Flex wrap grid="size-10">
      <View>
        <ToggleButton
          staticColor={'white'}
          width={{ base: '40px' }}
          onPress={toggleTheme}
          onClick={props.onClick}
          isQuiet
        >
          <Moon aria-label="Switch to Dark Mode" />
        </ToggleButton>
      </View>
    </Flex>
  );
};

export default ThemeToggle;
