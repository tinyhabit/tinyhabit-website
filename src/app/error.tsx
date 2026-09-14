'use client';

import React, { useEffect } from 'react';
import { Button } from '@/components/ui/Button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60vh',
      textAlign: 'center',
      padding: 'var(--space-xl)',
      gap: 'var(--space-lg)'
    }}>
      <h2 style={{ fontSize: '2rem', color: 'var(--color-brand-dark)' }}>
        🌱 Ôi, có chút trục trặc nhỏ!
      </h2>
      <p style={{ color: 'var(--color-muted)', maxWidth: '400px' }}>
        Đừng lo lắng, đôi khi mọi thứ không đi theo kế hoạch. Hãy thử lại xem sao nhé.
      </p>
      <Button onClick={() => reset()} variant="primary">
        Thử lại ngay
      </Button>
    </div>
  );
}
