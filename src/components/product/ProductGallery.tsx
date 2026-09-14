'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './productgallery.module.css';

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({ images, productName }) => {
  const [selectedIdx, setSelectedIdx] = useState(0);

  if (!images || images.length === 0) return null;

  return (
    <div className={styles.wrapper}>
      <div className={styles.mainImageWrapper}>
        <Image
          src={images[selectedIdx]}
          alt={`${productName} - Ảnh ${selectedIdx + 1}`}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className={styles.mainImage}
        />
      </div>

      {images.length > 1 && (
        <div className={styles.thumbs}>
          {images.map((img, idx) => (
            <button
              key={idx}
              className={`${styles.thumbBtn} ${idx === selectedIdx ? styles.activeThumb : ''}`}
              onClick={() => setSelectedIdx(idx)}
              aria-label={`Xem ảnh ${idx + 1}`}
            >
              <Image
                src={img}
                alt={`${productName} thumbnail ${idx + 1}`}
                fill
                sizes="72px"
                className={styles.thumbImage}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
