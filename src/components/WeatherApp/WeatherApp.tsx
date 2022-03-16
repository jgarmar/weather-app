import { css, Global } from '@emotion/react';
import React, { ReactElement, HTMLProps } from 'react';
import SearchLocations from '../SearchLocations';
import SideBar from '../SideBar';
import WeatherProvider from '../WeatherProvider';
import * as Styles from './WeatherApp.styles';
import { WeatherAppProps } from './WeatherApp.types';

const WeatherApp = (props: WeatherAppProps) => {
  return (
    <WeatherProvider>
      <Global
        styles={css`
          html {
            font-size: 10px;
          }
        `}
      />
      <Styles.Container>
        <SideBar />
      </Styles.Container>
    </WeatherProvider>
  );
};

export default WeatherApp;
