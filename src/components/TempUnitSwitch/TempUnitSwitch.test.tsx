import React from 'react';
import TempUnitSwitch from './TempUnitSwitch';
import { render } from '@testing-library/react';

describe('<TempUnitSwitch />', () => {
  it('should render correctly', () => {
    render(<TempUnitSwitch />);
  });
});
