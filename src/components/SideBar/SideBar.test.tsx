import React from 'react';
import SideBar from './SideBar';
import { render } from '@testing-library/react';

describe('<SideBar />', () => {
  it('should render correctly', () => {
    const parseTemp = jest.fn();

    render(<SideBar />);
  });
});
