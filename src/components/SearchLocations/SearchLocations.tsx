import React, {
  ReactElement,
  HTMLProps,
  useState,
  ChangeEvent,
  useContext,
} from 'react';
import { useWeather } from '../../hooks/useWeather';
import Text from '../ui-components/Text';
import { MdSearch } from 'react-icons/md';

import * as Styles from './SearchLocations.styles';
import {
  SearchLocationsProps,
  LocationListProps,
  LocationItemProps,
} from './SearchLocations.types';
import { Location } from '../WeatherProvider/WeatherProvider.types';

const SearchLocations = (props: SearchLocationsProps) => {
  const { locations } = useWeather();

  return (
    <Styles.Container>
      <SearchBox />
      <LocationList locations={locations} />
    </Styles.Container>
  );
};

export const SearchBox = () => {
  const { searchLocation } = useWeather();
  const [query, setQuery] = useState('');

  const handleSearchSubmit = () => {
    searchLocation(query);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };
  return (
    <Styles.SearchInputContainer>
      <Styles.SearchInput>
        <MdSearch />
        <Styles.Input
          placeholder="search location"
          value={query}
          onChange={handleChange}
        />
      </Styles.SearchInput>
      <Styles.SearchButton onClick={handleSearchSubmit}>
        <Text>Search</Text>
      </Styles.SearchButton>
    </Styles.SearchInputContainer>
  );
};

export const LocationList = ({ locations }: LocationListProps) => {
  return (
    <Styles.List>
      {locations.map(location => (
        <LocationItem key={location.woeid} location={location} />
      ))}
    </Styles.List>
  );
};

export const LocationItem = ({ location }: LocationItemProps) => {
  const { setCurrentLocation } = useWeather();

  const handleClick = (location: Location) => {
    console.log(location);
    setCurrentLocation(location);
  };

  return (
    <Styles.LocationItem onClick={e => handleClick(location)}>
      <Text color="ATHENS_GRAY">{location.title}</Text>
    </Styles.LocationItem>
  );
};
export default SearchLocations;
