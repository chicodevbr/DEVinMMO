import React from 'react';
import { DataLayer } from './context/DataLayer';
import { initialState, reducer } from './context/reducer';

import AppRoutes from './routes/AppRoutes';
import GlobalStyle from './style/GlobalStyle';

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <DataLayer initialstate={initialState} reducer={reducer}>
        <AppRoutes />
      </DataLayer>
    </React.Fragment>
  );
}

export default App;
