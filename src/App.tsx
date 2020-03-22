import React, { useEffect } from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Navigator } from './components';
import { Home, Rooms, Courses, Projects, Login, Signup } from './screens';

import authReducer from './store/reducers/auth';
import coursesReducer from './store/reducers/courses';
import projectsReducer from './store/reducers/projects';

const rootReducer = combineReducers({
  projects: projectsReducer,
  courses: coursesReducer,
  auth: authReducer
})

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

function App() {
  useEffect(()=> {
    document.title = "Educacion Digital";
  });
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
