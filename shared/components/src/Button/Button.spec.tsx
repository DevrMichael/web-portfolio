import React from 'react';
import { act, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

describe('Button', () => {
  it('renders the button text', () => {
    const text = 'Button text';
    const { queryByTestId } = render(<Button>{text}</Button>);

    expect(queryByTestId('button-text')?.textContent).toBe(text);
  });

  it('renders the icon on the left', () => {
    const { queryByTestId } = render(
      <Button icon={<span />} iconPosition="left">
        Button
      </Button>,
    );

    expect(queryByTestId('left-icon')).not.toBeNull();
    expect(queryByTestId('right-icon')).toBeNull();
  });

  it('renders the icon on the right', () => {
    const { queryByTestId } = render(
      <Button icon={<span />} iconPosition="right">
        Button
      </Button>,
    );

    expect(queryByTestId('right-icon')).not.toBeNull();
    expect(queryByTestId('left-icon')).toBeNull();
  });

  it('does not render the icon if it is not present', () => {
    const { queryByTestId } = render(<Button iconPosition="right">Button</Button>);

    expect(queryByTestId('right-icon')).toBeNull();
    expect(queryByTestId('left-icon')).toBeNull();
  });

  it('calls onclick when the button is clicked', async () => {
    const mockOnClick = jest.fn();
    const { queryByTestId } = render(
      <Button data-testid="button" onClick={mockOnClick}>
        Button
      </Button>,
    );

    const button = queryByTestId('button') as HTMLButtonElement;

    expect(button).not.toBeNull();
    await act(async () => {
      await userEvent.click(button);
    });

    expect(mockOnClick.mock.calls).toHaveLength(1);
  });

  it('does not call onclick when the button is clicked while isLoading is true', () => {
    const mockOnClick = jest.fn();
    const { queryByTestId } = render(
      <Button data-testid="button" onClick={mockOnClick} isLoading>
        Button
      </Button>,
    );

    const button = queryByTestId('button') as HTMLButtonElement;

    expect(button).not.toBeNull();
    userEvent.click(button);

    expect(mockOnClick.mock.calls).toHaveLength(0);
  });

  it('renders a spinner when isLoading is true', () => {
    const { queryByTestId } = render(
      <Button icon={<span />} isLoading>
        Button
      </Button>,
    );

    expect(queryByTestId('spinner')).not.toBeNull();
    expect(queryByTestId('left-icon')).toBeNull();
    expect(queryByTestId('right-icon')).toBeNull();
  });
});
