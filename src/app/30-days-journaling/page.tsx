import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { JsonLd } from '@/components/seo/JsonLd';
import styles from '@/styles/pages/productdetail.module.css';

export const metadata: Metadata = {
  title: 'Nhật ký 30 Days Journaling | TinyHabit',
  description: '30 Ngày lắng nghe chính mình - Giải tỏa tâm trí, thấu hiểu cảm xúc và tạo động lực mỗi ngày.',
  alternates: { canonical: '/30-days-journaling' }
};

export default function Journaling30DaysPage() {
  const instagramLink = "https://www.instagram.com/tiny.habitnotebook?text=" + encodeURIComponent("Xin chào TinyHabit, mình muốn được tư vấn và đặt hàng cuốn Nhật ký 30 Days Journaling");

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Nhật ký 30 Days Journaling',
    image: ['/images/detail/30-days-journaling.png'],
    description: 'Cuốn sổ nhật ký 30 ngày cơ bản giúp bạn làm quen với thói quen viết, phản chiếu và giải tỏa tâm trí.',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'VND',
      price: 35000,
      availability: 'https://schema.org/InStock'
    }
  };

  return (
    <div className={styles.detailWrapper}>
      <JsonLd data={productJsonLd} />

      {/* TOP HEADER */}
      <header className={styles.header}>
        <span className={styles.categoryBadge}>NHẬT KÝ</span>
        <h1 className={styles.pageTitle}>30 DAYS JOURNALING</h1>
        <div className={styles.topCta}>
          <Button href={instagramLink} external variant="outline" size="md">
            ĐẶT HÀNG 🟢
          </Button>
        </div>
      </header>

      {/* PRODUCT IMAGE GALLERY / SHOWCASE STACK */}
      <div className={styles.fullStackGallery}>
        <div className={styles.imageCard}>
          <Image
            src="/images/detail/30-days-journaling.png"
            alt="Chi tiết nội dung sổ Nhật ký 30 Days Journaling"
            width={1200}
            height={2400}
            priority
            className={styles.responsiveImg}
          />
        </div>
      </div>

      {/* CONTENT BODY */}
      <div className={styles.contentBody}>
        {/* MID CTA BUTTON */}
        <div className={styles.midCtaWrapper}>
          <Button href={instagramLink} external variant="outline" size="lg">
            ĐẶT HÀNG 🟢
          </Button>
        </div>

        {/* INTRO BLOCK */}
        <div className={styles.introBlock}>
          <h2 className={styles.quoteHeadline}>30 Ngày lắng nghe chính mình!</h2>
          <p>
            Giữa những ngày bận rộn với công việc, đôi khi chỉ cần dừng lại 5 phút vào cuối ngày để trò chuyện với bản thân mình cũng là một cách giúp bạn giải tỏa căng thẳng.
          </p>
          <p style={{ marginTop: '0.5rem' }}>
            Với 30 câu hỏi, bạn có thể linh hoạt chọn và viết ra tâm sự của chính mình:
          </p>
          <ul className={styles.featureBulletList} style={{ marginTop: '0.75rem' }}>
            <li><strong>Viết để lắng nghe chính mình</strong></li>
            <li><strong>Viết để hiểu mình đang cần gì</strong></li>
            <li><strong>Viết để bản thân có thêm động lực tiến về phía mục tiêu</strong></li>
            <li><strong>Viết để thương mình giữa những ngày chênh vênh</strong></li>
          </ul>
        </div>

        {/* SPECS & POLICY */}
        <div className={styles.infoSection}>
          <h2 className={styles.infoSectionTitle}>Thông tin & Ưu đãi:</h2>
          <ul className={styles.infoList}>
            <li><strong>Giá bán:</strong> 35.000đ</li>
            <li><strong>Vận chuyển:</strong> Ship đồng giá 15k toàn quốc. Freeship cho đơn hàng từ 200k trở lên</li>
            <li><strong>Quà tặng đi kèm:</strong> Ở mỗi đơn hàng TinyHabit đều dành tặng bạn thêm 1 bút, để bạn có thể viết mỗi khi cần!</li>
          </ul>
        </div>

        {/* FOOTER BRAND NOTE */}
        <div className={styles.brandFooterNote}>
          <p>
            TinyHabit mong rằng, với cuốn sổ nhỏ xinh ý nghĩa này sẽ trở thành 1 người bạn nhỏ của bạn! Cùng bạn đi tới mục tiêu cùng bạn vượt qua những ngày mệt mỏi!
          </p>
          <p style={{ marginTop: '0.5rem' }}>
            Đặc biệt hơn hết, cuốn sổ nhật ký này khi sử dụng cùng với sổ tay Planner mỗi buổi tối sẽ giúp bạn định hình rõ mục tiêu và sống có chủ đích hơn mỗi ngày.
          </p>
          <p className={styles.brandTagline} style={{ marginTop: '0.75rem' }}>
            Cảm ơn bạn đã chọn đồng hành với TinyHabit! Mãi keoooo....
          </p>
        </div>
      </div>
    </div>
  );
}
