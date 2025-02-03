import React from 'react';

import { Counter } from '../counter/Counter';

import { BUTTON_SIZE_MAP } from '@/constants/sizes';

import './styles.styl';

export type ButtonProps = {
  variant?: 'primary' | 'secondary';
  size?: 28 | 36 | 56;
  state?: 'enabled' | 'loading' | 'disabled';
  counter?: boolean;
  focused?: boolean;
  label: string;
} & React.ComponentPropsWithoutRef<'button'>;

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 36,
  state = 'enabled',
  counter,
  focused = false,
  label,
  ...props
}) => {
  const { padding, gap, loaderSize, borderRadius } = BUTTON_SIZE_MAP[size];

  const isLoading = state === 'loading';
  const isDisabled = state === 'disabled';
  const isEnabled = state === 'enabled';

  return (
    <button
      className={`button button_${variant} ${isLoading ? 'loading' : ''} ${
        focused && isEnabled ? 'focused' : ''
      }`}
      disabled={isDisabled}
      aria-busy={isLoading}
      aria-disabled={isDisabled}
      aria-live={isLoading ? 'assertive' : 'off'}
      aria-label="Кнопка"
      data-testid="button"
      {...props}
      style={{ padding, borderRadius, ...props.style }}
    >
      <div className="contentGroup" style={{ gap }}>
        {isLoading && (
          <div
            className="spinner"
            aria-hidden="true"
            style={{ width: loaderSize, height: loaderSize }}
          />
        )}
        <div className="label">{label}</div>
        {counter && (
          <Counter
            quantity="1" // some value props mb
            stroke={false}
            size={16}
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
            }}
          />
        )}
      </div>
    </button>
  );
};
