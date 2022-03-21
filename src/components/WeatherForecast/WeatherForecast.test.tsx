import React from 'react';
import { render } from '@testing-library/react';
import WeatherForecast from './WeatherForecast';

describe('<WeatherForecast />',()=>{
    it('should render correctly',()=>{
        render(
            <WeatherForecast />);
    })
})