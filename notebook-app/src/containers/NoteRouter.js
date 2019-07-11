import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ViewNote from './ViewNote';

const NoteRouter = () => (
  <Switch>
    <Route
      exact
      path="/notes/:id"
      render={routeProps => (
        <ViewNote {...routeProps} id={routeProps.match.params.id} />
      )}
    />
  </Switch>
);

export default NoteRouter;
