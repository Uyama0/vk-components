import { COUNTER_SIZE_MAP } from '@/constants/sizes';

import './styles.styl';

export type CounterProps = {
  variant?: 'primary' | 'secondary';
  size?: 8 | 12 | 16 | 20 | 24;
  stroke?: boolean;
  quantity?: string;
  pulse?: boolean;
} & React.ComponentPropsWithoutRef<'div'>;

export const Counter: React.FC<CounterProps> = ({
  variant = 'primary',
  size = 8,
  stroke = true,
  quantity,
  pulse = false,
  ...props
}) => {
  const { width, height, borderWidth } = COUNTER_SIZE_MAP[size];

  const HorizontalPadding = size > 12 ? size / 4 : 0;

  const formatQuantity = (quantity: string): string => {
    const numberValue = Math.floor(+quantity);

    if (!isNaN(numberValue)) {
      if (numberValue > 99) return '99+';
      if (numberValue < -99) return '-99';

      return numberValue.toString();
    }

    return quantity.length > 3 ? quantity.slice(0, 3) : quantity;
  };

  const styles = {
    width: `${size > 12 && quantity && quantity.length >= 2 ? `auto` : width}`,
    height,
    borderWidth: stroke ? `${borderWidth}px` : '0px',
    padding: `0 ${HorizontalPadding}px`,
  };

  return (
    <div
      className={`counter counter_${variant}`}
      data-testid="counter"
      aria-label="Счетчик"
      aria-live="polite"
      role="status"
      style={{ ...styles, ...props.style }}
      {...props}
    >
      {size > 12 && quantity && formatQuantity(quantity)}
      {pulse && size <= 12 && (
        <>
          <div className="pulse one"></div>
          <div className="pulse two"></div>
        </>
      )}
    </div>
  );
};
