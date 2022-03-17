import { useContext } from 'react';
import { WeatherContext } from '../components/WeatherProvider/WeatherProvider';
import { WeatherContextProps } from '../components/WeatherProvider/WeatherProvider.types';

export const useWeather = () => useContext<WeatherContextProps>(WeatherContext);
