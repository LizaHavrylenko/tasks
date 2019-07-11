import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainPage from './containers/MainPage';
import AddNote from './containers/AddNote';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route path="/notes/new" component={AddNote} />
    </Switch>
  </Router>
);

export default App;
