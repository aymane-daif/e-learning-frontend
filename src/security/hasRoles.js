const hasRoles = (roles, keycloak) => {
  return roles.some((r) => {
    const realm = keycloak.hasRealmRole(r);
    const resource = keycloak.hasResourceRole(r);
    return realm || resource;
  });
};

export default hasRoles;
