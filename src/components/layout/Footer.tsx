'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './footer.module.css';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.topGrid}>
          <div className={styles.brandCol}>
            <Link href="/" className={styles.brandLogo}>
              <div style={{ position: 'relative', width: '40px', height: '40px', borderRadius: '50%', overflow: 'hidden' }}>
                <Image
                  src="/images/logo.jpg"
                  alt="TinyHabit Logo"
                  fill
                  sizes="40px"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <span>tiny habit</span>
            </Link>
            <ul className={styles.linksNav}>
              <li><Link href="/ve-tinyhabit" className={styles.linkItem}>Về TinyHabit</Link></li>
              <li><Link href="/bo-suu-tap" className={styles.linkItem}>Bộ sưu tập</Link></li>
              <li><Link href="/membership" className={styles.linkItem}>Membership</Link></li>
              <li><Link href="/qua-tang" className={styles.linkItem}>Quà Tặng</Link></li>
              <li><Link href="/lien-he" className={styles.linkItem}>Liên hệ</Link></li>
            </ul>

            <div style={{ marginTop: '8px', fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.9)' }}>
              📞 Hotline: <a href="tel:0349338608" style={{ color: '#ffffff', fontWeight: 600, textDecoration: 'underline' }}>0349 338 608</a>
            </div>
          </div>

          <div className={styles.newsletterCol}>
            <h3 className={styles.newsletterTitle}>Đăng ký nhận bài Blog kiến thức từ TinyHabit</h3>
            <p className={styles.newsletterDesc}>
              Mong rằng những bài viết được đúc kết trên chính trải nghiệm - học tập của TinyHabit sẽ hữu ích với bạn!
            </p>
            {subscribed ? (
              <p style={{ color: '#EBF0E6', fontWeight: 600, marginTop: '8px' }}>
                ✓ Cảm ơn bạn đã đăng ký nhận bản tin của TinyHabit!
              </p>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <input
                  type="email"
                  placeholder="name@email.com"
                  className={styles.input}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className={styles.submitBtn}>
                  Subscribe
                </button>
              </form>
            )}
            <div className={styles.membersStack}>
              <div className={styles.avatars}>
                <div className={styles.avatar}>🌱</div>
                <div className={styles.avatar}>✨</div>
                <div className={styles.avatar}>☕</div>
                <div className={styles.avatar}>🌸</div>
              </div>
              <span>801+ Happy members</span>
            </div>
          </div>
        </div>

        <div className={styles.bottomRow}>
          <div className={styles.socialIcons}>
            <a href="https://www.instagram.com/tiny.habitnotebook" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram">
              IG
            </a>
            <a href="https://www.facebook.com/tiny.habitnotebook" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Facebook">
              FB
            </a>
            <a href="https://shopee.vn/tinyhabit" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Shopee">
              SP
            </a>
            <a href="https://threads.net" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Threads">
              TH
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="TikTok">
              TK
            </a>
          </div>

          <p className={styles.tagline}>NURTURING HABITS - GROWING DREAMS</p>

          <p className={styles.copyright}>© TinyHabit 2026. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
