import React, { ReactElement, HTMLProps, useState } from 'react';
import CurrentWeatherInfo from '../CurrentWeatherInfo';
import SearchLocations from '../SearchLocations';
import Button from '../ui-components/Button';
import Text from '../ui-components/Text';
import * as Styles from './SideBar.styles';
import { SideBarProps } from './SideBar.types';
import { MdGpsFixed, MdClear } from 'react-icons/md';
import { useGeolocation } from 'react-use';
import { useWeather } from '../../hooks/useWeather';

const SideBar = (props: SideBarProps) => {
  const state = useGeolocation();
  const { setShowLocationSearch, showLocationSearch } = useWeather();

  console.log(state);
  const handleClick = () => {
    setShowLocationSearch(!showLocationSearch);
  };
  return (
    <Styles.Container>
      <Styles.ButtonsContainer>
        <Styles.SearchPlacesButton onClick={handleClick}>
          <Text color="ATHENS_GRAY">Seach for places</Text>
        </Styles.SearchPlacesButton>
        <Styles.CircularButton>
          <MdGpsFixed />
        </Styles.CircularButton>
      </Styles.ButtonsContainer>
      <CurrentWeatherInfo />
    </Styles.Container>
  );
};

export default SideBar;
