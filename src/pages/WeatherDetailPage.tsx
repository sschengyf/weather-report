import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useWeatherStore } from '../stores/WeatherStore';
import { Day } from '../components/Day';
import { WeatherIllustrator } from '../components/WeatherIllustrator';
import { WeatherFactor } from '../components/WeatherFactor';
import { Temperature } from '../components/Temperature';

export const WeatherDetailPage: FC = () => {
  const { datetime } = useParams();
  const { findByDatetime } = useWeatherStore();
  const weather = findByDatetime(Number(datetime));

  return (
    <>
      {weather && (
        <>
          <Day datetime={weather?.dt} format="dddd, MMM D" />
          <div className="grid grid-rows-1 grid-cols-4">
            <div className="flex flex-col col-span-1 w-32 text-center">
              <WeatherIllustrator iconId={weather.weather[0].icon} />
              <p className="text-xl">{weather.weather[0].description}</p>
            </div>
            <Temperature value={weather.temp.day} className="col-span-3 text-4xl flex flex-col justify-center" />
          </div>
          <div className="flex">
            <dl>
              <WeatherFactor name="High" value={<Temperature value={weather.temp.max} />} icon="thermometer" />
              <WeatherFactor name="Low" value={<Temperature value={weather.temp.min} />} icon="thermometer" />
              <WeatherFactor name="Wind" value={`${weather.wind_speed} km/h`} icon="strong-wind" />
              <WeatherFactor name="Humidity" value={`${weather.humidity}%`} icon="humidity" />
              <WeatherFactor name="UV index" value={`${weather.uvi}`} icon="day-sunny" />
            </dl>
          </div>
        </>
      )}
      {!weather && <p className="text-center py-20">There is no weather record.</p>}
    </>
  );
};
