import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Container } from 'schofield-common-components';
import { Nav, Footer } from 'schofield-main-components';
import Home from './features/pages/home/Home';
import './App.css';
import { ThemeProvider, themes } from 'schofield-themes';
import settings from './settings';

const TITLE = settings.get('TITLE');

const App = () => {
  let [state, updateState] = useState({
    themeName: 'dark',
    theme: themes.dark
  })

  const handleThemeToggle = () => {
    const name = (state.themeName === 'light') ? 'dark' : 'light';
    updateState({ theme: themes[name], themeName: name });
  };

  return (
    <Router>
      <ThemeProvider theme={state.theme}>
        <Container data-testid="app-container">
          <Nav theme={state.theme} handleThemeToggle={handleThemeToggle} />

          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>

          <Footer theme={state.theme} text={TITLE} />
        </Container>
      </ThemeProvider>
    </Router>
  );
}

export default App;
