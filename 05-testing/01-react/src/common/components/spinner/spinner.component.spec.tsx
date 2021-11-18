import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { SpinnerComponent } from './spinner.component';
import * as mocked from 'react-promise-tracker';

describe('testing spinner component', () => {
  it('', () => {
    // Arrange;
    let promiseTrackerStub = jest
      .spyOn(mocked, 'usePromiseTracker')
      .mockImplementation(() => ({ promiseInProgress: true }));
    // Act
    render(<SpinnerComponent />);
    const presentation = screen.findByRole('presentation');
    // Assert
    expect(presentation).toBeInTheDocument();
  });
});
