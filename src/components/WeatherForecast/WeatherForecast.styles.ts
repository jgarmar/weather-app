import { COLORS } from '../../utils/colors';
import mq from '../../utils/mediaQuery';
import styled from '@emotion/styled';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 2.6rem;
  grid-row-gap: 3.2rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5.1rem;

  ${mq['md']} {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    max-width: 70.4rem;
  }
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

  > p {
    white-space: pre;
  }

  img {
    width: 5.64rem;
    margin: auto;
    margin-bottom: 3.1rem;
    margin-top: 1rem;
  }
`;

export const TempsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  > p:first-child {
    margin-right: 1.6rem;
  }
`;
