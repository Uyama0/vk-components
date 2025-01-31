import './styles.styl';

export type ButtonProps = {
  variant?: 'primary' | 'secondary';
  size?: 28 | 36 | 56;
  state?: 'enabled' | 'pressed' | 'loaded' | 'disabled';
  counter?: boolean;
  focused?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 36,
  state = 'enabled',
  counter,
  focused = false,
}) => {
  const styles = {
    width: 'fit-content',
  };

  return <button style={styles}>Button</button>;
};
