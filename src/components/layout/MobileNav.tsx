'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/Button';
import styles from './mobilenav.module.css';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  items: { label: string; href: string }[];
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose, items }) => {
  return (
    <>
      <div
        className={`${styles.overlay} ${isOpen ? styles.openOverlay : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className={`${styles.drawer} ${isOpen ? styles.openDrawer : ''}`}
        role="dialog"
        aria-modal="true"
      >
        <div className={styles.header}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ position: 'relative', width: '32px', height: '32px', borderRadius: '50%', overflow: 'hidden' }}>
              <Image src="/images/logo.jpg" alt="TinyHabit Logo" fill sizes="32px" style={{ objectFit: 'cover' }} />
            </div>
            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, color: 'var(--color-brand-dark)' }}>
              TinyHabit
            </span>
          </div>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close navigation">
            ✕
          </button>
        </div>

        <ul className={styles.menu}>
          {items.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className={styles.link} onClick={onClose}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.footer}>
          <Button
            href="https://www.instagram.com/tiny.habitnotebook"
            external
            variant="primary"
            fullWidth
          >
            LIÊN HỆ MUA HÀNG
          </Button>
        </div>
      </div>
    </>
  );
};
