import React from 'react';
import { render } from '@testing-library/react';
import WeatherPanel from './WeatherPanel';

describe('<WeatherPanel />',()=>{
    it('should render correctly',()=>{
        render(
            <WeatherPanel />);
    })
})