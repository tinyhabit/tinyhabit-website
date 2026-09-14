import React from 'react';
import { ProductSpecs } from '@/types';
import styles from './productspectable.module.css';

interface ProductSpecTableProps {
  specs: ProductSpecs;
}

export const ProductSpecTable: React.FC<ProductSpecTableProps> = ({ specs }) => {
  return (
    <table className={styles.table}>
      <tbody>
        <tr className={styles.row}>
          <td className={styles.label}>Kích thước</td>
          <td className={styles.value}>{specs.dimensions}</td>
        </tr>
        <tr className={styles.row}>
          <td className={styles.label}>Số trang</td>
          <td className={styles.value}>{specs.pages} trang</td>
        </tr>
        <tr className={styles.row}>
          <td className={styles.label}>Chất liệu giấy</td>
          <td className={styles.value}>{specs.paperType}</td>
        </tr>
        <tr className={styles.row}>
          <td className={styles.label}>Chất liệu bìa</td>
          <td className={styles.value}>{specs.coverMaterial}</td>
        </tr>
        {specs.contents && (
          <tr className={styles.row}>
            <td className={styles.label}>Nội dung sổ</td>
            <td className={styles.value}>{specs.contents}</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};
