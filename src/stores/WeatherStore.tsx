import axios, { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import { FC, useContext, createContext } from 'react';
import { DailyWeather, WeatherResponse } from '../models/weather';

const WEATHER_API = 'http://api.openweathermap.org/data/2.5/onecall';

interface WeatherStore {
  dailyWeathers: DailyWeather[];
  findByDatetime: (datetime: number) => DailyWeather | undefined;
  isLoading: boolean;
  isError: boolean;
  isFetched: boolean;
  isSuccess: boolean;
}

const WeatherStoreContext = createContext<WeatherStore | undefined>(undefined);

const useWeatherStore = () => {
  const weatherStoreContext = useContext(WeatherStoreContext);

  if (!weatherStoreContext) {
    throw new Error('useWeatherStore must be used within WeatherStoreProvider');
  }

  return weatherStoreContext;
};

const WeatherStoreProvider: FC = ({ children }) => {
  const {
    isLoading,
    isError,
    isFetched,
    isSuccess,
    data: response,
  } = useQuery<AxiosResponse<WeatherResponse>, AxiosError>('weather', () =>
    axios.get<WeatherResponse>(WEATHER_API, {
      params: { lat: -36.8667, lon: 174.7667, appid: '58318e01bb1e4c03f7433e5d7612f955', units: 'metric' },
    })
  );

  const dailyWeathers: DailyWeather[] = response?.data.daily ?? [];

  const findByDatetime = (datetime: number) => dailyWeathers.find(daily => daily.dt === datetime);

  return (
    <WeatherStoreContext.Provider value={{ dailyWeathers, isLoading, isError, isFetched, isSuccess, findByDatetime }}>
      {children}
    </WeatherStoreContext.Provider>
  );
};

export { useWeatherStore, WeatherStoreProvider };
