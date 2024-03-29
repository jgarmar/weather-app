import { COLORS } from '../../utils/colors';
import styled from '@emotion/styled';

export const Container = styled.div``;

export const Input = styled.input`
  border: none;
  background: none;
  color: #616475;

  &:focus {
    outline: 0;
  }
`;

export const SearchButton = styled.button`
  background-color: #3c47e9;
  padding-left: 1.9rem;
  padding-top: 1.4rem;
  padding-right: 1.4rem;
  padding-bottom: 1.5rem;
  border: none;
  cursor: pointer;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  flex: 1;
  margin-top: 3.8rem;
  max-height: 80vh;
`;

export const LocationItem = styled.button`
  background: none;
  border: none;
  padding: 2.4rem 1.2rem;
  border: 1px solid transparent;
  cursor: pointer;
  transition: border 0.2s ease-in-out;
  display: flex;
  justify-content: space-between;

  > p {
    text-align: center;
    margin: auto;
  }

  > svg {
    opacity: 0;
    width: 2.2em;
    color: ${COLORS['SHUTTLE_GRAY']};
    height: 2.2rem;
    transition: opacity 0.2s ease-in-out;
  }

  &:hover {
    border: 1px solid #616475;

    > svg {
      opacity: 1;
    }
  }
`;

export const SearchInputContainer = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
`;

export const SearchInput = styled.div`
  border: 1px solid #e7e7eb;
  margin-right: 1.2rem;
  display: flex;
  align-items: center;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  flex: 1;

  > svg {
    width: 2.4rem;
    height: 2.4rem;
    color: #616475;
  }

  &:focus-within {
    border: 1px solid white;
  }
`;
