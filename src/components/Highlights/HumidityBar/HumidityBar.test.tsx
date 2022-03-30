import React from 'react';
import { render } from '@testing-library/react';
import HumidityBar from './HumidityBar';

describe('<HumidityBar />', () => {
  it('should render correctly', () => {
    render(<HumidityBar humidity={50} />);
  });
});
