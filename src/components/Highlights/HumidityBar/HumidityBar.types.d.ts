import { HTMLAttributes } from 'react';

export type HumidityBarProps = HTMLAttributes<HTMLElement> & {
  humidity: number;
};
