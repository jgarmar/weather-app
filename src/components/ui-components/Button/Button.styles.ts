import { COLORS, Colors } from '../../../utils/colors';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Button = styled.button<{ bgColor?: Colors }>`
  border: none;
  cursor: pointer;
  background-color: ${props =>
    props.bgColor ? COLORS[props.bgColor] : 'transparent'};
`;

export const CircularButton = styled(Button)<{ active?: boolean }>`
  border: none;
  border-radius: 100%;
  width: 4rem;
  height: 4rem;
  padding: 0.8rem;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  > svg {
    width: 2.4rem;
    height: 2.4rem;
    color: ${COLORS['ATHENS_GRAY']};
  }

  ${props => props?.active && activeButton};
`;

const activeButton = css`
  background-color: ${COLORS.ATHENS_GRAY};

  > p {
    color: ${COLORS.HAITI};
  }
`;
