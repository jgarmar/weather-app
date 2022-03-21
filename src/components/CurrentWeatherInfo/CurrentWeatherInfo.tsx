import React, { ReactElement, HTMLProps } from 'react';
import { useWeather } from '../../hooks/useWeather';
import Text from '../ui-components/Text';
import { ConsolidatedWeather } from '../WeatherProvider/WeatherProvider.types';
import * as Styles from './CurrentWeatherInfo.styles';
import { CurrentWeatherInfoProps } from './CurrentWeatherInfo.types';
import { MdLocationOn } from 'react-icons/md';
import WeatherImage from '../WeatherImage';
import { parseTemp } from '../../utils/utils';

const CurrentWeatherInfo = (props: CurrentWeatherInfoProps) => {
  const { weatherInfo } = useWeather();
  const currentWeather = weatherInfo?.consolidatedWeather[0];
  const weatherStateAbbr = currentWeather?.weatherStateAbbr;
  return (
    <Styles.Container>
      <Styles.Background />

      <WeatherImage weatherState={weatherStateAbbr} />
      <Temperature temp={currentWeather?.theTemp} />
      <WeatherState weatherState={currentWeather?.weatherStateName as string} />

      <Location location={weatherInfo?.title as string} />
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
        {parseTemp(temp)}
      </Styles.TemperatureNumber>
      <Styles.TemperatureUnit xl color="SANTAS_GRAY">
        ºC
      </Styles.TemperatureUnit>
    </Styles.Temperature>
  );
};

const Location = ({ location }: { location: string }) => {
  if (!location) {
    return null;
  }

  return (
    <Styles.LocationTag>
      <MdLocationOn />
      <Text m color="SANTAS_GRAY">
        {location}
      </Text>
    </Styles.LocationTag>
  );
};

const WeatherState = ({ weatherState }: { weatherState: string }) => {
  if (!weatherState) {
    return null;
  }

  return (
    <Text xl color="SANTAS_GRAY">
      {weatherState}
    </Text>
  );
};
export default CurrentWeatherInfo;
