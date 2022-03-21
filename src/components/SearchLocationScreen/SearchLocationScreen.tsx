import React, { ReactElement, HTMLProps, useState } from 'react';
import CurrentWeatherInfo from '../CurrentWeatherInfo';
import SearchLocations from '../SearchLocations';
import Button from '../ui-components/Button';
import Text from '../ui-components/Text';
import * as Styles from './SearchLocationScreen.styles';
import { SearchLocationScreenProps } from './SearchLocationScreen.types';
import { MdGpsFixed, MdClear } from 'react-icons/md';
import { useGeolocation } from 'react-use';
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
