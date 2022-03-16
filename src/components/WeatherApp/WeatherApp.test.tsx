import * as React from 'react';
import { render } from '@testing-library/react';
import WeatherApp from './WeatherApp';

describe('<WeatherApp />', () => {
    it('should render correctly', () => {
        render(
            <WeatherApp />);
    })
})