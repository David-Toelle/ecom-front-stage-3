import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';

export const AuthRoutes = [
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
];
