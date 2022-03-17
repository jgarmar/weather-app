import * as Styles from './SideBar.styles';

import { CircularButton } from '../ui-components/Button/Button.styles';
import CurrentWeatherInfo from '../CurrentWeatherInfo';
import { MdGpsFixed } from 'react-icons/md';
import { SideBarProps } from './SideBar.types';
import Text from '../ui-components/Text';
import { useWeather } from '../../hooks/useWeather';

const SideBar = (props: SideBarProps) => {
  const { setShowLocationSearch, setCurrentDefaultLocation } = useWeather();

  const handleClick = () => {
    setShowLocationSearch(true);
  };
  return (
    <Styles.Container>
      <Styles.ButtonsContainer>
        <Styles.SearchPlacesButton onClick={handleClick}>
          <Text color="ATHENS_GRAY">Search for places</Text>
        </Styles.SearchPlacesButton>
        <CircularButton onClick={() => setCurrentDefaultLocation()}>
          <MdGpsFixed />
        </CircularButton>
      </Styles.ButtonsContainer>
      <CurrentWeatherInfo />
    </Styles.Container>
  );
};

export default SideBar;
