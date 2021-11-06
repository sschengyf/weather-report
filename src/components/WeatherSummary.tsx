import { FC } from 'react';
import { Card } from 'antd';
import * as dayjs from 'dayjs';
import { DailyWeather } from '../models/weather';
import { Temperature } from './Temperature';
import { WeatherIllustrator } from './WeatherIllustrator';

export const WeatherSummary: FC<{ weather: DailyWeather }> = ({ weather }) => (
  <Card title={dayjs.unix(weather.dt).format('ddd, MMM D, YYYY')}>
    <WeatherIllustrator iconId={weather.weather[0].icon} />
    <Temperature value={weather.temp.max} />
    <Temperature value={weather.temp.min} />
  </Card>
);
