import React from 'react';
import { render } from '@testing-library/react';
import WeatherImage from './WeatherImage';

describe('<WeatherImage />',()=>{
    it('should render correctly',()=>{
        render(
            <WeatherImage />);
    })
})