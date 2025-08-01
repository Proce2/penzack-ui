import React from 'react';
import clsx from 'clsx';
import './StatusLabel.css';

export interface StatusLabelProps {
  status: 'active' | 'in-progress' | 'inactive' | string;
}

export const StatusLabel: React.FC<StatusLabelProps> = ({ status }) => {
  return (
    <span className={clsx('pz-status-label', `pz-status-label--${status.replace(/\s+/g, '-').toLowerCase()}`)}>
      {status === 'in-progress' ? 'In Progress' : status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};
