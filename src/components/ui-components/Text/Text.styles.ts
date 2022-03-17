import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Colors, COLORS } from '../../../utils/colors';

export const Text = styled.p<{
  color?: Colors;
  xxxs?: boolean;
  xxs?: boolean;
  xs?: boolean;
  s?: boolean;
  m?: boolean;
  l?: boolean;
  xl?: boolean;
  xxl?: boolean;
  xxxl?: boolean;
  thin?: boolean;
  underline?: boolean;
  normal?: boolean;
  bold?: boolean;
}>`
  color: ${props => (props.color && COLORS[props.color]) || 'white'};
  margin-block-start: 0;
  margin-block-end: 0;
  font-family: 'Raleway';
  ${props => props.xxxs && xxxsStyles}
  ${props => props.xxs && xxsStyles}
${props => props.xs && xsStyles}
${props => props.s && sStyles}
${props => props.m && mStyles}
${props => props.l && lStyles}
${props => props.xl && xlStyles}
${props => props.xxl && xxlStyles}
${props => props.xxxl && xxxlStyles}
${props => props.thin && thinStyles}
${props => props.bold && boldStyles}
${props => props.underline && underlineStyles}
${props => !props.bold && !props.thin && normalStyles}
`;

const xxxsStyles = css`
  font-size: 1.2rem;
  line-height: 1.4rem;
`;

const xxsStyles = css`
  font-size: 1.4rem;
  line-height: 1.6rem;
`;

const xsStyles = css`
  font-size: 1.4rem;
  line-height: 1.7rem;
`;

const sStyles = css`
  font-size: 1.6rem;
  line-height: 1.9rem;
`;

const mStyles = css`
  font-size: 1.8rem;
  line-height: 2.1rem;
`;

const lStyles = css`
  font-size: 2.4rem;
  line-height: 2.8rem;
`;

const xlStyles = css`
  font-size: 3.6rem;
  line-height: 4.2rem;
`;

const xxlStyles = css`
  font-size: 6.4rem;
  line-height: 7.5rem;
`;

const xxxlStyles = css`
  font-size: 14.4rem;
  line-height: 16.9rem;
`;

const thinStyles = css`
  font-weight: 500;
`;

const normalStyles = css`
  font-weight: 600;
`;

const boldStyles = css`
  font-weight: 700;
`;

const underlineStyles = css`
  text-decoration: underline;
`;
