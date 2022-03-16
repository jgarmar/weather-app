import styled from '@emotion/styled';

export const Text = styled.p<{ color?: string }>`
  color: ${props => props.color || 'white'};
  margin-block-start: 0;
  margin-block-end: 0;
`;
