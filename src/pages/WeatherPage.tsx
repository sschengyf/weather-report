import { FC } from 'react';
import {} from 'react-router-dom';
import { useWeatherStore } from '../stores/WeatherStore';
import { WeatherSummary } from '../components/WeatherSummary';

export const WeatherPage: FC = () => {
  const { dailyWeathers, isError, isFetched, isLoading, isSuccess } = useWeatherStore();

  return (
    <div className="flex justify-start items-stretch">
      {dailyWeathers.map(weather => (
        <WeatherSummary weather={weather} key={weather.dt} weatherDetailLink={`./${weather.dt}`} />
      ))}
    </div>
  );
};
