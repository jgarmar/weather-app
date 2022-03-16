import React from 'react';
import { render } from '@testing-library/react';
import Text from './Text';

describe('<Text />', () => {
  it('should render correctly', () => {
    render(<Text>Test</Text>);
  });
});
