import { FC } from 'react';

export const WeatherIllustrator: FC<{ iconId: string }> = ({ iconId }) => (
  <img src={`http://openweathermap.org/img/wn/${iconId}@2x.png`} />
);
