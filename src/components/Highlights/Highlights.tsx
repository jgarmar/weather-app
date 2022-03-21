import React, { ReactElement, HTMLProps } from 'react';
import { useWeather } from '../../hooks/useWeather';
import * as Styles from './Highlights.styles';
import { HighlightsProps } from './Highlights.types';

const Highlights = (props: HighlightsProps) => {
  const { currentWeather } = useWeather();

  return <Styles.Container>Highlights</Styles.Container>;
};

export default Highlights;
