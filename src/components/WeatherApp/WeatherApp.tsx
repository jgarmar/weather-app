import { css, Global } from '@emotion/react';

import SearchLocations from '../SearchLocations';
import SearchLocationScreen from '../SearchLocationScreen';
import SideBar from '../SideBar';
import WeatherPanel from '../WeatherPanel';
import WeatherProvider from '../WeatherProvider';
import * as Styles from './WeatherApp.styles';
import { WeatherAppProps } from './WeatherApp.types';
import LogRocket from 'logrocket';
LogRocket.init('ufbure/weatherapp');
const WeatherApp = (props: WeatherAppProps) => {
  return (
    <WeatherProvider>
      <Global
        styles={css`
          html {
            font-size: 10px;
            height: 100%;
          }
          body,
          #root {
            height: 100%;
          }
        `}
      />
      <Styles.Container>
        <SearchLocationScreen />
        <SideBar />
        <WeatherPanel />
      </Styles.Container>
    </WeatherProvider>
  );
};

export default WeatherApp;
