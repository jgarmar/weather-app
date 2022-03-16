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
  const [currentLocation, setCurrentLocation] = useState({
    title: "Calgary",
    locationType: "City",
    woeid: 8775,
    lattLong: "51.013371,-114.070877",
  });
  const [currentWoeid, setCurrentWoeid] = useState("2487956");
  const [currentPosition, setCurrentPosition] = useState(
    "37.777119, -122.41964"
  );
  const [locations, setLocations] = useState([]);

  const searchLocation = useCallback(async (query) => {
    if (!query) {
      return null;
    }

    const { data } = await fetcher.get(
      `https://cors-anywhere.herokuapp.com/metaweather.com/api/location/search/?query=${query}`
    );
    setLocations(data);
  }, []);

  const value = { currentLocation, searchLocation, locations };
  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
};

export default WeatherProvider;
