import React from 'react';
import { render } from '@testing-library/react';

import DataLib from './data-lib';

describe(' DataLib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DataLib />);
    expect(baseElement).toBeTruthy();
  });
});
