import React from 'react';
import { render } from '@testing-library/react';
import SearchLocationScreen from './SearchLocationScreen';

describe('<SearchLocationScreen />', () => {
  it('should render correctly', () => {
    render(<SearchLocationScreen />);
  });
});
