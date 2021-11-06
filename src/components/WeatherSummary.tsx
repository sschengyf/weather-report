import { FC } from 'react';
import * as dayjs from 'dayjs';
import { DailyWeather } from '../models/weather';
import { Temperature } from './Temperature';
import { WeatherIllustrator } from './WeatherIllustrator';

export const WeatherSummary: FC<{ weather: DailyWeather }> = ({ weather }) => (
  <div className="border p-4 flex flex-col items-center cursor-pointer hover:bg-blue-100 hover:shadow-md">
    <h2 className="font-semibold">{dayjs.unix(weather.dt).format('dddd')}</h2>
    <WeatherIllustrator iconId={weather.weather[0].icon} />
    <Temperature value={weather.temp.max} />
    <Temperature value={weather.temp.min} />
  </div>
);
