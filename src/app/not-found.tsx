import React from 'react';
import { Button } from '@/components/ui/Button';

import styles from '@/styles/pages/notfound.module.css';

export default function NotFound() {
  return (
    <div className={`container ${styles.container}`}>
      <span className={styles.icon} role="img" aria-label="Mầm cây">🌱</span>
      <h1 className={styles.title}>404 — Trang Không Tồn Tại</h1>
      <p className={styles.description}>
        Trang bạn đang tìm kiếm có thể đã được di chuyển hoặc không còn khả dụng trên hệ thống TinyHabit.
      </p>
      <div className={styles.buttons}>
        <Button href="/" variant="primary">
          Về Trang Chủ
        </Button>
        <Button href="/bo-suu-tap" variant="outline">
          Xem Bộ Sưu Tập
        </Button>
      </div>
    </div>
  );
}
