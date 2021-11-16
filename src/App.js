import React from 'react';
import { AppTheme } from './context/AppThemeProvider';
import { DataLayer } from './context/DataLayer';
import { initialState, reducer } from './context/reducer';

import AppRoutes from './routes/AppRoutes';
import GlobalStyle from './style/GlobalStyle';

function App() {
  return (
    <AppTheme>
      <GlobalStyle />
      <DataLayer initialstate={initialState} reducer={reducer}>
        <AppRoutes />
      </DataLayer>
    </AppTheme>
  );
}

export default App;
