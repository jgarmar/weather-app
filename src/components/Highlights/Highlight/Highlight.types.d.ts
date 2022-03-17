import { HTMLAttributes } from 'react';

export type HighlightProps = HTMLAttributes<HTMLElement> & {
  title: string;
  unit: string;
  value: number;
  children?: React.ReactNode;
};
