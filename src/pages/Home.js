import React, { useEffect, useCallback } from 'react';
import { useKeycloak } from '@react-keycloak/web';
import { useDispatch } from 'react-redux';
import hasRoles from '../security/hasRoles';
import HomeInstructor from './Home/HomeInstructor';
import HomeStudent from './Home/HomeStudent';
import { useHttpClient } from '../security/hooks/axiosProvider';
import { userActions } from '../store/redux/userSlice';
function Home() {
  const { keycloak } = useKeycloak();
  const isInstructor = hasRoles(['INSTRUCTOR'], keycloak);

  const dispatch = useDispatch();

  const httpClient = useHttpClient(true);
  const getCurrentUser = useCallback(() => {
    httpClient.current
      ?.get(`/users/email/${keycloak.idTokenParsed.email}`)
      .then((response) => {
        const data = response.data;
        console.log(data);
        dispatch(userActions.setCurrentUser(data));
      });
  }, [dispatch, httpClient, keycloak.idTokenParsed.email]);
  useEffect(() => {
    console.log(keycloak.idTokenParsed.email);
    getCurrentUser();
  }, [getCurrentUser, keycloak.idTokenParsed.email]);

  return isInstructor ? <HomeInstructor /> : <HomeStudent />;
}

export default Home;
