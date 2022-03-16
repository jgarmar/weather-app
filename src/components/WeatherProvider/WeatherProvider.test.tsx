import React from "react";
import { render } from "@testing-library/react";
import WeatherProvider from "./WeatherProvider";

describe("<WeatherProvider />", () => {
  it("should render correctly", () => {
    render(
      <WeatherProvider>
        <p>test</p>
      </WeatherProvider>
    );
  });
});
