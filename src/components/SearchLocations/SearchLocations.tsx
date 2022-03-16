import React, {
  ReactElement,
  HTMLProps,
  useState,
  ChangeEvent,
  useContext,
} from 'react';
import { useWeather } from '../../hooks/useWeather';
import Text from '../ui-components/Text';
import * as Styles from './SearchLocations.styles';
import {
  SearchLocationsProps,
  LocationListProps,
  LocationItemProps,
} from './SearchLocations.types';

const SearchLocations = (props: SearchLocationsProps) => {
  const { searchLocation, locations } = useWeather();
  const [query, setQuery] = useState('');

  const handleSearchSubmit = () => {
    searchLocation('a');
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <Styles.Container>
      <Styles.Input value={query} onChange={handleChange} />
      <Styles.SearchButton onClick={handleSearchSubmit}>
        <Text>Search</Text>
      </Styles.SearchButton>
      <LocationList locations={locations} />
    </Styles.Container>
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
  return (
    <Styles.LocationItem>
      <Text color="#E7E7EB">{location.title}</Text>
    </Styles.LocationItem>
  );
};
export default SearchLocations;
