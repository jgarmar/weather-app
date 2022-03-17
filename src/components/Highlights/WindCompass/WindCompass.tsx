import * as Styles from './WindCompass.styles';
import { WindCompassProps } from './WindCompass.types';
import { MdNavigation } from 'react-icons/md';
import Text from '../../ui-components/Text';

const WindCompass = ({ degrees, direction }: WindCompassProps) => {
  return (
    <Styles.Container>
      <Styles.Icon degrees={degrees}>
        <MdNavigation />
      </Styles.Icon>
      <Text xxs thin>
        {direction}
      </Text>
    </Styles.Container>
  );
};

export default WindCompass;
