import React from 'react';
import { render, screen } from '@testing-library/react';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';
import userEvent from '@testing-library/user-event';

describe(' # confirmation-dialog.component specs', () => {
  //Arrange
  const props = {
    isOpen: true,
    onAccept: jest.fn(),
    onClose: jest.fn(),
    title: 'testTitle',
    labels: { closeButton: 'testClose', acceptButton: 'testAccept' },
  };

  it('should render a selected element: #dialog# ', () => {
    // Arrange

    // Act
    render(<ConfirmationDialogComponent {...props} />);
    const dialogElement = screen.getByRole('dialog');
    // Assert
    expect(dialogElement).toBeInTheDocument();
    expect(dialogElement).not.toBeNull();
    expect(dialogElement).toBeTruthy();
  });

  it('should render/test click, a selected element: #button# ', () => {
    // Arrange

    // Act
    render(<ConfirmationDialogComponent {...props} />);
    const closeButton = screen.getByRole('button', { name: /testClose/i });
    const acceptButton = screen.getByRole('button', { name: /testAccept/i });
    userEvent.click(closeButton);
    userEvent.click(acceptButton);
    // Assert
    expect(closeButton).toBeInTheDocument();
    expect(acceptButton).toBeInTheDocument();
    expect(acceptButton).not.toBeNull();
    expect(closeButton).not.toBeNull();
    expect(props.onAccept).toHaveBeenCalled();
    expect(props.onClose).toHaveBeenCalled();
  });

  it('should render/test a selected element: #title# ', () => {
    // Arrange

    // Assert
    render(<ConfirmationDialogComponent {...props} />);
    const titleElement = screen.getByText(props.title);
    // Act
    expect(titleElement).toBeVisible();
    expect(titleElement.innerHTML).toMatch('testTitle');
  });
});
