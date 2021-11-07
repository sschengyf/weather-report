import { FC } from 'react';

export const WeatherFactor: FC<{ name: string; value: string | number | React.ReactNode; icon: string }> = ({
  name,
  value,
  icon,
}) => (
  <div className="flex mt-4">
    <dt title={name} className="mr-4">
      <i className={`wi wi-${icon}`}></i>
    </dt>
    <dd>{value}</dd>
  </div>
);
