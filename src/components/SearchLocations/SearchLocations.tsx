import * as Styles from './SearchLocations.styles';

import {
  LocationItemProps,
  LocationListProps,
  SearchLocationsProps,
} from './SearchLocations.types';
import { MdChevronRight, MdSearch } from 'react-icons/md';
import React, {
  ChangeEvent,
  HTMLProps,
  ReactElement,
  useContext,
  useState,
} from 'react';

import { Location } from '../WeatherProvider/WeatherProvider.types';
import Text from '../ui-components/Text';
import { useWeather } from '../../hooks/useWeather';

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
        <Text color="ATHENS_GRAY">Search</Text>
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
    setCurrentLocation(location);
  };

  return (
    <Styles.LocationItem onClick={e => handleClick(location)}>
      <Text color="ATHENS_GRAY">{location.title}</Text>
      <MdChevronRight />
    </Styles.LocationItem>
  );
};
export default SearchLocations;
