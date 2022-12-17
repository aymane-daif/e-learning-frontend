import { createBrowserRouter } from 'react-router-dom';
import ListCourse from '../components/ListCourses';
import Registration from '../pages/Registration';
import { Route } from '../security/route';

export const routes = createBrowserRouter(
  [
    { path: '/', element:<ListCourse />, exact: false },
    { path: '/auth/register', element: <Registration />, exact: false },
  ]
);
