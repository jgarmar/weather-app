import React from 'react';
import WeatherPanel from './WeatherPanel';
import { render } from '@testing-library/react';

describe('<WeatherPanel />', () => {
  it('should render correctly', () => {
    render(<WeatherPanel />);
  });
});
