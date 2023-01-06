import Registration from '../pages/auth/Registration';
import ProfilePage from '../pages/profile/ProfilePage';
import { ProfileDetails } from '../components/profile/ProfileDetails';
import ProfileOverview from '../components/profile/ProfileOverview';
import ProfileCourses from '../components/profile/ProfileCourses';
import HomeStudent from '../pages/Home/HomeStudent';
import SingleCourse from '../components/SingleCourse';
import Upload from '../components/upload/Upload';

export const routes = [
  { path: '/', Component: Upload, exact: true },
  { path: '/auth/register', Component: Registration, exact: true },
  {
    path: '/profile/*',
    children: [
      { path: 'settings', Component: ProfileDetails, exact: true },
      { path: 'overview', Component: ProfileOverview, exact: true },
      { path: 'courses', Component: ProfileCourses, exact: true },
    ],
    Component: ProfilePage,
    exact: false,
  },
  {
    path: '/courses/:id',
    Component: SingleCourse,
    exact: true,
  },
];
