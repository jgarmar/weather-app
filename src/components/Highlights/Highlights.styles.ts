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
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, 32.8rem);
  grid-column-gap: 4.8rem;
  grid-row-gap: 3.2rem;

  ${mq['md']} {
    grid-template-columns: repeat(2, 32.8rem);
  }
`;
