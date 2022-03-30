import styled from '@emotion/styled';
import { COLORS } from '../../../utils/colors';

export const Container = styled.div`
  max-width: 22.9rem;
  width: 100%;
  align-self: center;
  margin-top: 1.2rem;
  margin-bottom: 4.1rem;
`;

export const Marks = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.2rem;
`;

export const Inner = styled.div<{ width: number }>`
  height: 0.8rem;
  border-radius: 8rem;
  width: 100%;
  background-color: ${COLORS['ATHENS_GRAY']};
  overflow: hidden;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    width: ${props => props.width}%;
    background-color: ${COLORS['PARIS_DAISY']};
    height: 0.8rem;
    border-radius: 8rem;
    left: 0;
  }
`;
