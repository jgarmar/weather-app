import * as Styles from './CurrentWeatherInfo.styles';

import { ConsolidatedWeather } from '../WeatherProvider/WeatherProvider.types';
import { CurrentWeatherInfoProps } from './CurrentWeatherInfo.types';
import { MdLocationOn } from 'react-icons/md';
import Text from '../ui-components/Text';
import WeatherImage from '../WeatherImage';
import { parseDate } from '../../utils/utils';
import { useWeather } from '../../hooks/useWeather';

const CurrentWeatherInfo = (props: CurrentWeatherInfoProps) => {
  const { weatherInfo } = useWeather();
  const currentWeather = weatherInfo?.consolidatedWeather[0];
  const weatherStateAbbr = currentWeather?.weatherStateAbbr;
  const todayDate = parseDate(new Date().getTime() as unknown as string);
  return (
    <Styles.Container>
      <Styles.Background />

      <WeatherImage weatherState={weatherStateAbbr} />
      <Temperature temp={currentWeather?.theTemp} />
      <WeatherState weatherState={currentWeather?.weatherStateName as string} />
      <Styles.Date>
        <Text m thin color="MANATEE">
          Today
        </Text>
        <Text m thin color="MANATEE">
          ·
        </Text>
        <Text m thin color="MANATEE">
          {todayDate}
        </Text>
      </Styles.Date>
      <Location location={weatherInfo?.title as string} />
    </Styles.Container>
  );
};

const Temperature = ({ temp }: { temp?: ConsolidatedWeather['theTemp'] }) => {
  const { tempUnit, parseTemp } = useWeather();

  if (!temp) {
    return null;
  }
  return (
    <Styles.Temperature>
      <Styles.TemperatureNumber xxxl color="ATHENS_GRAY">
        {parseTemp(temp)}
      </Styles.TemperatureNumber>
      <Styles.TemperatureUnit xl color="SANTAS_GRAY">
        º{tempUnit}
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
