import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import MainPage from './containers/MainPage';
import AddNote from './containers/AddNote';
import NoteRouter from './containers/NoteRouter';
import './App.scss';

const App = () => (
  <div className="App">
    <Router>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="notes" />} />
        <Route exact path="/notes" component={MainPage} />
        <Route path="/notes/new" component={AddNote} />
        <Route path="/notes/:id" component={NoteRouter} />
      </Switch>
    </Router>
  </div>
);

export default App;
