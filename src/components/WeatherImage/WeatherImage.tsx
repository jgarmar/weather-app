import React, { ReactElement, HTMLProps } from 'react';
import {
  WeatherStateAbbr,
  weatherStateImage,
} from '../WeatherProvider/WeatherProvider.types';
import * as Styles from './WeatherImage.styles';
import { WeatherImageProps } from './WeatherImage.types';

const WeatherImage = ({ weatherState }: WeatherImageProps) => {
  return (
    <Styles.Image src={weatherStateImage[weatherState as WeatherStateAbbr]} />
  );
};

export default WeatherImage;
