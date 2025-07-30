import React from 'react';
import clsx from 'clsx';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
  variant?: 'outlined' | 'filled';
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  fullWidth = false,
  variant = 'outlined',
  className,
  id,
  ...props
}) => {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={clsx('pz-input-container', { 'pz-input-container--full-width': fullWidth })}>
      {label && (
        <label htmlFor={inputId} className="pz-input-label">
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={clsx(
          'pz-input',
          `pz-input--${variant}`,
          {
            'pz-input--error': !!error,
          },
          className
        )}
        {...props}
      />
      {(error || helperText) && (
        <div className={clsx('pz-input-text', { 'pz-input-text--error': !!error })}>
          {error || helperText}
        </div>
      )}
    </div>
  );
};
