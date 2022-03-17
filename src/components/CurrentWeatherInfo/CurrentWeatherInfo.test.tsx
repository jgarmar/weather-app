import React from 'react';
import { render } from '@testing-library/react';
import CurrentWeatherInfo from './CurrentWeatherInfo';

describe('<CurrentWeatherInfo />',()=>{
    it('should render correctly',()=>{
        render(
            <CurrentWeatherInfo />);
    })
})