import { HTMLAttributes } from 'react';

export type WindCompassProps = HTMLAttributes<HTMLElement> & {
  degrees: number;
  direction: string;
};
