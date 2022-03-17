import React, { ReactElement, HTMLProps } from 'react';
import * as Styles from './Button.styles';
import { ButtonProps } from './Button.types';

const Button = ({ children, ...restProps }: ButtonProps) => {
  return <Styles.Button {...restProps}>{children}</Styles.Button>;
};

export default Button;
