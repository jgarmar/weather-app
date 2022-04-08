import * as Styles from './WeatherApp.styles';

import { Global, css } from '@emotion/react';

import SearchLocationScreen from '../SearchLocationScreen';
import SideBar from '../SideBar';
import WeatherPanel from '../WeatherPanel';
import WeatherProvider from '../WeatherProvider';

const WeatherApp = () => {
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
