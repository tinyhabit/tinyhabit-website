import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types';
import styles from './card.module.css';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const formattedPrice = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  }).format(product.price).replace(/\s?₫/, 'đ');

  return (
    <Link href={`/${product.slug}`} className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className={styles.image}
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        <div className={styles.overlay}>
          <span className={styles.overlayBtn}>Xem chi tiết</span>
        </div>
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{product.name}</h3>
        <p className={styles.price}>{formattedPrice}</p>
      </div>
    </Link>
  );
};
