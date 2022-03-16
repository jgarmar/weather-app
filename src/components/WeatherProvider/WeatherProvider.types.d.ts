import React, { HTMLAttributes } from "react";

export type WeatherProviderProps = HTMLAttributes<HTMLElement> & {
  children: React.ReactNode;
};

export type WeatherLocation = {
  consolidated_weather: ConsolidatedWeather[];
  time: string;
  sun_rise: string;
  sun_set: string;
  timezone_name: string;
  parent: {
    title: string;
    location_type: string;
    woeid: number;
    latt_long: string;
  };
  sources: Sources[];
  title: string;
  location_type: string;
  woeid: number;
  latt_long: string;
  timezone: string;
};

export type ConsolidatedWeather = {
  id: number;
  weather_state_name: string;
  weather_state_abbr: string;
  wind_direction_compass: string;
  created: string;
  applicable_date: string;
  min_temp: number;
  max_temp: number;
  the_temp: number;
  wind_speed: number;
  wind_direction: number;
  air_pressure: number;
  humidity: number;
  visibility: number;
  predictability: number;
};

export type Sources = {
  title: string;
  slug: string;
  url: string;
  crawl_rate: number;
};
