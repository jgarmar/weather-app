import Text from '../../ui-components/Text';
import * as Styles from './Highlight.styles';
import { HighlightProps } from './Highlight.types';

const Highlight = ({ title, value, unit, children }: HighlightProps) => {
  return (
    <Styles.Container paddingBottom={!children}>
      <Text s thin color="ATHENS_GRAY">
        {title}
      </Text>
      <Styles.CenterValue>
        <Text xxl bold color="ATHENS_GRAY">
          {value.toFixed()}
        </Text>
        <Text xl thin color="ATHENS_GRAY">
          {unit}
        </Text>
      </Styles.CenterValue>
      {children}
    </Styles.Container>
  );
};

export default Highlight;
