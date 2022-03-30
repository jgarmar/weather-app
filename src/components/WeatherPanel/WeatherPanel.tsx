import * as Styles from './WeatherPanel.styles';

import Highlights from '../Highlights';
import TempUnitSwitch from '../TempUnitSwitch';
import Text from '../ui-components/Text';
import WeatherForecast from '../WeatherForecast';
import { WeatherPanelProps } from './WeatherPanel.types';

const WeatherPanel = (props: WeatherPanelProps) => (
  <Styles.Container>
    <TempUnitSwitch />
    <WeatherForecast />
    <Highlights />
    <Text xxs color="SANTAS_GRAY">
      <>
        created by{' '}
        <Text
          xxs
          underline
          as="a"
          href="https://github.com/jgarmar"
          color="SANTAS_GRAY"
        >
          jgarmar
        </Text>{' '}
        - devChallenges.io
      </>
    </Text>
  </Styles.Container>
);

export default WeatherPanel;
