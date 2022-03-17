import mq from '../../utils/mediaQuery';
import styled from '@emotion/styled';

export const Container = styled.div`
  background-color: #100e1d;
  width: 100%;
  display: flex;
  flex-direction: column;

  ${mq['lg']} {
    flex-direction: row;
    height: 100%;
  }
`;
