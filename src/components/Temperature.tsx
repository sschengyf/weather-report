import { FC } from 'react';

export const Temperature: FC<{ value: number; className?: string }> = ({ value, className }) => (
  <span className={`${className ?? ''}`}>{value}&#x2103;</span>
);
