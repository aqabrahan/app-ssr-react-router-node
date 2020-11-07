import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';

import List from './List';
import Home from './Home';

export default function App(props) {
  const { pokemon } = props;

  return (
    <div>
      Your react App
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/pokemon" exact render={() => ( <Redirect to="/pokemon/ability/telepathy" />)} />
        <Route path="/pokemon/ability/:ability" render={(location) => (<List pokemon={pokemon.list} location={location} />)} />
      </Switch>
    </div>
  )
};