import { useRoutes, Navigate } from 'react-router-dom';
import { WeatherPage } from './pages/WeatherPage';

export const AppRoutes = () => {
  return useRoutes([
    {
      path: '/',
      element: <Navigate to="weather" />,
    },
    {
      path: 'weather',
      element: <WeatherPage />,
    },
  ]);
};
