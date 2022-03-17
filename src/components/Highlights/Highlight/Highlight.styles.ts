import styled from '@emotion/styled';
import { COLORS } from '../../../utils/colors';

export const Container = styled.div<{ paddingBottom: boolean }>`
  padding-top: 2.2rem;
  background-color: ${COLORS['MIRAGE']};
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding-bottom: ${props => props.paddingBottom && '3.7rem'};

  > p {
    margin-bottom: 0.6rem;
  }
`;

export const CenterValue = styled.span`
  display: flex;
  justify-content: center;
  align-items: baseline;
`;
