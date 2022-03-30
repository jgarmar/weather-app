import Text from '../../ui-components/Text';
import * as Styles from './HumidityBar.styles';
import { HumidityBarProps } from './HumidityBar.types';

const HumidityBar = ({ humidity }: HumidityBarProps) => {
  return (
    <Styles.Container>
      <Styles.Marks>
        <Text xxxs bold color="SANTAS_GRAY">
          0
        </Text>
        <Text xxxs bold color="SANTAS_GRAY">
          50
        </Text>
        <Text xxxs bold color="SANTAS_GRAY">
          100
        </Text>
      </Styles.Marks>
      <Styles.Inner width={humidity}></Styles.Inner>
    </Styles.Container>
  );
};

export default HumidityBar;
