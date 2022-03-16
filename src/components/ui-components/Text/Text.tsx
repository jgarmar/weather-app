import React, { ReactElement, HTMLProps } from 'react';
import * as Styles from './Text.styles';
import { TextProps } from './Text.types';

const Text = ({ children, color }: TextProps) => {
  return <Styles.Text color={color}>{children}</Styles.Text>;
};

export default Text;
