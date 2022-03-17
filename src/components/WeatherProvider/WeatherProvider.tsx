import { createContext, useState, useCallback, useEffect } from "react";
import fetcher from "../../fetcher";
import {
  Location,
  WeatherContextProps,
  WeatherInfo,
  WeatherProviderProps,
  weatherStateImage,
} from "./WeatherProvider.types";

export const WeatherContext = createContext<any>(null);

const WeatherProvider = ({ children }: WeatherProviderProps) => {
  const [currentLocation, setCurrentLocation] = useState<Location>({
    title: "Calgary",
    locationType: "City",
    woeid: 8775,
    lattLong: "51.013371,-114.070877",
  });

  const [locations, setLocations] = useState<Location[]>([]);
  const [weatherInfo, setWeatherInfo] = useState<WeatherInfo>(null);

  const searchLocation = useCallback(async (query) => {
    if (!query) {
      return null;
    }

    const { data } = await fetcher.get(
      `https://cors-anywhere.herokuapp.com/metaweather.com/api/location/search/?query=${query}`
    );
    setLocations(data);
  }, []);

  const getWeather = useCallback(async () => {
    const { data } = await fetcher.get(
      `https://cors-anywhere.herokuapp.com/metaweather.com/api/location/${currentLocation.woeid}/`
    );
    setWeatherInfo(data);
  }, []);

  useEffect(() => {
    getWeather();
  }, [currentLocation]);

  const value: WeatherContextProps = {
    currentLocation,
    setCurrentLocation,
    searchLocation,
    locations,
    weatherInfo,
    weatherStateImage,
  };
  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
};

export default WeatherProvider;
