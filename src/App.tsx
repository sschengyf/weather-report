import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AppRoutes } from './AppRoutes';
import { WeatherStoreProvider } from './stores/WeatherStore';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

const App: FC = () => (
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <WeatherStoreProvider>
        <AppRoutes />
      </WeatherStoreProvider>
    </QueryClientProvider>
  </BrowserRouter>
);

export default App;
