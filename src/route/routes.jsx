import ListCourse from '../components/ListCourses';
import { Route } from '../security/route';

export const routes: Route[] = [
  { path: '/', Component: ListCourse, exact: false },
];
