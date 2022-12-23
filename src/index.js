import React from 'react';
import ReactDOM from 'react-dom/client';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import ControlledRoute from './security/controlledRoute';
import keycloak from './security/keycloak-config';
import { routes } from './route/routes';
import { getEffectiveRoutes } from './security/route';
import NotFound from './shared/not-found/notFound';
import store from './store';

import './assets/sass/style.scss';
import './assets/sass/style.react.scss';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ReactKeycloakProvider
    authClient={keycloak}
    initOptions={{
      onLoad: 'login-required',
    }}>
    <Provider store={store}>
      <BrowserRouter>
        <App>
          <Switch>
            {getEffectiveRoutes(routes).map(
              ({ path, Component, exact, roles }) => (
                <ControlledRoute
                  key={path}
                  exact={exact}
                  path={`${process.env.PUBLIC_URL}${path}`}
                  roles={roles}>
                  <Component />
                </ControlledRoute>
              )
            )}
            <Route component={NotFound} />
          </Switch>
        </App>
      </BrowserRouter>
    </Provider>
  </ReactKeycloakProvider>
);
