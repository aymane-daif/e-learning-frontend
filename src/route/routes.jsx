import ListCourses from '../components/ListCourses';
import Registration from '../pages/Registration';

export const routes = [
  { path: '/', Component: ListCourses, exact: false },
  { path: '/auth/register', Component: Registration, exact: false },
];
