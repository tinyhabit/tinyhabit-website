import React from 'react';
import { Product } from '@/types';
import { ProductCard } from '../ui/Card';
import styles from './productgrid.module.css';

interface ProductGridProps {
  products: Product[];
  columns?: 3 | 4;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products, columns = 4 }) => {
  const gridClass = columns === 3 ? styles.gridThreeCol : styles.grid;

  return (
    <div className={gridClass}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
