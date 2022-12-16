import ListCourse from '../components/ListCourses';
import Registration from '../pages/Registration';
import { Route } from '../security/route';

export const routes: Route[] = [
  { path: '/', Component: ListCourse, exact: false },
  { path: '/auth/register', Component: Registration, exact: false },
];
