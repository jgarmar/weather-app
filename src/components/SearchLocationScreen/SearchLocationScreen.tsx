import * as Styles from './SearchLocationScreen.styles';

import { MdClear, MdGpsFixed } from 'react-icons/md';
import React, { HTMLProps, ReactElement, useState } from 'react';

import Button from '../ui-components/Button';
import CurrentWeatherInfo from '../CurrentWeatherInfo';
import { SearchLocationScreenProps } from './SearchLocationScreen.types';
import SearchLocations from '../SearchLocations';
import Text from '../ui-components/Text';
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
