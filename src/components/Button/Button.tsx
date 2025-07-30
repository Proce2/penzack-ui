import React from 'react';
import clsx from 'clsx';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  loading?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  loading = false,
  disabled,
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={clsx(
        'pz-button',
        `pz-button--${variant}`,
        `pz-button--${size}`,
        {
          'pz-button--full-width': fullWidth,
          'pz-button--loading': loading,
        },
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <span className="pz-button__spinner" />}
      <span className={clsx('pz-button__content', { 'pz-button__content--loading': loading })}>
        {children}
      </span>
    </button>
  );
};
