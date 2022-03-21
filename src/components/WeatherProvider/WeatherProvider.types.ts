import React, { HTMLAttributes } from "react";

export type WeatherProviderProps = HTMLAttributes<HTMLElement> & {
  children: React.ReactNode;
};

export type WeatherInfo = {
  consolidatedWeather: ConsolidatedWeather[];
  time: string;
  sunRise: string;
  sunSet: string;
  timezoneName: string;
  parent: Location;
  sources: Sources[];
  title: string;
  locationType: string;
  woeid: number;
  lattLong: string;
  timezone: string;
} | null;

export type Location = {
  title: string;
  locationType: string;
  woeid: number;
  lattLong: string;
};

export type ConsolidatedWeather = {
  id: number;
  weatherStateName: string;
  weatherStateAbbr: WeatherStateAbbr;
  windDirectionCompass: string;
  created: string;
  applicableDate: string;
  minTemp: number;
  maxTemp: number;
  theTemp: number;
  windSpeed: number;
  windDirection: number;
  airPressure: number;
  humidity: number;
  visibility: number;
  predictability: number;
};

export type Sources = {
  title: string;
  slug: string;
  url: string;
  crawlRate: number;
};

export type WeatherContextProps = {
  currentLocation: Location | null;
  searchLocation: (query: string) => void;
  setCurrentLocation: (location: Location) => void;
  locations: Location[];
  weatherInfo: WeatherInfo | null;
  weatherStateImage: any;
  currentWeather?: ConsolidatedWeather;
  forecastWeather?: ConsolidatedWeather[];
  showLocationSearch: boolean;
  setShowLocationSearch: (show: boolean) => void;
};

export const weatherStateImage = {
  sn: "/assets/svg/sn.svg",
  sl: "/assets/svg/sl.svg",
  h: "/assets/svg/h.svg",
  t: "/assets/svg/t.svg",
  hr: "/assets/svg/hr.svg",
  lr: "/assets/svg/lr.svg",
  s: "/assets/svg/s.svg",
  hc: "/assets/svg/hc.svg",
  lc: "/assets/svg/lc.svg",
  c: "/assets/svg/c.svg",
};

export type WeatherStateAbbr = keyof typeof weatherStateImage;
