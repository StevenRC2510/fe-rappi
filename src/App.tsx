import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ConnectedRouter } from 'connected-react-router';
import { Button, Typography } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import {store, persistor, history } from './store';
import { Layout } from './components/layout';
import { theme } from './config/theme';

export const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ConnectedRouter history={history}>
            <Layout />
          </ConnectedRouter>
        </PersistGate>
      </Provider>
    </MuiThemeProvider>
  );
};
