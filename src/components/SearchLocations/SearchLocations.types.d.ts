import { HTMLAttributes } from 'react';
import { Location } from '../WeatherProvider/WeatherProvider.types';

export type SearchLocationsProps = HTMLAttributes<HTMLElement> & {};

export type LocationListProps = HTMLAttributes<HTMLElement> & {
  locations: Location[];
};

export type LocationItemProps = HTMLAttributes<HTMLElement> & {
  location: Location;
};
