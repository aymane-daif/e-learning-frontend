import ListCourse from '../components/ListCourse';
import { Route } from '../security/route';

export const routes: Route[] = [
  { path: '/', Component: ListCourse, exact: false },
];
