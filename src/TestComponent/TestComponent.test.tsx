import React from 'react';
import { render } from '@testing-library/react';

import TestComponent from './TestComponent';
import { TestComponentProps } from './TestComponent.types';

describe('Test Component', () => {
  let props: TestComponentProps;

  beforeEach(() => {
    props = {
      theme: 'primary',
    };
  });

  const renderComponent = () => render(<TestComponent {...props} />);

  it('should render the component', () => {
    const { getByTestId } = renderComponent();

    const testComponent = getByTestId('test-component');

    expect(testComponent).toHaveTextContent(`I'm the test component`);
  });
});
