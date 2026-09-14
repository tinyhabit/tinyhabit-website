import React from 'react';
import type { Metadata } from 'next';
import { ProductGrid } from '@/components/product/ProductGrid';
import { getProductsByCategory } from '@/data/products';
import { JsonLd } from '@/components/seo/JsonLd';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Bộ Sưu Tập Sản Phẩm Planner & Journaling',
  description: 'Khám phá trọn bộ Planner, Sổ tay Nhật ký và Sản phẩm bổ trợ xây dựng thói quen tại TinyHabit. Hỗ trợ đặt hàng qua Instagram.',
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

export default function CollectionPage() {
  const planners = getProductsByCategory('planner');
  const journaling = getProductsByCategory('journaling');
  const accessories = getProductsByCategory('bo-tro');

  return (
    <div className="container" style={{ paddingBottom: 'var(--space-2xl)' }}>
      <JsonLd data={breadcrumbJsonLd} />

      <header style={{ textAlign: 'center', padding: 'var(--space-xl) 0 var(--space-md)' }}>
        <span style={{ fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--color-brand)' }}>
          TINYHABIT CATALOG
        </span>
        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginTop: '8px' }}>
          Bộ Sưu Tập Sản Phẩm
        </h1>
        <p style={{ color: 'var(--color-muted)', fontSize: '1.05rem', maxWidth: '600px', margin: '12px auto 0' }}>
          Các công cụ được thiết kế tỉ mỉ giúp bạn quản lý năng lượng, lắng nghe cảm xúc và gieo mầm thói quen mới mỗi ngày.
        </p>
      </header>

      {/* CATEGORY 1: PLANNER */}
      <section id="planner" style={{ marginBottom: 'var(--space-2xl)', scrollMarginTop: '100px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--space-md)', borderBottom: '2px solid var(--color-border)', paddingBottom: '12px' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Sổ tay Planner (giá bán lẻ)</h2>
          <span style={{ fontSize: '0.9rem', color: 'var(--color-muted)' }}>{planners.length} sản phẩm</span>
        </div>
        <ProductGrid products={planners} columns={4} />
      </section>

      {/* CATEGORY 2: JOURNALING */}
      <section id="journaling" style={{ marginBottom: 'var(--space-2xl)', scrollMarginTop: '100px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--space-md)', borderBottom: '2px solid var(--color-border)', paddingBottom: '12px' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Sổ tay viết Nhật Ký (giá bán lẻ)</h2>
          <span style={{ fontSize: '0.9rem', color: 'var(--color-muted)' }}>{journaling.length} sản phẩm</span>
        </div>
        <ProductGrid products={journaling} columns={4} />
      </section>

      {/* MID-PAGE CTA BUTTON */}
      <div style={{ textAlign: 'center', margin: 'var(--space-xl) 0' }}>
        <Button href="https://www.instagram.com/tiny.habitnotebook" external variant="outline" size="md">
          LIÊN HỆ MUA HÀNG 🟢
        </Button>
      </div>

      {/* CATEGORY 3: SẢN PHẨM BỔ TRỢ */}
      <section id="bo-tro" style={{ marginBottom: 'var(--space-2xl)', scrollMarginTop: '100px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--space-md)', borderBottom: '2px solid var(--color-border)', paddingBottom: '12px' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Sản phẩm Bổ trợ (giá bán lẻ)</h2>
          <span style={{ fontSize: '0.9rem', color: 'var(--color-muted)' }}>{accessories.length} sản phẩm</span>
        </div>
        <ProductGrid products={accessories} columns={3} />
      </section>
    </div>
  );
}
