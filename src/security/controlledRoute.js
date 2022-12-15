import { useKeycloak } from '@react-keycloak/web';
import React from 'react';
import { Route } from 'react-router';
import hasRoles from './hasRoles';

const RouterContentWrapper = (props) => {
  const { keycloak } = useKeycloak();
  const isUserAuthorized =
    !props.roles || props.roles.length === 0 || hasRoles(props.roles, keycloak);
  if (props.roles && props.roles.length > 0 && !keycloak?.authenticated) {
    keycloak?.login();
  }

  return isUserAuthorized ? <>{props.children}</> : <p>403</p>;
};

const ControlledRoute = ({ exact = true, path, roles, children }) => {
  return (
    <Route key={path} exact={exact} path={path}>
      <RouterContentWrapper roles={roles}>{children}</RouterContentWrapper>
    </Route>
  );
};

export default ControlledRoute;
