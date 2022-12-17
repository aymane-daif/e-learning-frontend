import React from 'react';
import ReactDOM from 'react-dom/client';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, RouterProvider } from 'react-router-dom';
import App from './App';
import ControlledRoute from './security/controlledRoute';
import keycloak from './security/keycloak-config';
import { routes } from './route/routes';
import { getEffectiveRoutes } from './security/route';
import NotFound from './shared/not-found/notFound';
import store from './store';
import reportWebVitals from './reportWebVitals';

// import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/sass/style.scss';
import './assets/sass/style.react.scss';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <ReactKeycloakProvider authClient={keycloak}>
  //   <Provider store={store}>
  //     <BrowserRouter>
  //       <App>
  //         {getEffectiveRoutes(routes).map(
  //           ({ path, Component, exact, roles }) => (
  //             <ControlledRoute
  //               key={path}
  //               exact={exact}
  //               path={`${process.env.PUBLIC_URL}${path}`}
  //               roles={roles}>
  //               <Component />
  //             </ControlledRoute>
  //           )
  //         )}
  //         <Route component={NotFound} />
  //       </App>
  //     </BrowserRouter>
  //   </Provider>
  // </ReactKeycloakProvider>
  <RouterProvider router={routes} ></RouterProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
