import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { JsonLd } from '@/components/seo/JsonLd';
import styles from '@/styles/pages/productdetail.module.css';

export const metadata: Metadata = {
  title: 'Notebook | Just Me & My Mind | TinyHabit',
  description: 'Khoảng không gian riêng tư cho những ý tưởng và suy ngẫm ngẫu hứng cùng TinyHabit.',
  alternates: { canonical: '/just-me-and-my-mind-tinyhabit' }
};

export default function JustMeAndMyMindPage() {
  const instagramLink = "https://www.instagram.com/tiny.habitnotebook?text=" + encodeURIComponent("Xin chào TinyHabit, mình muốn được tư vấn và đặt hàng Notebook Just Me & My Mind");

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Notebook | Just Me & My Mind',
    image: ['/images/just-me-and-my-mind-cover.png'],
    description: 'Cuốn sổ nhỏ dành cho những khoảnh khắc một mình, tự do bộc lộ suy nghĩ và ý tưởng.',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'VND',
      price: 48000,
      availability: 'https://schema.org/InStock'
    }
  };

  return (
    <div className={styles.detailWrapper}>
      <JsonLd data={productJsonLd} />

      {/* TOP HEADER */}
      <header className={styles.header}>
        <span className={styles.categoryBadge}>SẢN PHẨM BỔ TRỢ</span>
        <h1 className={styles.pageTitle}>JUST ME & MY MIND</h1>
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
            src="/images/just-me-and-my-mind-cover.png"
            alt="Notebook Just Me & My Mind TinyHabit"
            width={1200}
            height={1200}
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
          <h2 className={styles.quoteHeadline}>Khoảng không gian riêng tư cho những suy ngẫm ngẫu hứng</h2>
          <p>
            Notebook <strong>Just Me & My Mind</strong> tôn vinh những giây phút tĩnh lặng cá nhân. Dù là một ý tưởng lóe lên giữa ngày hay những dòng cảm xúc muộn đêm, cuốn sổ này luôn sẵn sàng lắng nghe mà không có bất kỳ rào cản nào.
          </p>
        </div>

        {/* SPECS */}
        <div className={styles.infoSection}>
          <h2 className={styles.infoSectionTitle}>Thông số kỹ thuật:</h2>
          <ul className={styles.infoList}>
            <li><strong>Kích thước:</strong> A6 (10.5 x 14.8 cm)</li>
            <li><strong>Số trang:</strong> 100 trang</li>
            <li><strong>Chất liệu giấy:</strong> Giấy kem kẻ ngang Ruled 90gsm mượt mà</li>
            <li><strong>Bìa:</strong> Bìa mỹ thuật ép kim sang trọng</li>
            <li><strong>Giá bán:</strong> 48.000đ</li>
          </ul>
        </div>

        {/* HIGHLIGHTS */}
        <div className={styles.infoSection}>
          <h2 className={styles.infoSectionTitle}>Ưu điểm nổi bật:</h2>
          <ul className={styles.featureBulletList}>
            <li>Thiết kế trẻ trung, hiện đại với bìa minh họa giàu cảm xúc.</li>
            <li>Giấy viết êm tay, không gây mỏi mắt hay lem nét mực.</li>
            <li>Gọn nhẹ dễ dàng mang theo trong túi xách mọi lúc mọi nơi.</li>
          </ul>
        </div>

        {/* FOOTER BRAND NOTE */}
        <div className={styles.brandFooterNote}>
          <p className={styles.brandTagline}>TinyHabit - Nurturing Habits, Growing Dreams</p>
          <p className={styles.brandSubtext}>Nơi cất giữ những ý tưởng sáng tạo và khoảnh khắc lắng đọng của riêng bạn.</p>
        </div>
      </div>
    </div>
  );
}
