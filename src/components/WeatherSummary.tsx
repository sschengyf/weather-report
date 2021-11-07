import { FC } from 'react';
import * as dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import { DailyWeather } from '../models/weather';
import { Temperature } from './Temperature';
import { WeatherIllustrator } from './WeatherIllustrator';
import { Day } from './Day';

export const WeatherSummary: FC<{ weather: DailyWeather; weatherDetailLink: string }> = ({
  weather,
  weatherDetailLink,
}) => (
  <Link to={weatherDetailLink} className="cursor-pointer hover:bg-blue-100 hover:shadow-md">
    <div className="border p-4 flex flex-col items-center">
      <Day datetime={weather.dt} />
      <WeatherIllustrator iconId={weather.weather[0].icon} />
      <Temperature value={weather.temp.max} />
      <Temperature value={weather.temp.min} />
    </div>
  </Link>
);
