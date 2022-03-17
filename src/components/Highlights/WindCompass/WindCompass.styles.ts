import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 1.8rem;
  margin-bottom: 2.41rem;
`;

export const Icon = styled.div<{ degrees: number }>`
  background: rgba(255, 255, 255, 0.3);
  width: 3rem;
  height: 3rem;
  display: flex;
  border-radius: 100%;
  align-items: center;
  justify-content: center;
  margin-right: 1.071rem;

  > svg {
    transform: rotate(${props => props.degrees}deg);
    color: #fff;
    width: 1.77rem;
    height: 1.77rem;
  }
`;
