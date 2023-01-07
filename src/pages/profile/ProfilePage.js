import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProfileHeader } from "../../components/profile/ProfileHeader";
import { useHttpClient } from "../../security/hooks/axiosProvider";
import { userActions } from "../../store/redux/userSlice";
const ProfilePage = () => {
  const user = useSelector((state) => state.user.user);
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
    [httpClient]
  );
  useEffect(() => {
    getCurrentUser("zakaria@gmail.com");
  }, [getCurrentUser]);

  return <ProfileHeader />;
};

export default ProfilePage;
