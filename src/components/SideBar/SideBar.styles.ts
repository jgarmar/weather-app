import { Button } from '../ui-components/Button/Button.styles';
import { COLORS } from '../../utils/colors';
import mq from '../../utils/mediaQuery';
import styled from '@emotion/styled';

export const Container = styled.div`
  background-color: #1e213a;
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  ${mq['md']} {
    height: 100vh;

    max-width: 45.9rem;
    padding-top: 4.2rem;
  }
`;

export const SearchPlacesButton = styled(Button)`
  border: none;
  padding: 1rem 1.8rem;
  padding-top: 1.1rem;
  background: ${COLORS['STORM_GRAY']};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 1.8rem;
  padding-left: 1.1rem;
  padding-right: 1.2rem;

  ${mq['md']} {
    padding-top: 4.2rem;

    padding: 0 4.6rem;
  }
`;

export const CloseButton = styled(Button)`
  margin-left: auto;
  margin-bottom: 3.8rem;

  > svg {
    width: 2.4rem;
    height: 2.4rem;
    color: ${COLORS['ATHENS_GRAY']};
  }
`;
