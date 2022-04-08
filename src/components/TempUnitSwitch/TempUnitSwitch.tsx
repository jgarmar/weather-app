import * as Styles from './TempUnitSwitch.styles';

import { CircularButton } from '../ui-components/Button/Button.styles';
import { Text } from '../ui-components/Text/Text.styles';
import { useWeather } from '../../hooks/useWeather';

const TempUnitSwitch = () => {
  const { tempUnit, setTempUnit } = useWeather();
  return (
    <Styles.Container>
      <CircularButton
        disabled={tempUnit === 'C'}
        aria-label="Switch to Celsius"
        onClick={() => setTempUnit('C')}
      >
        <Text bold>ºC</Text>
      </CircularButton>
      <CircularButton
        disabled={tempUnit === 'F'}
        aria-label="Switch to Fahrenheit"
        onClick={() => setTempUnit('F')}
      >
        <Text bold>ºF</Text>
      </CircularButton>
    </Styles.Container>
  );
};
export default TempUnitSwitch;
