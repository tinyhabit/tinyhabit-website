'use client';

import React, { useState, useId } from 'react';
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
  const contentId = useId();

  return (
    <div className={`${styles.accordion} ${isOpen ? styles.open : ''}`}>
      <button
        className={styles.trigger}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={contentId}
      >
        <span>{title}</span>
        <span className={styles.icon}>↓</span>
      </button>
      <div id={contentId} className={styles.content}>
        <div>{children}</div>
      </div>
    </div>
  );
};
