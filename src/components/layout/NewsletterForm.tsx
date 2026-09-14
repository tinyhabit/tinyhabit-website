'use client';

import React, { useState } from 'react';
import styles from './newsletterform.module.css';

export const NewsletterForm: React.FC = () => {
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
    <>
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
    </>
  );
};
