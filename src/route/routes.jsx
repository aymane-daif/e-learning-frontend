import { createBrowserRouter } from 'react-router-dom';
import ListCourses from '../components/ListCourses';
import Home from '../pages/Home';
import Registration from '../pages/Registration';

export const routes = createBrowserRouter(
  [
    { path: '/', element:<ListCourses />, exact: false },
    { path: '/auth/register', element: <Registration />, exact: false },
  ]
);
