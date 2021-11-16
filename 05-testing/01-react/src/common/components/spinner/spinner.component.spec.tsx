import React from 'react';
import { render, screen } from '@testing-library/react';
import { SpinnerComponent } from './spinner.component';
import userEvent from '@testing-library/user-event';

describe(' # spinner.component spec', () => {
  it('', () => {
    render(<SpinnerComponent />);
    const dialogElement = screen.getByRole('dialog');
    // Assert
    expect(dialogElement).toBeInTheDocument();
    expect(dialogElement).not.toBeNull();
    expect(dialogElement).toBeTruthy();
  });

  it('should render/test click, a selected element: #button# ', () => {
    // Arrange

    // Act
    render(<SpinnerComponent />);
    const closeButton = screen.getByRole('button', { name: /testClose/i });
    const acceptButton = screen.getByRole('button', { name: /testAccept/i });
    userEvent.click(closeButton);
    userEvent.click(acceptButton);
    // Assert
    expect(closeButton).toBeInTheDocument();
    expect(acceptButton).toBeInTheDocument();
    expect(acceptButton).not.toBeNull();
    expect(closeButton).not.toBeNull();
  });

  it('', () => {
    // Arrange
    // Assert
    // Act
  });
});
