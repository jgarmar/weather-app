import { HTMLAttributes } from 'react';

export type TextProps = HTMLAttributes<HTMLElement> & {
  children: string;
  color?: string | undefined;
};
