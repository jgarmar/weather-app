import styled from '@emotion/styled';
import { COLORS, Colors } from '../../../utils/colors';

export const Button = styled.button<{ bgColor?: Colors }>`
  border: none;
  background-color: ${props =>
    props.bgColor ? COLORS[props.bgColor] : 'transparent'};
`;
