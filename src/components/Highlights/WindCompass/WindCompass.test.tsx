import React from 'react';
import { render } from '@testing-library/react';
import WindCompass from './WindCompass';

describe('<WindCompass />', () => {
  it('should render correctly', () => {
    render(<WindCompass degrees={90} direction="ENE" />);
  });
});
