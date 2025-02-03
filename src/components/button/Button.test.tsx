import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button component', () => {
  test('renders with enabled state', () => {
    render(<Button label="Button" />);

    const button = screen.getByTestId('button');
    expect(button).toBeInTheDocument();
    expect(button).not.toBeDisabled();
  });

  test('renders with loading state', () => {
    render(<Button label="Button" state="loading" />);

    const button = screen.getByTestId('button');
    expect(button).toHaveClass('loading');
    expect(button).toHaveAttribute('aria-busy', 'true');
  });

  test('renders with disabled state', () => {
    render(<Button label="Button" state="disabled" />);

    const button = screen.getByTestId('button');
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute('aria-disabled', 'true');
  });

  it('renders with counter', () => {
    render(<Button label="Button" counter />);

    const counter = screen.getByTestId('counter');
    expect(counter).toBeInTheDocument();
  });

  test('render with correct variant class', () => {
    render(<Button label="Primary" variant="secondary" />);

    const button = screen.getByTestId('button');
    expect(button).toHaveClass('button_secondary');
  });

  test('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button label="Button" onClick={handleClick} />);

    const button = screen.getByTestId('button');

    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('calls with fixed width (50px)', () => {
    render(
      <Button label="Very long label for button" style={{ width: '50px' }} />
    );

    const button = screen.getByTestId('button');
    const label = screen.getByText('Very long label for button');
    expect(getComputedStyle(button).width).toBe('50px');
    expect(label.innerText).not.toBe('Very long label for button');
  });
});
