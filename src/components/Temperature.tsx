import { FC } from 'react';

export const Temperature: FC<{ value: number }> = ({ value }) => <div className="text-center">{value}&#x2103;</div>;
