import mq from '../../utils/mediaQuery';
import styled from '@emotion/styled';

export const Container = styled.div`
  padding-top: 4.2rem;
  flex: 1;
  display: flex;
  justify-content: flex-start;
  padding-left: 2.4rem;
  padding-right: 2.4rem;
  flex-direction: column;
  margin: 0 auto;

  > p {
    margin-top: auto;
    text-align: center;
    margin-bottom: 2.4rem;
  }

  ${mq['lg']} {
    padding-left: 5.4rem;
    padding-right: 5.4rem;
  }
`;
