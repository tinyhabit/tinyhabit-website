import React from 'react';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { JsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Membership — Chương Trình Đồng Hành Trọn Năm',
  description: 'Gói Membership TinyHabit mang đến 4 cuốn Planner trọn năm, tham gia Workshop chuyên đề và cộng đồng phát triển bản thân bền vững.',
  alternates: { canonical: '/membership' },
  openGraph: {
    title: 'TinyHabit Membership | Nurturing Habits',
    description: 'Chương trình đồng hành trọn năm cho hành trình phát triển bản thân.'
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
      name: 'Membership',
      item: 'https://tinyhabit.vn/membership'
    }
  ]
};

import styles from '@/styles/pages/membership.module.css';

export default function MembershipPage() {
  return (
    <div className={`container ${styles.container}`}>
      <JsonLd data={breadcrumbJsonLd} />

      <header className={styles.header}>
        <span className={styles.subtitle}>
          ECOSYSTEM MEMBER
        </span>
        <h1 className={styles.title}>
          TinyHabit Membership
        </h1>
        <p className={styles.description}>
          Không chỉ là mua sổ tay, đây là lời cam kết đồng hành cùng bạn suốt 365 ngày nuôi dưỡng thói quen và kiến tạo cuộc sống có chủ đích.
        </p>
      </header>

      {/* PRICING & HIGHLIGHT BANNER */}
      <section className={styles.banner}>
        <span className={styles.bannerLabel}>
          Gói Đồng Hành Trọn Năm
        </span>
        <div className={styles.priceContainer}>
          <span className={styles.price}>
            528.000đ
          </span>
          <span className={styles.priceDuration}>
            / 12 tháng đồng hành
          </span>
        </div>
        <p className={styles.bannerDesc}>
          Tiết kiệm hơn 30% so với mua lẻ từng sản phẩm và nhận trọn vẹn đặc quyền thành viên.
        </p>
        <Button href="https://www.instagram.com/tiny.habitnotebook" external variant="primary" size="lg">
          Đăng ký Membership qua Instagram
        </Button>
      </section>

      {/* BENEFITS GRID */}
      <section className={styles.benefitsSection}>
        <h2 className={styles.benefitsTitle}>
          Đặc Quyền Thành Viên TinyHabit
        </h2>

        <div className={styles.benefitsGrid}>
          <div className={styles.benefitCard}>
            <span className={styles.benefitIcon} role="img" aria-label="Cuốn sách">📖</span>
            <h3 className={styles.benefitCardTitle}>4 Bộ Planner Trọn Năm</h3>
            <p className={styles.benefitCardDesc}>
              Nhận đủ 4 cuốn Planner cho 4 quý trong năm (JOURNEY, Dopamine Detox, Inner Power...) giao tận tay mỗi mùa.
            </p>
          </div>

          <div className={styles.benefitCard}>
            <span className={styles.benefitIcon} role="img" aria-label="Mũ tốt nghiệp">🎓</span>
            <h3 className={styles.benefitCardTitle}>Workshops Chuyên Đề</h3>
            <p className={styles.benefitCardDesc}>
              Quyền tham gia miễn phí các buổi Workshop trực tuyến về Quản lý năng lượng, Deep Work và Reframing Mindset.
            </p>
          </div>

          <div className={styles.benefitCard}>
            <span className={styles.benefitIcon} role="img" aria-label="Cốc cà phê">☕</span>
            <h3 className={styles.benefitCardTitle}>Tiny Meeting Hàng Tháng</h3>
            <p className={styles.benefitCardDesc}>
              Buổi tĩnh lặng và phản chiếu online cùng cộng đồng TinyHabit mỗi cuối tháng để chia sẻ tiến trình dịu dàng.
            </p>
          </div>

          <div className={styles.benefitCard}>
            <span className={styles.benefitIcon} role="img" aria-label="Hộp quà">🎁</span>
            <h3 className={styles.benefitCardTitle}>Seasonal Gift & Ưu Đãi</h3>
            <p className={styles.benefitCardDesc}>
              Nhận bộ Kit quà tặng độc quyền mỗi mùa và ưu đãi 15% cho tất cả đơn hàng bổ sung trong năm.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
