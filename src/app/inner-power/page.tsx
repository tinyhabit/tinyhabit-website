import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { JsonLd } from '@/components/seo/JsonLd';
import styles from '@/styles/pages/productdetail.module.css';

export const metadata: Metadata = {
  title: 'INNER POWER - 60 Days | TinyHabit',
  description: '60 ngày đánh thức sức mạnh nội tại và thực hành chăm sóc bản thân toàn diện theo triết lý dịu dàng.',
  alternates: { canonical: '/inner-power' }
};

export default function InnerPowerPage() {
  const instagramLink = "https://www.instagram.com/tiny.habitnotebook?text=" + encodeURIComponent("Xin chào TinyHabit, mình muốn được tư vấn và đặt hàng cuốn INNER POWER 60 Days");

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'INNER POWER 60 Days',
    image: ['/images/inner-power-60-days.webp'],
    description: 'Cuốn sổ tay giúp bạn xây dựng sức mạnh tinh thần, vượt qua sự trì hoãn và tin tưởng vào khả năng tiến bộ của bản thân.',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'VND',
      price: 210000,
      availability: 'https://schema.org/InStock'
    }
  };

  return (
    <div className={styles.detailWrapper}>
      <JsonLd data={productJsonLd} />

      {/* TOP HEADER */}
      <header className={styles.header}>
        <span className={styles.categoryBadge}>SỔ TAY TÍNH NỮ</span>
        <h1 className={styles.pageTitle}>INNER POWER</h1>
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
            src="/images/detail/inner-power.png"
            alt="Chi tiết nội dung bên trong sổ Inner Power"
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
          <p className={styles.greetingText}>
            <strong>Chào bạn! 🌿 Mình rất vui được giới thiệu với bạn cuốn sổ “Inner Power”</strong>
          </p>
          <p>
            Đây là hành trình 60 ngày giúp bạn thực hành chăm sóc bản thân toàn diện và kết nối lại với nguồn năng lượng chân thật của chính mình - một cách thật dịu dàng và không chút áp lực. Hành trình này giống như việc thong thả nuôi dưỡng bộ rễ vững chắc bên trong để đóa hoa tự tin bung nở vậy.
          </p>
        </div>

        {/* HIGHLIGHT POINTS */}
        <div className={styles.infoSection}>
          <h2 className={styles.infoSectionTitle}>Một vài điểm chạm xinh xắn bên trong cuốn sổ:</h2>
          <ul className={styles.featureBulletList}>
            <li>
              <strong>🌺 4 Trụ cột vững chắc:</strong> Những gợi ý nhẹ nhàng để bạn nuôi dưỡng Thân sắc, Trí tuệ, Cảm xúc và Hành động mỗi ngày.
            </li>
            <li>
              <strong>🌺 Nhịp điệu sống tỉnh thức:</strong> Không gian bình yên để gieo ý niệm buổi sáng, chọn ra 3 ưu tiên tập trung trong ngày, và một &quot;Menu Chăm Sóc Bản Thân&quot; hoàn toàn không gò ép.
            </li>
            <li>
              <strong>🌺 Trạm dừng chân nhìn lại:</strong> Những khoảng lặng ở Ngày 20, 40 và 60 để bạn trân trọng và ăn mừng sự trưởng thành tĩnh lặng bên trong chính mình.
            </li>
          </ul>
        </div>

        {/* PRODUCT SPECS */}
        <div className={styles.infoSection}>
          <h2 className={styles.infoSectionTitle}>THÔNG SỐ SẢN PHẨM:</h2>
          <ul className={styles.infoList}>
            <li>• Kích thước A5</li>
            <li>• Độ dày giấy 100 gsm (không lem mực)</li>
            <li>• Số trang: 120</li>
            <li>• Giá gốc sản phẩm: 210.000đ (giá ưu đãi đặc biệt 189.000đ)</li>
          </ul>

          <p className={styles.highlightText} style={{ marginTop: '1rem' }}>
            Sổ có thiết kế tối giản, êm dịu với các họa tiết hoa cỏ mềm mại, tạo ra một không gian an toàn để bạn quay về kết nối với bản thân mỗi ngày.
          </p>
        </div>

        {/* FOOTER BRAND NOTE */}
        <div className={styles.brandFooterNote}>
          <p className={styles.brandTagline}>TinyHabit - Nurturing Habits, Growing Dreams</p>
        </div>
      </div>
    </div>
  );
}
