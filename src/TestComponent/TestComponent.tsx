import React, { FC } from 'react';

import { TestComponentProps } from './TestComponent.types';

import { Wrapper, Heading } from './TestComponent.styles';

const TestComponent: FC<TestComponentProps> = ({ theme }) => (
  <Wrapper data-testid="test-component" secondary={theme === 'secondary'}>
    <Heading>I'm the test component</Heading>
    <h2>Iris data driven</h2>
  </Wrapper>
);

export default TestComponent;
