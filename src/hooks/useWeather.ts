import { useContext } from 'react';
import { WeatherContext } from '../components/WeatherProvider/WeatherProvider';

export const useWeather = () => useContext(WeatherContext);
