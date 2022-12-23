import { Navigate, Routes, Route, Outlet } from "react-router-dom";
import { ProfileDetails } from "../../components/profile/ProfileDetails";
import { ProfileHeader } from "../../components/profile/ProfileHeader";

const ProfilePage = () => (
  <Routes>
    <Route
      element={
        <>
          <ProfileHeader />
          <Outlet />
        </>
      }
    >
      <Route
        path="settings"
        element={
          <>
            <ProfileDetails />
          </>
        }
      />
      <Route index element={<Navigate to="/profile/settings" />} />
    </Route>
  </Routes>
);

export default ProfilePage;
