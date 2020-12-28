import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Footer } from './features/main-components/footer/Footer';
import { Nav } from './features/main-components/nav/Nav';
import { Home } from './features/pages/home/Home';
import { Music } from './features/pages/music/Music';
import { Projects } from './features/pages/projects/Projects';
import './App.css';

// import './api/server'

function App() {
  return (
    <Router>
      <div>
        <Nav />

        <Switch>
          <Route path="/music">
            <Music />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
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
