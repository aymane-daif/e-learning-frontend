import React, { useEffect, useCallback } from 'react';
import { useKeycloak } from '@react-keycloak/web';
import { useDispatch } from 'react-redux';
import { ProfileHeader } from '../../components/profile/ProfileHeader';
import { useHttpClient } from '../../security/hooks/axiosProvider';
import { userActions } from '../../store/redux/userSlice';
const ProfilePage = () => {
  const { keycloak } = useKeycloak();

  const dispatch = useDispatch();

  const httpClient = useHttpClient(true);
  const getCurrentUser = useCallback(
    (userEmail) => {
      httpClient.current?.get(`/users/email/${userEmail}`).then((response) => {
        const data = response.data;
        console.log(data);
        dispatch(userActions.setCurrentUser(data));
      });
    },
    [dispatch, httpClient]
  );
  useEffect(() => {
    getCurrentUser(keycloak.idTokenParsed.email);
  }, [getCurrentUser, keycloak.idTokenParsed.email]);

  return <ProfileHeader />;
};

export default ProfilePage;
