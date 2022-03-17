import * as Styles from './SearchLocationScreen.styles';

import { MdClear } from 'react-icons/md';
import { SearchLocationScreenProps } from './SearchLocationScreen.types';
import SearchLocations from '../SearchLocations';
import { useWeather } from '../../hooks/useWeather';

const SearchLocationScreen = (props: SearchLocationScreenProps) => {
  const { setShowLocationSearch, showLocationSearch } = useWeather();
  if (!showLocationSearch) {
    return null;
  }

  const handleClick = () => {
    setShowLocationSearch(false);
  };

  return (
    <Styles.Container>
      <Styles.ButtonsContainer>
        <Styles.CloseButton onClick={handleClick}>
          <MdClear />
        </Styles.CloseButton>
      </Styles.ButtonsContainer>

      <SearchLocations />
    </Styles.Container>
  );
};

export default SearchLocationScreen;
