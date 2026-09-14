import React from 'react';
import type { Metadata } from 'next';
import { ProductGrid } from '@/components/product/ProductGrid';
import { getProductsByCategory } from '@/data/products';
import { JsonLd } from '@/components/seo/JsonLd';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Bộ Sưu Tập Sản Phẩm Planner & Journaling',
  description: 'Khám phá trọn bộ Planner, Sổ tay Nhật ký và Sản phẩm bổ trợ xây dựng thói quen tại TinyHabit. Hỗ trợ đặt hàng qua Instagram.',
  alternates: { canonical: '/bo-suu-tap' },
  openGraph: {
    title: 'Bộ Sưu Tập Sản Phẩm | TinyHabit',
    description: 'Trọn bộ công cụ Planner & Journaling nuôi dưỡng thói quen dịu dàng.'
  }
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Trang chủ',
      item: 'https://tinyhabit.vn'
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Bộ sưu tập',
      item: 'https://tinyhabit.vn/bo-suu-tap'
    }
  ]
};

import styles from '@/styles/pages/collection.module.css';

export default function CollectionPage() {
  const planners = getProductsByCategory('planner');
  const journaling = getProductsByCategory('journaling');
  const accessories = getProductsByCategory('bo-tro');

  return (
    <div className={`container ${styles.container}`}>
      <JsonLd data={breadcrumbJsonLd} />

      <header className={styles.header}>
        <span className={styles.subtitle}>
          TINYHABIT CATALOG
        </span>
        <h1 className={styles.title}>
          Bộ Sưu Tập Sản Phẩm
        </h1>
        <p className={styles.description}>
          Các công cụ được thiết kế tỉ mỉ giúp bạn quản lý năng lượng, lắng nghe cảm xúc và gieo mầm thói quen mới mỗi ngày.
        </p>
      </header>

      {/* CATEGORY 1: PLANNER */}
      <section id="planner" className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Sổ tay Planner (giá bán lẻ)</h2>
          <span className={styles.sectionCount}>{planners.length} sản phẩm</span>
        </div>
        <ProductGrid products={planners} columns={4} />
      </section>

      {/* CATEGORY 2: JOURNALING */}
      <section id="journaling" className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Sổ tay viết Nhật Ký (giá bán lẻ)</h2>
          <span className={styles.sectionCount}>{journaling.length} sản phẩm</span>
        </div>
        <ProductGrid products={journaling} columns={4} />
      </section>

      {/* MID-PAGE CTA BUTTON */}
      <div className={styles.ctaWrapper}>
        <Button href="https://www.instagram.com/tiny.habitnotebook" external variant="outline" size="md">
          LIÊN HỆ MUA HÀNG 🟢
        </Button>
      </div>

      {/* CATEGORY 3: SẢN PHẨM BỔ TRỢ */}
      <section id="bo-tro" className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Sản phẩm Bổ trợ (giá bán lẻ)</h2>
          <span className={styles.sectionCount}>{accessories.length} sản phẩm</span>
        </div>
        <ProductGrid products={accessories} columns={3} />
      </section>
    </div>
  );
}
