import { COLORS } from '../../utils/colors';
import { Text } from '../ui-components/Text/Text.styles';
import mq from '../../utils/mediaQuery';
import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  text-align: center;
  padding-bottom: 10.5rem;

  img {
    max-width: 15rem;
    width: 100%;
    align-self: center;
    margin-bottom: 4rem;
    margin-top: 7.6rem;

    ${mq['lg']} {
      width: 20.2rem;
    }
  }
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
`;

export const Temperature = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 2.4rem;

  + p {
    margin-bottom: 4.8rem;
  }
`;

export const TemperatureNumber = styled(Text)``;

export const TemperatureUnit = styled(Text)`
  font-weight: 100;
`;

export const LocationTag = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3.2rem;

  > svg {
    width: 2.4rem;
    height: 2.4rem;
    color: ${COLORS['MANATEE']};
    margin-right: 0.4rem;
  }
`;

export const Date = styled.div`
  display: flex;
  justify-content: center;

  > p {
    display: block;

    &:not(:last-child) {
      margin-right: 1.6rem;
    }
  }
`;
