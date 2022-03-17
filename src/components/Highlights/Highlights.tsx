import { useWeather } from '../../hooks/useWeather';
import Text from '../ui-components/Text';
import Highlight from './Highlight/Highlight';
import * as Styles from './Highlights.styles';
import { HighlightsProps } from './Highlights.types';
import HumidityBar from './HumidityBar';
import WindCompass from './WindCompass';

const Highlights = (props: HighlightsProps) => {
  const { currentWeather } = useWeather();
  if (!currentWeather) {
    return null;
  }
  return (
    <Styles.Container>
      <Text l bold>
        Today's Hightlights
      </Text>

      <Styles.Highlights>
        <Highlight
          title="Wind status"
          value={currentWeather.windSpeed}
          unit="mph"
        >
          <WindCompass
            degrees={currentWeather.windDirection}
            direction={currentWeather.windDirectionCompass}
          />
        </Highlight>
        <Highlight title="Humidity" value={currentWeather.humidity} unit="%">
          <HumidityBar humidity={currentWeather.humidity} />
        </Highlight>
        <Highlight
          title="Visibility"
          value={currentWeather.visibility}
          unit=" miles"
        />
        <Highlight
          title="Air pressure"
          value={currentWeather.airPressure}
          unit=" mb"
        />
      </Styles.Highlights>
    </Styles.Container>
  );
};

export default Highlights;
