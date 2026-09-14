import React from 'react';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { ProductGrid } from '@/components/product/ProductGrid';
import { getAllProducts } from '@/data/products';
import { JsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Quà Tặng Ý Nghĩa — Nuôi Dưỡng Thói Quen & Cảm Xúc',
  description: 'Gợi ý quà tặng tinh tế và ý nghĩa từ TinyHabit cho người thân, bạn bè nhân dịp sinh nhật, năm mới hay một khởi đầu mới.',
  openGraph: {
    title: 'Quà Tặng Ý Nghĩa | TinyHabit',
    description: 'Món quà trao gửi sự khuyến khích và tình yêu thương dịu dàng.'
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
      name: 'Quà tặng',
      item: 'https://tinyhabit.vn/qua-tang'
    }
  ]
};

export default function GiftPage() {
  const allProducts = getAllProducts();
  const giftIdeas = allProducts.slice(0, 6);

  const cardStyle: React.CSSProperties = {
    background: 'var(--color-card-bg)',
    padding: 'var(--space-lg)',
    borderRadius: 'var(--radius-md)',
    border: '1px solid var(--color-border)'
  };

  const ctaBoxStyle: React.CSSProperties = {
    backgroundColor: 'var(--bg-secondary)',
    borderRadius: 'var(--radius-lg)',
    padding: 'var(--space-2xl) var(--space-md)',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 'var(--space-sm)'
  };

  return (
    <div className="container" style={{ paddingBottom: 'var(--space-2xl)' }}>
      <JsonLd data={breadcrumbJsonLd} />

      <header style={{ textAlign: 'center', padding: 'var(--space-xl) 0 var(--space-lg)' }}>
        <span style={{ fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--color-brand)' }}>
          MEANINGFUL GIFTS
        </span>
        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginTop: '8px' }}>
          Quà Tặng Nuôi Dưỡng & Khuyến Khích
        </h1>
        <p style={{ color: 'var(--color-muted)', fontSize: '1.05rem', maxWidth: '640px', margin: '16px auto 0', lineHeight: '1.6' }}>
          Một món quà không chỉ là một cuốn sổ, mà là lời nhắn nhủ chân thành: &ldquo;Bạn tuyệt vời và mình luôn ủng hộ hành trình của bạn.&rdquo;
        </p>
      </header>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 'var(--space-md)', marginBottom: 'var(--space-2xl)' }}>
        <div style={cardStyle}>
          <span style={{ fontSize: '2rem' }}>🌿</span>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, margin: '12px 0 8px' }}>Khởi Đầu Mới</h3>
          <p style={{ color: 'var(--color-muted)', fontSize: '0.9rem' }}>
            Quà tặng thích hợp cho sinh viên bắt đầu kỳ học mới, người đi làm đổi công việc hay đầu năm mới.
          </p>
        </div>

        <div style={cardStyle}>
          <span style={{ fontSize: '2rem' }}>🌸</span>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, margin: '12px 0 8px' }}>Xoa Dịu & Lắng Nghe</h3>
          <p style={{ color: 'var(--color-muted)', fontSize: '0.9rem' }}>
            Gửi tặng bạn bè đang căng thẳng, cần một khoảng lặng dịu dàng để lắng nghe và giải tỏa cảm xúc.
          </p>
        </div>

        <div style={cardStyle}>
          <span style={{ fontSize: '2rem' }}>✨</span>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, margin: '12px 0 8px' }}>Yêu Thương Bản Thân</h3>
          <p style={{ color: 'var(--color-muted)', fontSize: '0.9rem' }}>
            Món quà tự thưởng cho chính bạn nhân ngày kỷ niệm tiến bộ cá nhân.
          </p>
        </div>
      </section>

      <section style={{ marginBottom: 'var(--space-2xl)' }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 800, textAlign: 'center', marginBottom: 'var(--space-xl)' }}>
          Gợi Ý Quà Tặng Được Yêu Thích
        </h2>
        <ProductGrid products={giftIdeas} columns={3} />
      </section>

      <section style={ctaBoxStyle}>
        <h2 style={{ fontSize: '1.6rem', fontWeight: 800 }}>Bạn muốn gói quà kèm thiệp viết tay?</h2>
        <p style={{ color: 'var(--color-muted)', maxWidth: '560px' }}>
          Team TinyHabit sẵn sàng hỗ trợ bạn viết thiệp lời chúc cá nhân hóa và đóng gói hộp quà chỉn chu trước khi gửi tới người nhận.
        </p>
        <Button href="https://www.instagram.com/tiny.habitnotebook" external variant="primary">
          Nhắn Instagram Tư Vấn Gói Quà
        </Button>
      </section>
    </div>
  );
}
