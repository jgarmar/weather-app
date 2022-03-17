import React, { ReactElement, HTMLProps } from 'react';
import { useWeather } from '../../hooks/useWeather';
import Text from '../ui-components/Text';
import { ConsolidatedWeather } from '../WeatherProvider/WeatherProvider.types';
import * as Styles from './CurrentWeatherInfo.styles';
import { CurrentWeatherInfoProps } from './CurrentWeatherInfo.types';

const CurrentWeatherInfo = (props: CurrentWeatherInfoProps) => {
  const { weatherInfo, currentLocation, weatherStateImage } = useWeather();
  const currentWeather = weatherInfo?.consolidatedWeather[0];
  const weatherStateAbbr = currentWeather?.weatherStateAbbr;
  return (
    <Styles.Container>
      <Styles.Background />

      {weatherStateImage && (
        <Styles.WeatherImage
          src={weatherStateImage[weatherStateAbbr as string]}
        />
      )}
      <Temperature temp={currentWeather?.theTemp} />
      {currentWeather?.weatherStateName && (
        <Text xl>{currentWeather?.weatherStateName}</Text>
      )}
      {weatherInfo?.title && <Text m>{weatherInfo.title}</Text>}
    </Styles.Container>
  );
};

const Temperature = ({ temp }: { temp?: ConsolidatedWeather['theTemp'] }) => {
  if (!temp) {
    return null;
  }
  return (
    <Styles.Temperature>
      <Styles.TemperatureNumber xxxl color="ATHENS_GRAY">
        {temp.toFixed(1)}
      </Styles.TemperatureNumber>
      <Styles.TemperatureUnit xl color="SANTAS_GRAY">
        ºC
      </Styles.TemperatureUnit>
    </Styles.Temperature>
  );
};

export default CurrentWeatherInfo;
