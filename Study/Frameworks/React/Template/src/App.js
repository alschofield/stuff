import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Footer } from './features/main-components/footer/Footer';
import { Nav } from './features/main-components/nav/Nav';
import { Home } from './features/pages/home/Home';
import './App.css';

// import './api/server'

function App() {
  return (
    <Router>
      <div>
        <Nav />

        <Switch>

          <Route path="/">
            <Home />
          </Route>

        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
