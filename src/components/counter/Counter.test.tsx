import { render, screen } from '@testing-library/react';
import { Counter } from './Counter';

describe('Counter component', () => {
  test('renders with default props', () => {
    render(<Counter />);

    const counter = screen.getByTestId('counter');
    expect(counter).toBeInTheDocument();
  });

  test('renders with stroke', () => {
    render(<Counter stroke={true} />);

    const counter = screen.getByTestId('counter');
    expect(getComputedStyle(counter).border).not.toBe('none');
  });

  test.each([
    { quantity: '100', expectedQuantity: '99+' },
    { quantity: '-100', expectedQuantity: '-99' },
    { quantity: '56', expectedQuantity: '56' },
    { quantity: 'counter', expectedQuantity: 'cou' },
    { quantity: 'hi', expectedQuantity: 'hi' },
  ])('render with correct quantity value', ({ quantity, expectedQuantity }) => {
    render(<Counter quantity={quantity} size={16} />);

    const counter = screen.getByTestId('counter');
    expect(counter).toHaveTextContent(expectedQuantity);
  });

  test('doesnt show quantity if size lower than 16', () => {
    render(<Counter quantity="12" size={12} />);

    const counter = screen.getByTestId('counter');
    expect(counter).not.toHaveTextContent('12');
  });

  it('renders pulse animation when size <= 12 and pulse is true', () => {
    render(<Counter size={12} pulse />);

    const pulseOne = screen.getByTestId('counter').querySelector('.pulse.one');
    const pulseTwo = screen.getByTestId('counter').querySelector('.pulse.two');
    expect(pulseOne).toBeInTheDocument();
    expect(pulseTwo).toBeInTheDocument();
  });

  it('does not render pulse animation when size > 12', () => {
    render(<Counter size={16} pulse />);

    const pulseOne = screen.getByTestId('counter').querySelector('.pulse.one');
    const pulseTwo = screen.getByTestId('counter').querySelector('.pulse.two');
    expect(pulseOne).toBeNull();
    expect(pulseTwo).toBeNull();
  });

  it('has fixed width when quantity length is 0 or 1', () => {
    render(<Counter size={16} quantity="1" />);

    const counter = screen.getByTestId('counter');
    expect(counter).toHaveStyle('width: 16px'); 
  });

  it('has auto width when quantity length is greater than 1', () => {
    render(<Counter size={16} quantity="11" />);

    const counter = screen.getByTestId('counter');
    expect(counter).toHaveStyle('width: auto'); 
  });
});
