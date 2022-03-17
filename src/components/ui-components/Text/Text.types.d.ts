import { HTMLAttributes } from 'react';
import { Colors, COLORS } from '../../../utils/colors';

export type TextProps = HTMLAttributes<HTMLElement> & {
  children: string | number;
  color?: Colors;
  xxxs?: boolean;
  xxs?: boolean;
  xs?: boolean;
  s?: boolean;
  m?: boolean;
  l?: boolean;
  xl?: boolean;
  xxl?: boolean;
  xxxl?: boolean;
  thin?: boolean;
  normal?: boolean;
  bold?: boolean;
};
