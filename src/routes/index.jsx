import { homeRoutes } from './HomeRoutes';
import { authRoutes } from './AuthRoutes';

const routes = [
  ...homeRoutes,
  ...authRoutes,
  {
    path: '*',
    element: <h1>404 Not Found</h1>,
  },
];

export default routes;
