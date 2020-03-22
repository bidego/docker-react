import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Navigator, Btn } from './components/';
import { Home, Rooms, Courses, Projects } from './screens';

function App() {
  return (
    <Router>
      <Navigator />
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/rooms">
          <Rooms />
        </Route>
        <Route path="/courses">
          <Courses />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
