import { FC } from 'react';
import { BrowserRouter, Outlet } from 'react-router-dom';
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
        <div className="container mx-auto">
          <header className="my-8">
            <h1 className="text-xl font-bold">Weather report for Auckland in 7 days</h1>
          </header>
          <main>
            <AppRoutes />
          </main>
        </div>
      </WeatherStoreProvider>
    </QueryClientProvider>
  </BrowserRouter>
);

export default App;
