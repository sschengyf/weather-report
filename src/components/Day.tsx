import { FC } from 'react';
import * as dayjs from 'dayjs';

export const Day: FC<{ datetime: number; format?: string }> = ({ datetime, format = 'dddd' }) => (
  <h2 className="font-semibold">{dayjs.unix(datetime).format(format)}</h2>
);
