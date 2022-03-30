import React from 'react';
import { render } from '@testing-library/react';
import TempUnitSwitch from './TempUnitSwitch';

describe('<TempUnitSwitch />',()=>{
    it('should render correctly',()=>{
        render(
            <TempUnitSwitch />);
    })
})