import React from 'react';
import { render } from '@testing-library/react';
import Highlight from './Highlight';

describe('<Highlight />',()=>{
    it('should render correctly',()=>{
        render(
            <Highlight />);
    })
})