import styled from '@emotion/styled';
import mq from '../../utils/mediaQuery';

export const Container = styled.div`
  background-color: #100e1d;
  width: 100%;
  display: flex;
  flex-direction: column;

  ${mq['md']} {
    flex-direction: row;
    height: 100%;
  }
`;
