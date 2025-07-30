import React from 'react';
import clsx from 'clsx';

export interface MetricCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  trend?: {
    value: number;
    direction: 'up' | 'down';
    period?: string;
  };
  variant?: 'default' | 'success' | 'warning' | 'danger';
  className?: string;
  onClick?: () => void;
  loading?: boolean;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  icon,
  trend,
  variant = 'default',
  className,
  onClick,
  loading = false,
}) => {
  const formatValue = (val: string | number) => {
    if (typeof val === 'number') {
      // Format large numbers with commas
      return val.toLocaleString();
    }
    return val;
  };

  const CardWrapper = onClick ? 'button' : 'div';

  return (
    <CardWrapper
      className={clsx(
        'pz-metric-card',
        `pz-metric-card--${variant}`,
        {
          'pz-metric-card--clickable': !!onClick,
          'pz-metric-card--loading': loading,
        },
        className
      )}
      onClick={onClick}
      type={onClick ? 'button' : undefined}
    >
      <div className="pz-metric-card__header">
        {icon && (
          <div className="pz-metric-card__icon">
            {icon}
          </div>
        )}
        <div className="pz-metric-card__content">
          <div className="pz-metric-card__title">{title}</div>
          <div className="pz-metric-card__value">
            {loading ? (
              <div className="pz-metric-card__skeleton" />
            ) : (
              formatValue(value)
            )}
          </div>
        </div>
      </div>
      
      {trend && !loading && (
        <div className="pz-metric-card__trend">
          <span className={clsx(
            'pz-metric-card__trend-value',
            `pz-metric-card__trend-value--${trend.direction}`
          )}>
            {trend.direction === 'up' ? '↗' : '↘'} {Math.abs(trend.value)}%
          </span>
          {trend.period && (
            <span className="pz-metric-card__trend-period">{trend.period}</span>
          )}
        </div>
      )}
    </CardWrapper>
  );
};
