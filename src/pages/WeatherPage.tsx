import { FC } from 'react';
import {} from 'react-router-dom';
import { useWeatherStore } from '../stores/WeatherStore';
import { WeatherSummary } from '../components/WeatherSummary';

export const WeatherPage: FC = () => {
  const { dailyWeathers, isError, isFetched, isLoading, isSuccess } = useWeatherStore();

  return (
    <>
      {isLoading && <p className="text-center py-20">Loading</p>}
      {isError && <p className="text-center py-20">Something went wrong, please try again later</p>}
      {isFetched && isSuccess && (
        <div className="flex justify-start items-stretch">
          {dailyWeathers.map(weather => (
            <WeatherSummary weather={weather} key={weather.dt} weatherDetailLink={`./${weather.dt}`} />
          ))}
        </div>
      )}
    </>
  );
};
