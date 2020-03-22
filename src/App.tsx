import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Navigator, Btn } from './components/';
import { Home, Rooms, Courses, Projects, Login, Signup } from './screens';

function App() {
  return (
    <Router>
      <Navigator />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
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
        <Home />
      </Switch>
    </Router>
  );
}

export default App;
