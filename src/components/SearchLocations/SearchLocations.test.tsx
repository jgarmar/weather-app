import React from 'react';
import { render } from '@testing-library/react';
import SearchLocations from './SearchLocations';

describe('<SearchLocations />', () => {
  it('should render correctly', () => {
    render(<SearchLocations />);
  });
});
