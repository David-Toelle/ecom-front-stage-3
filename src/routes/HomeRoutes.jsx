import { HomePage } from '../pages/HomePage';
import { MainLayout } from '../layouts/MainLayout/MainLayout.jsx';

export const homeRoutes = [
  {
    path: '/',
    element: (
      <MainLayout>
        <HomePage />
      </MainLayout>
    ),
  },
];
