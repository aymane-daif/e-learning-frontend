import Registration from '../pages/auth/Registration';
import ProfilePage from '../pages/profile/ProfilePage';
import { ProfileDetails } from '../components/profile/ProfileDetails';
import ProfileCourses from '../components/profile/ProfileCourses';
import CoursePayment from '../pages/CoursePayment';
import ShoppingCart from '../components/courses-student/ShoppingCart';
import Certification from '../pages/certification/Certification';
import VideoLessons from '../components/videos/VideoLessons';
import Home from '../pages/Home';
import HomeStudent from '../pages/Home/HomeStudent';
import AddCourse from '../pages/addCourse/AddCourse';
import CourseDetails from '../components/courses-instructor/CourseDetails';
import AddSection from '../components/courses-instructor/AddSection';
import AddLesson from '../components/courses-instructor/AddLesson';

export const routes = [
  { path: '/', Component: Home, exact: true },
  { path: '/auth/register', Component: Registration, exact: true },
  { path: '/courses/:id', Component: CoursePayment, exact: true },
  { path: '/', Component: HomeStudent, exact: true },
  { path: '/cart', Component: ShoppingCart, exact: true },
  { path: '/videos/:id', Component: VideoLessons, exact: true },
  { path: '/certifications/:id', Component: Certification, exact: true },
  { path: '/addCourse', Component: AddCourse, exact: true },
  { path: '/instructor/courses/:id', Component: CourseDetails, exact: true },
  { path: '/addSection/:id', Component: AddSection, exact: true },
  { path: '/addLesson/:id', Component: AddLesson, exact: true },
  {
    path: '/profile/*',
    children: [
      { path: 'settings', Component: ProfileDetails, exact: true },
      { path: 'courses', Component: ProfileCourses, exact: true },
    ],
    Component: ProfilePage,
    exact: false,
  },
  { path: '/certifications/:id', Component: Certification, exact: true },
];
