'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Button } from '../ui/Button';
import { MobileNav } from './MobileNav';
import styles from './header.module.css';

const NAV_ITEMS = [
  { label: 'Trang chủ', href: '/' },
  { label: 'Bộ sưu tập', href: '/bo-suu-tap' },
  { label: 'Membership', href: '/membership' },
  { label: 'Quà Tặng', href: '/qua-tang' },
  { label: 'Về TinyHabit', href: '/ve-tinyhabit' },
  { label: 'Liên hệ', href: '/lien-he' }
];

export const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className={styles.headerWrapper}>
      <nav className={styles.navbar}>
        <Link href="/" className={styles.brand}>
          <div className={styles.brandLogo} style={{ overflow: 'hidden', position: 'relative', width: '36px', height: '36px', borderRadius: '50%' }}>
            <Image
              src="/images/logo.jpg"
              alt="TinyHabit Logo"
              fill
              sizes="36px"
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
          <span>TinyHabit</span>
        </Link>

        <ul className={styles.navLinks}>
          {NAV_ITEMS.map((item) => {
            const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`${styles.navLink} ${isActive ? styles.active : ''}`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className={styles.actions}>
          <Button
            href="https://www.instagram.com/tiny.habitnotebook"
            external
            variant="outline"
            size="sm"
            className={styles.desktopCta}
            style={{ borderRadius: 'var(--radius-pill)', gap: '8px' }}
          >
            <span>LIÊN HỆ MUA HÀNG</span>
            <span className={styles.statusDot} />
          </Button>

          <button
            className={styles.mobileToggle}
            onClick={() => setMobileOpen(true)}
            aria-label="Open mobile menu"
          >
            ☰
          </button>
        </div>
      </nav>

      <MobileNav
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        items={NAV_ITEMS}
      />
    </header>
  );
};
