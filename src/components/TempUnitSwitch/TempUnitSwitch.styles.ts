import mq from '../../utils/mediaQuery';
import styled from '@emotion/styled';

export const Container = styled.div`
  margin-bottom: 6.6rem;
  max-width: 70.4rem;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: flex-end;

  > button:first-of-type {
    margin-right: 1.2rem;
  }

  ${mq['lg']} {
  }
`;
