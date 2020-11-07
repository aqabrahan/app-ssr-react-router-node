import { renderToString } from 'react-dom/server';
import React from 'react';
import { matchPath, StaticRouter } from 'react-router-dom';
import routes from './routes';
import renderFullPage from './renderFullPage';
import App from '../components/App';
import getPokemon from '../service/getPokemon';

const router = (req, res) => {
  const match = routes.reduce((acc, route) => matchPath(req.url, { path: route, exact: true}) || acc, null);

  if (!match) {
    res.status(404).send('page not found');
    return;
  }

  return getPokemon.withAbility('telepathy')
    then((response) => {
      const pokemon = { list: response.data.pokemon };
      const context = {};

      const html = renderToString(
        <StaticRouter context={context} location={req.url} >
          <App pokemon={pokemon} />
        </StaticRouter>
      )

      res.status(200).send(renderFullPage(html, pokemon));
    })
    .catch(error => res.status(404).send(`${error} oho not exist pokemon`));
}

export default router;
