import { Fragment } from 'react';
import NotFound from '../shared/not-found/notFound';

export class EffectiveRoute {
  path;
  exact;
  Component;
  WrapperComponent;
  roles;

  constructor(path, Component, WrapperComponent, roles, exact) {
    this.path = path;
    this.exact = exact;
    this.Component = Component;
    this.WrapperComponent = WrapperComponent;
    this.roles = roles;
  }
}

export function getEffectiveRoutes(routes) {
  return routes.flatMap((r) => getEffectiveRoute(r));
}

let fullPath = '';
let effectiveRoles = new Array();
function getEffectiveRoute(r) {
  if (r.children) {
    return r.children.flatMap((cr) => {
      let effectiveChildRoles = [
        ...effectiveRoles,
        ...(r.roles?.concat() || []),
        ...(cr.roles?.concat() || []),
      ];
      if (cr.Component) {
        return new EffectiveRoute(
          `${fullPath || ''}${r.path}${cr.path}`,
          cr.Component,
          r.Component,
          effectiveChildRoles,
          cr.exact
        );
      }
      fullPath += r.path;
      effectiveRoles = effectiveChildRoles.concat();
      return getEffectiveRoute(cr);
    });
  }
  if (r.Component) {
    return Array.of(
      new EffectiveRoute(
        `${fullPath || ''}${r.path}`,
        r.Component,
        Fragment,
        effectiveRoles.concat(r.roles || []),
        r.exact
      )
    );
  }
  return Array.of(new EffectiveRoute('*', NotFound, Fragment));
}
