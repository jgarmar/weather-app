import WeatherProvider, { WeatherContext } from "./WeatherProvider";

import React from "react";
import { render } from "@testing-library/react";
import { useWeather } from "../../hooks/useWeather";

describe("<WeatherProvider />", () => {
  it("should render correctly", () => {
    const data = useWeather();

    render(
      <WeatherContext.Provider value={data}>
        <WeatherProvider>
          <p>test</p>
        </WeatherProvider>
      </WeatherContext.Provider>
    );
  });
});
