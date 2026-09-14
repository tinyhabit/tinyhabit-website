import React from 'react';
import { Button } from '../ui/Button';
import styles from './stickycta.module.css';

interface StickyMobileCTAProps {
  productName?: string;
}

export const StickyMobileCTA: React.FC<StickyMobileCTAProps> = ({ productName }) => {
  const ctaMessage = productName
    ? `Tư vấn SP: ${productName}`
    : 'Tư vấn sản phẩm';

  const instagramUrl = productName
    ? `https://www.instagram.com/tiny.habitnotebook?text=${encodeURIComponent(`Xin chào TinyHabit, mình muốn tư vấn về ${productName}`)}`
    : 'https://www.instagram.com/tiny.habitnotebook';

  return (
    <div className={styles.bar}>
      <div className={styles.text}>
        <span className={styles.title}>TinyHabit Consultation</span>
        <span className={styles.subtitle}>{ctaMessage}</span>
      </div>
      <Button
        href={instagramUrl}
        external
        variant="primary"
        size="sm"
      >
        Nhắn Instagram
      </Button>
    </div>
  );
};
