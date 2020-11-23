import React from 'react';
import { useSelector } from 'react-redux';
import { createMuiTheme, ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/home';
import PerroPage from './pages/perro';

import GlobalStyles from './global-styles';

import { palette as colors } from './constants';

const App = () => {
  const darkMode = useSelector((state) => state.darkMode);
  const theme = responsiveFontSizes(
    createMuiTheme({
      palette: {
        type: darkMode ? 'dark' : 'light',
        primary: {
          main: colors.primary,
        },
        secondary: {
          main: colors.secondary,
        },
      },
    })
  );

  return (
    <>
      <GlobalStyles theme={theme} />
      <Router>
        <ThemeProvider theme={theme}>
          <Switch>
            <Route path="/">
              <HomePage />
            </Route>
            <Route path="/perro/:id">
              <PerroPage />
            </Route>
          </Switch>
        </ThemeProvider>
      </Router>
    </>
  );
};

export default App;
