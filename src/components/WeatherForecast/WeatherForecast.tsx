import React, { ReactElement, HTMLProps } from 'react';
import { useWeather } from '../../hooks/useWeather';
import { parseTemp } from '../../utils/utils';
import Text from '../ui-components/Text';
import WeatherImage from '../WeatherImage';
import { ConsolidatedWeather } from '../WeatherProvider/WeatherProvider.types';
import * as Styles from './WeatherForecast.styles';
import { WeatherForecastProps } from './WeatherForecast.types';

const WeatherForecast = (props: WeatherForecastProps) => {
  const { forecastWeather } = useWeather();

  return (
    <Styles.Container>
      {forecastWeather?.map(forecast => {
        return (
          <WeatherForecastItem
            key={forecast.applicableDate}
            minTemp={forecast.minTemp}
            maxTemp={forecast.maxTemp}
            weatherStateAbbr={forecast.weatherStateAbbr}
            applicableDate={parseDate(forecast.applicableDate) as string}
          />
        );
      })}
    </Styles.Container>
  );
};

export default WeatherForecast;

const WeatherForecastItem = ({
  applicableDate,
  minTemp,
  maxTemp,
  weatherStateAbbr,
}: Partial<ConsolidatedWeather>) => {
  return (
    <Styles.WeatherForecastItem>
      <Text s color="ATHENS_GRAY">
        {applicableDate as string}
      </Text>
      <WeatherImage weatherState={weatherStateAbbr} />
      <Styles.TempsContainer>
        {' '}
        <Text s color="ATHENS_GRAY">{`${parseTemp(minTemp)}ºC`}</Text>{' '}
        <Text s color="SANTAS_GRAY">{`${parseTemp(maxTemp)}ºC`}</Text>
      </Styles.TempsContainer>
    </Styles.WeatherForecastItem>
  );
};

const parseDate = (date?: string) => {
  if (!date) {
    return null;
  }
  const parsedDate = new Date(date);
  return parsedDate.toLocaleDateString('en-EN', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  });
};
