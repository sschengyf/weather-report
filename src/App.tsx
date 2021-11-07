import { FC } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
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
            <Link to="/" className="hover:text-pink-600">
              <h1 className="text-xl font-bold underline">Weather report for Auckland in 7 days</h1>
            </Link>
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
