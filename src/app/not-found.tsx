import React from 'react';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="container" style={{
      padding: 'var(--space-3xl) var(--space-md)',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--space-md)'
    }}>
      <span style={{ fontSize: '3rem' }}>🌱</span>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 800 }}>404 — Trang Không Tồn Tại</h1>
      <p style={{ color: 'var(--color-muted)', maxWidth: '500px' }}>
        Trang bạn đang tìm kiếm có thể đã được di chuyển hoặc không còn khả dụng trên hệ thống TinyHabit.
      </p>
      <div style={{ display: 'flex', gap: '12px' }}>
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
