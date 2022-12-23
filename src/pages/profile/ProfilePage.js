import { Route, Switch } from 'react-router-dom';
import { ProfileDetails } from '../../components/profile/ProfileDetails';
import { ProfileHeader } from '../../components/profile/ProfileHeader';

const ProfilePage = () => (
  <></>
  // <Switch>
  //   <Route
  //     element={
  //       <>
  //         <ProfileHeader />
  //       </>
  //     }>
  //     <Route
  //       path='settings'
  //       element={
  //         <>
  //           <ProfileDetails />
  //         </>
  //       }
  //     />
  //     <Route index element={<Navigate to='/profile/settings' />} />
  //   </Route>
  // </Switch>
);

export default ProfilePage;
