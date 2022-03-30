import * as Styles from './WeatherForecast.styles';

import { ConsolidatedWeather } from '../WeatherProvider/WeatherProvider.types';
import Text from '../ui-components/Text';
import { WeatherForecastProps } from './WeatherForecast.types';
import WeatherImage from '../WeatherImage';
import { parseDate } from '../../utils/utils';
import { useWeather } from '../../hooks/useWeather';

const WeatherForecast = (props: WeatherForecastProps) => {
  const { forecastWeather } = useWeather();

  return (
    <Styles.Container>
      {forecastWeather?.map((forecast, i) => {
        return (
          <WeatherForecastItem
            key={forecast.applicableDate}
            minTemp={forecast.minTemp}
            maxTemp={forecast.maxTemp}
            weatherStateAbbr={forecast.weatherStateAbbr}
            applicableDate={
              i === 0
                ? 'Tomorrow'
                : (parseDate(forecast.applicableDate) as string)
            }
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
  const { tempUnit, parseTemp } = useWeather();

  return (
    <Styles.WeatherForecastItem>
      <Text s thin color="ATHENS_GRAY">
        {applicableDate as string}
      </Text>
      <WeatherImage weatherState={weatherStateAbbr} />
      <Styles.TempsContainer>
        <Text s thin color="ATHENS_GRAY">{`${parseTemp(
          minTemp
        )}º${tempUnit}`}</Text>{' '}
        <Text s thin color="SANTAS_GRAY">{`${parseTemp(
          maxTemp
        )}º${tempUnit}`}</Text>
      </Styles.TempsContainer>
    </Styles.WeatherForecastItem>
  );
};
