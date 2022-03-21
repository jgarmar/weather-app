import styled from '@emotion/styled';
import { COLORS } from '../../utils/colors';
import mq from '../../utils/mediaQuery';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;
  align-self: flex-start;
`;

export const WeatherForecastItem = styled.div`
  background-color: ${COLORS.MIRAGE};
  max-width: 12rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-bottom: 1.8rem;
  padding-top: 1.8rem;
  padding-right: 2.1rem;
  padding-left: 2rem;
  box-sizing: border-box;
  margin-bottom: 3.2rem;

  img {
    width: 5.64rem;
    margin: auto;
    margin-bottom: 3.1rem;
    margin-top: 1rem;
  }

  &:nth-of-type(odd) {
    margin-right: 2.6rem;
  }

  ${mq['md']} {
    &:not(:last-child) {
      margin-right: 2.6rem;
    }
  }
`;

export const TempsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  > p:first-child {
    margin-right: 1.6rem;
  }
`;
