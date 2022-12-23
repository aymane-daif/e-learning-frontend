import ListCourses from '../components/ListCourses';
import Registration from '../pages/Registration';
import ProfilePage from '../pages/profile/ProfilePage';
import { ProfileHeader } from '../components/profile/ProfileHeader';

export const routes = [
  { path: '/', Component: ListCourses, exact: true },
  { path: '/auth/register', Component: Registration, exact: true },
  {
    path: '/profile/*',
    children: [{ path: 'settings', Component: ProfileHeader, exact: false }],
    Component: ProfilePage,
    exact: false,
  },
];
