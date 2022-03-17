import React, { HTMLAttributes } from 'react';
import { TextProps } from '../Text/Text.types';

export type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  bgColor?: Colors;
};
