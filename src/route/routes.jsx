import Registration from '../pages/auth/Registration';
import ProfilePage from '../pages/profile/ProfilePage';
import { ProfileDetails } from '../components/profile/ProfileDetails';
import ProfileOverview from '../components/profile/ProfileOverview';
import ProfileCourses from '../components/profile/ProfileCourses';
import CoursePayment from '../pages/CoursePayment';
import ShoppingCart from '../components/courses-student/ShoppingCart';
import VideoLessons from '../components/videos/VideoLessons';
import Home from '../pages/Home';
import Certification from '../pages/certification/Certification';
import AddCourse from '../pages/addCourse/AddCourse';
import CourseDetails from '../components/courses-instructor/CourseDetails';
import AddSection from '../components/courses-instructor/AddSection';
import AddLesson from '../components/courses-instructor/AddLesson';

export const routes = [
  { path: '/', Component: Home, exact: true },
  { path: '/auth/register', Component: Registration, exact: true },
  { path: '/courses/:id', Component: CoursePayment, exact: true },
  { path: '/cart', Component: ShoppingCart, exact: true },
  { path: '/videos', Component: VideoLessons, exact: true },
  { path: '/certifications/:id', Component: Certification, exact: true },
  { path: '/addCourse', Component: AddCourse, exact: true },
  { path: '/instructor/courses/:id', Component: CourseDetails, exact: true },
  { path: '/addSection/:id', Component: AddSection, exact: true },
  { path: '/addLesson/:id', Component: AddLesson, exact: true },
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
