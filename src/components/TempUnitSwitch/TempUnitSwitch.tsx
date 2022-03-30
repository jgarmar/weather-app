import * as Styles from './TempUnitSwitch.styles';

import { CircularButton } from '../ui-components/Button/Button.styles';
import { TempUnitSwitchProps } from './TempUnitSwitch.types';
import { Text } from '../ui-components/Text/Text.styles';
import { useWeather } from '../../hooks/useWeather';

const TempUnitSwitch = (props: TempUnitSwitchProps) => {
  const { tempUnit, setTempUnit } = useWeather();
  return (
    <Styles.Container>
      <CircularButton onClick={() => setTempUnit('C')}>
        <Text bold>ºC</Text>
      </CircularButton>
      <CircularButton onClick={() => setTempUnit('F')}>
        <Text bold>ºF</Text>
      </CircularButton>
    </Styles.Container>
  );
};
export default TempUnitSwitch;
