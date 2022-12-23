import ListCourses from '../components/ListCourses';
import Registration from '../pages/Registration';

export const routes = [
  { path: '/', Component: ListCourses, exact: true },
  { path: '/auth/register', Component: Registration, exact: true },
];
