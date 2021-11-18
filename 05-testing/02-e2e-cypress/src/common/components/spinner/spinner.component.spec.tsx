import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { SpinnerComponent } from './spinner.component';
import * as mocked from 'react-promise-tracker/lib/trackerHook';

describe(' spinner.component spec', () => {
  it('', () => {
    // Arrange;
    const promiseTrackerStub = jest
      .spyOn(mocked, 'usePromiseTracker')
      .mockImplementation(() => ({ promiseInProgress: true }));
    // Act;
    const { asFragment } = render(<SpinnerComponent />);
    const presentation = screen.findAllByText('presentation');
    // // // Assert
    expect(promiseTrackerStub).toHaveBeenCalled();
    expect(presentation).toContainHTML;
    expect(presentation).toBeVisible;
    expect(asFragment()).toMatchSnapshot();
  });
});
