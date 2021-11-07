import { useRoutes, Navigate } from 'react-router-dom';
import { WeatherPage } from './pages/WeatherPage';
import { WeatherDetailPage } from './pages/WeatherDetailPage';
import { Error404Page } from './pages/Error404Page';

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
    {
      path: 'weather/:datetime',
      element: <WeatherDetailPage />,
    },
    {
      path: '*',
      element: <Error404Page />,
    },
  ]);
};
