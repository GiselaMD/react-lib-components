import styled from 'styled-components';

import { StyleProps } from './TestComponent.types';

export const Wrapper = styled.div<StyleProps>(
  props => `
  background-color: ${props.secondary ? 'black' : 'white'};
  color: ${props.secondary ? 'white' : 'black'};
  border: 1px solid black;
  padding: 16px;
  width: 360px;
  text-align: center;
`
);

export const Heading = styled.h1`
  font-size: 64px;
`;
