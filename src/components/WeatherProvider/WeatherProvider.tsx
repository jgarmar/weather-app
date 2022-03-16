import React, {
  ReactElement,
  HTMLProps,
  createContext,
  useState,
  useCallback,
} from "react";
import fetcher from "../../fetcher";
import * as Styles from "./WeatherProvider.styles";
import { WeatherProviderProps } from "./WeatherProvider.types";

export const WeatherContext = createContext<any>(null);

const WeatherProvider = ({ children }: WeatherProviderProps) => {
  const [currentLocation, setCurrentLocation] = useState("San Francisco");
  const [currentWoeid, setCurrentWoeid] = useState("2487956");
  const [currentLocation, setCurrentLocation] = useState(
    "37.777119, -122.41964"
  );

  const searchLocation = useCallback(
    async (query) => {
      if (!query) {
        return null;
      }
      const data = await fetcher.get(
        `https://www.metaweather.com/api/location/search/?query=${query}`
      );
      console.log(data);
    },
    [query]
  );

  const value = { currentLocation, searchLocation };
  return (
    <WeatherContext.Provider value={value}>
      WeatherProvider
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
