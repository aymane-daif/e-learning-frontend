import Registration from '../pages/auth/Registration';
import ProfilePage from '../pages/profile/ProfilePage';
import { ProfileDetails } from '../components/profile/ProfileDetails';
import ProfileOverview from '../components/profile/ProfileOverview';
import ProfileCourses from '../components/profile/ProfileCourses';
import HomeStudent from '../pages/Home/HomeStudent';
import CoursePayment from '../pages/CoursePayment';
import StudentNavbar from '../components/bars/StudentNavbar';

export const routes = [
  { path: '/auth/register', Component: Registration, exact: true },
  { path: '/courses/:id', Component: CoursePayment, exact: true },
  { path: '/',
   Component: HomeStudent, exact: true },
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
    Component: CoursePayment,
    exact: true,
  },
  {
    path: "/navbar",
    Component: StudentNavbar,
    exact: true
  }

];
