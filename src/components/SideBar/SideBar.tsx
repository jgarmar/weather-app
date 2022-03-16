import React, { ReactElement, HTMLProps } from 'react';
import SearchLocations from '../SearchLocations';
import * as Styles from './SideBar.styles';
import { SideBarProps } from './SideBar.types';

const SideBar = (props: SideBarProps) => {
  return (
    <Styles.Container>
      <SearchLocations />
    </Styles.Container>
  );
};

export default SideBar;
