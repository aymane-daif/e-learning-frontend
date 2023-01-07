import Registration from '../pages/auth/Registration';
import ProfilePage from '../pages/profile/ProfilePage';
import { ProfileDetails } from '../components/profile/ProfileDetails';
import ProfileOverview from '../components/profile/ProfileOverview';
import ProfileCourses from '../components/profile/ProfileCourses';
import CoursePayment from '../pages/CoursePayment';
import ShoppingCart from '../components/courses/ShoppingCart';
import VideoLessons from '../components/videos/VideoLessons';
import Home from '../pages/Home';
import Certification from '../pages/certification/Certification';

export const routes = [
  { path: '/', Component: Home, exact: true },
  { path: '/auth/register', Component: Registration, exact: true },
  { path: '/courses/:id', Component: CoursePayment, exact: true },
  { path: '/cart', Component: ShoppingCart, exact: true },
  { path: '/videos', Component: VideoLessons, exact: true },
  { path: '/certifications/:id', Component: Certification, exact: true },
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
];
