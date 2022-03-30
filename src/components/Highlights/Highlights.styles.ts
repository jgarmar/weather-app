import mq from '../../utils/mediaQuery';
import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 70.4rem;
  width: 100%;
  margin: 0 auto;

  > p {
    margin-bottom: 3.2rem;
  }
`;

export const Highlights = styled.div`
  margin-top: 3.2rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  > div {
    margin-bottom: 3.2rem;
  }

  ${mq['md']} {
    > div {
      max-width: 32.8rem;
      width: 100%;
      margin-bottom: 4.8rem;

      &:nth-child(odd) {
        margin-right: 4.8rem;
      }
    }
  }
`;
