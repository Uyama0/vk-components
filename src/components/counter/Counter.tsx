import './styles.styl';

export type CounterProps = {
  variant?: 'primary' | 'secondary';
  size?: 8 | 12 | 16 | 20 | 24;
  stroke?: boolean;
  quantity?: string;
  pulse?: boolean;
};

export const Counter: React.FC<CounterProps> = ({
  variant = 'primary',
  size = 8,
  stroke = true,
  quantity,
  pulse = false,
}) => {
  const borderWidth = Math.floor(size / 8);
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
    minWidth: `${size}px`,
    height: `${size}px`,
    border: stroke
      ? `${borderWidth}px solid ${
          variant === 'primary'
            ? 'hsla(151, 59%, 45%, 1)'
            : 'hsla(20, 11.70%, 69.80%, 0.12)'
        }`
      : 'none',
    padding: `0 ${HorizontalPadding}px`,
  };

  return (
    <div style={styles} className={`counter counter_${variant}`}>
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
