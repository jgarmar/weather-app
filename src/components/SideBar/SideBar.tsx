import React, { ReactElement, HTMLProps, useState } from 'react';
import CurrentWeatherInfo from '../CurrentWeatherInfo';
import SearchLocations from '../SearchLocations';
import Button from '../ui-components/Button';
import Text from '../ui-components/Text';
import * as Styles from './SideBar.styles';
import { SideBarProps } from './SideBar.types';

const SideBar = (props: SideBarProps) => {
  const [searchActive, setSearchActive] = useState(false);
  return (
    <Styles.Container>
      <Button bgColor="STORM_GRAY">
        <Text color="ATHENS_GRAY">Seach for places</Text>
      </Button>
      {searchActive ? <SearchLocations /> : <CurrentWeatherInfo />}
    </Styles.Container>
  );
};

export default SideBar;
