import React, { HTMLAttributes } from 'react';
import { Colors, COLORS } from '../../../utils/colors';

export type TextProps = HTMLAttributes<HTMLElement> & {
  children: string | number | React.ReactNode;
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
  href?: string;
  as?: React.ElementType;
  underline?: boolean;
};
