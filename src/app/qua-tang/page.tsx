import React from 'react';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { ProductGrid } from '@/components/product/ProductGrid';
import { getAllProducts } from '@/data/products';
import { JsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Quà Tặng Ý Nghĩa — Nuôi Dưỡng Thói Quen & Cảm Xúc',
  description: 'Gợi ý quà tặng tinh tế và ý nghĩa từ TinyHabit cho người thân, bạn bè nhân dịp sinh nhật, năm mới hay một khởi đầu mới.',
  alternates: { canonical: '/qua-tang' },
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

import styles from '@/styles/pages/gift.module.css';

export default function GiftPage() {
  const allProducts = getAllProducts();
  const giftIdeas = allProducts.slice(0, 6);

  return (
    <div className={`container ${styles.container}`}>
      <JsonLd data={breadcrumbJsonLd} />

      <header className={styles.header}>
        <span className={styles.subtitle}>
          MEANINGFUL GIFTS
        </span>
        <h1 className={styles.title}>
          Quà Tặng Nuôi Dưỡng & Khuyến Khích
        </h1>
        <p className={styles.description}>
          Một món quà không chỉ là một cuốn sổ, mà là lời nhắn nhủ chân thành: &ldquo;Bạn tuyệt vời và mình luôn ủng hộ hành trình của bạn.&rdquo;
        </p>
      </header>

      <section className={styles.gridSection}>
        <div className={styles.card}>
          <span className={styles.cardIcon} role="img" aria-label="Chiếc lá">🌿</span>
          <h3 className={styles.cardTitle}>Khởi Đầu Mới</h3>
          <p className={styles.cardDesc}>
            Quà tặng thích hợp cho sinh viên bắt đầu kỳ học mới, người đi làm đổi công việc hay đầu năm mới.
          </p>
        </div>

        <div className={styles.card}>
          <span className={styles.cardIcon} role="img" aria-label="Hoa anh đào">🌸</span>
          <h3 className={styles.cardTitle}>Xoa Dịu & Lắng Nghe</h3>
          <p className={styles.cardDesc}>
            Gửi tặng bạn bè đang căng thẳng, cần một khoảng lặng dịu dàng để lắng nghe và giải tỏa cảm xúc.
          </p>
        </div>

        <div className={styles.card}>
          <span className={styles.cardIcon} role="img" aria-label="Lấp lánh">✨</span>
          <h3 className={styles.cardTitle}>Yêu Thương Bản Thân</h3>
          <p className={styles.cardDesc}>
            Món quà tự thưởng cho chính bạn nhân ngày kỷ niệm tiến bộ cá nhân.
          </p>
        </div>
      </section>

      <section className={styles.productSection}>
        <h2 className={styles.productTitle}>
          Gợi Ý Quà Tặng Được Yêu Thích
        </h2>
        <ProductGrid products={giftIdeas} columns={3} />
      </section>

      <section className={styles.ctaBox}>
        <h2 className={styles.ctaTitle}>Bạn muốn gói quà kèm thiệp viết tay?</h2>
        <p className={styles.ctaDesc}>
          Team TinyHabit sẵn sàng hỗ trợ bạn viết thiệp lời chúc cá nhân hóa và đóng gói hộp quà chỉn chu trước khi gửi tới người nhận.
        </p>
        <Button href="https://www.instagram.com/tiny.habitnotebook" external variant="primary">
          Nhắn Instagram Tư Vấn Gói Quà
        </Button>
      </section>
    </div>
  );
}
