import { createBrowserRouter } from "react-router-dom";
import ListCourses from "../components/ListCourses";
import Home from "../pages/Home";
import Registration from "../pages/auth/Registration";
import ProfilePage from "../pages/profile/ProfilePage";
import { ProfileHeader } from "../components/profile/ProfileHeader";

export const routes = createBrowserRouter([
  { path: "/", element: <ListCourses />, exact: false },
  { path: "/auth/register", element: <Registration />, exact: false },
  {
    path: "/profile/*",
    children: [
      { path: "settings", element: <ProfileHeader />, exact: false },
    ],
    element: <ProfilePage />,
    exact: false,
  },
]);
