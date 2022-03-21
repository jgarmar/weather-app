import { HTMLAttributes } from 'react';
import { WeatherStateAbbr } from '../WeatherProvider/WeatherProvider.types';

export type WeatherImageProps = HTMLAttributes<HTMLElement> & {
  weatherState?: WeatherStateAbbr;
};
