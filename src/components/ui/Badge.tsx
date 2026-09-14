import React from 'react';
import styles from './badge.module.css';

interface BadgeProps {
  variant?: 'brand' | 'accent' | 'muted';
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({ variant = 'brand', children }) => {
  return <span className={`${styles.badge} ${styles[variant]}`}>{children}</span>;
};
