import { HomeRoutes } from './HomeRoutes';
import { AuthRoutes } from './AuthRoutes';

const routes = [
  ...HomeRoutes,
  ...AuthRoutes,
  {
    path: '*',
    element: <h1>404 Not Found</h1>,
  },
];

export default routes;
