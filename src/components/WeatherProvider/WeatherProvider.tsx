import {
  ConsolidatedWeather,
  Location,
  LocationUser,
  TempUnits,
  WeatherContextProps,
  WeatherInfo,
  WeatherProviderProps,
  weatherStateImage,
} from "./WeatherProvider.types";
import { createContext, useCallback, useEffect, useState } from "react";

import fetcher from "../../fetcher";
import { useGeolocation } from "react-use";

export const WeatherContext = createContext<any>(null);
const DEFAULT_LOCATION = {
  title: "Calgary",
  locationType: "City",
  woeid: 8775,
  lattLong: "51.013371,-114.070877",
};

const WeatherProvider = ({ children }: WeatherProviderProps) => {
  const locationUser = useGeolocation();
  const [defaultLocation, setDefaultLocation] = useState<Location | null>(
    DEFAULT_LOCATION
  );

  const [currentLocation, setCurrentLocation] = useState<Location | null>();
  const [locations, setLocations] = useState<Location[]>([]);
  const [weatherInfo, setWeatherInfo] = useState<WeatherInfo>(null);
  const [currentWeather, setCurrentWeather] = useState<ConsolidatedWeather>();
  const [tempUnit, setTempUnit] = useState<TempUnits>("C");
  const [forecastWeather, setForecastWeather] =
    useState<ConsolidatedWeather[]>();
  const [showLocationSearch, setShowLocationSearch] = useState<boolean>(false);

  const searchLocation = useCallback(async (query) => {
    if (!query) {
      return null;
    }

    const { data } = await fetcher.get(
      `${process.env.REACT_APP_CORS_URL}${process.env.REACT_APP_HOST_WEATHER_API}location/search/?query=${query}`
    );
    setLocations(data);
  }, []);

  const geoLocalize = useCallback(async (lat, long) => {
    if (!lat || !long) {
      return null;
    }

    const { data } = await fetcher.get(
      `${process.env.REACT_APP_CORS_URL}${process.env.REACT_APP_HOST_WEATHER_API}location/search/?lattlong=${lat},${long}`
    );
    setDefaultLocation(data[0]);
    setCurrentLocation(data[0]);
  }, []);

  const getWeather = useCallback(async (woeid: number) => {
    const { data } = await fetcher.get(
      `${process.env.REACT_APP_CORS_URL}${process.env.REACT_APP_HOST_WEATHER_API}location/${woeid}/`
    );
    const weather = data as WeatherInfo;
    const firstWeather = weather?.consolidatedWeather.shift();
    setWeatherInfo(weather);
    setCurrentWeather(firstWeather);
    setForecastWeather(weather?.consolidatedWeather);
  }, []);

  useEffect(() => {
    if (currentLocation?.woeid) {
      getWeather(currentLocation?.woeid);
      setShowLocationSearch(false);
    }
  }, [currentLocation, getWeather]);

  useEffect(() => {
    if (locationUser.error) {
      setCurrentLocation(DEFAULT_LOCATION);
    }
    if (locationUser?.latitude || !locationUser?.loading) {
      geoLocalize(locationUser.latitude, locationUser.longitude);
    }
  }, [
    geoLocalize,
    locationUser.altitude,
    locationUser.error,
    locationUser.latitude,
    locationUser?.loading,
    locationUser.longitude,
  ]);

  if (!currentLocation) {
    return null;
  }

  const setCurrentDefaultLocation = () => {
    setCurrentLocation(defaultLocation);
  };

  const parseTemp = (temp?: number) => {
    if (!temp) {
      return null;
    }

    return tempUnit === "C" ? temp.toFixed() : (temp * 1.8 + 32).toFixed();
  };

  const value: WeatherContextProps = {
    currentLocation,
    setCurrentLocation,
    searchLocation,
    locations,
    weatherInfo,
    weatherStateImage,
    currentWeather,
    forecastWeather,
    showLocationSearch,
    setShowLocationSearch,
    setCurrentDefaultLocation,
    setTempUnit,
    tempUnit,
    parseTemp,
  };
  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
};

export default WeatherProvider;
