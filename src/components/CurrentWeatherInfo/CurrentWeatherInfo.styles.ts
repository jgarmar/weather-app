import styled from '@emotion/styled';
import mq from '../../utils/mediaQuery';
import { Text } from '../ui-components/Text/Text.styles';

export const Container = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
`;

export const Background = styled.div`
  height: 37.6rem;
  background-image: url(/assets/Cloud-background.png);
  width: 100%;
  background-size: contain;
  opacity: 0.2;
  background-repeat: repeat-x;
  position: absolute;
  z-index: 0;
  margin-top: 10.3rem;
`;

export const WeatherImage = styled.img`
  width: 15rem;
  align-self: center;

  ${mq['md']} {
    margin-top: 19.1rem;
    width: 20.2rem;
  }
`;

export const Temperature = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const TemperatureNumber = styled(Text)``;

export const TemperatureUnit = styled(Text)`
  font-weight: 100;
`;
