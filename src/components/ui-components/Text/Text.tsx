import * as Styles from './Text.styles';
import { TextProps } from './Text.types';

const Text = ({ children, color, ...rest }: TextProps) => {
  return (
    <Styles.Text color={color} {...rest}>
      {children}
    </Styles.Text>
  );
};

export default Text;
