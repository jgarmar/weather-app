import styled from '@emotion/styled';

export const Container = styled.div``;

export const Input = styled.input``;

export const SearchButton = styled.button`
  color: #e7e7eb;
  background-color: #3c47e9;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LocationItem = styled.button`
  background: none;
  border: none;
  padding: 2.4rem 1.2rem;
  border: 1px solid transparent;
  cursor: pointer;
  transition: border 0.2s ease-in-out;

  &:hover {
    border: 1px solid #616475;
  }
`;
