import React, { ReactElement, HTMLProps } from 'react';
import WeatherForecast from '../WeatherForecast';
import * as Styles from './WeatherPanel.styles';
import { WeatherPanelProps } from './WeatherPanel.types';

const WeatherPanel = (props: WeatherPanelProps) => {
  return (
    <Styles.Container>
      <WeatherForecast />
    </Styles.Container>
  );
};

export default WeatherPanel;
