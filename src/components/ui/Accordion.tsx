'use client';

import React, { useState } from 'react';
import styles from './accordion.module.css';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export const Accordion: React.FC<AccordionProps> = ({
  title,
  children,
  defaultOpen = false
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`${styles.accordion} ${isOpen ? styles.open : ''}`}>
      <button
        className={styles.trigger}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <span className={styles.icon}>↓</span>
      </button>
      <div className={styles.content}>
        <div>{children}</div>
      </div>
    </div>
  );
};
