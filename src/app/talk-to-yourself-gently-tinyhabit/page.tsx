import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { JsonLd } from '@/components/seo/JsonLd';
import styles from '@/styles/pages/productdetail.module.css';

export const metadata: Metadata = {
  title: 'Notebook | Talk To Yourself Gently | TinyHabit',
  description: 'Sổ tay lò xo A6 bỏ túi nhắc nhở sự bao dung và luôn dịu dàng với chính mình.',
  alternates: { canonical: '/talk-to-yourself-gently-tinyhabit' }
};

export default function TalkToYourselfGentlyPage() {
  const instagramLink = "https://www.instagram.com/tiny.habitnotebook?text=" + encodeURIComponent("Xin chào TinyHabit, mình muốn được tư vấn và đặt hàng Notebook Talk To Yourself Gently");

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Notebook | Talk To Yourself Gently',
    image: ['/images/talk-to-yourself-gently-cover.png'],
    description: 'Sổ tay nhắc nhở bạn luôn dịu dàng với chính mình.',
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
        <h1 className={styles.pageTitle}>TALK TO YOURSELF GENTLY</h1>
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
            src="/images/talk-to-yourself-gently-cover.png"
            alt="Notebook Talk To Yourself Gently TinyHabit"
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
          <h2 className={styles.quoteHeadline}>Sổ tay nhắc nhở bạn luôn dịu dàng với chính mình</h2>
          <p>
            Notebook <strong>Talk To Yourself Gently</strong> là người bạn đồng hành nhỏ nhắn cho mọi ghi chép ngẫu hứng. Bìa sổ in thông điệp ấm áp, nhắc nhở bạn ngừng tự phán xét và luôn dành cho bản thân những lời nói dịu dàng nhất.
          </p>
        </div>

        {/* SPECS */}
        <div className={styles.infoSection}>
          <h2 className={styles.infoSectionTitle}>Thông số kỹ thuật:</h2>
          <ul className={styles.infoList}>
            <li><strong>Kích thước:</strong> A6 (10.5 x 14.8 cm)</li>
            <li><strong>Số trang:</strong> 100 trang</li>
            <li><strong>Chất liệu giấy:</strong> Giấy ruột chấm Dot grid kem 90gsm chống lóa</li>
            <li><strong>Bìa:</strong> Bìa bồi cứng gáy lò xo mở 360 độ</li>
            <li><strong>Giá bán:</strong> 48.000đ</li>
          </ul>
        </div>

        {/* HIGHLIGHTS */}
        <div className={styles.infoSection}>
          <h2 className={styles.infoSectionTitle}>Ưu điểm nổi bật:</h2>
          <ul className={styles.featureBulletList}>
            <li>Lò xo giở mở 360 độ cực kỳ tiện lợi khi viết ngẫu hứng.</li>
            <li>Ruột Dot Grid đa năng cho cả viết ghi chú, vẽ phác thảo hay ghi to-do list.</li>
            <li>Thông điệp tích cực tiếp thêm năng lượng và giải tỏa áp lực mỗi khi mở sổ.</li>
          </ul>
        </div>

        {/* FOOTER BRAND NOTE */}
        <div className={styles.brandFooterNote}>
          <p className={styles.brandTagline}>TinyHabit - Nurturing Habits, Growing Dreams</p>
          <p className={styles.brandSubtext}>Người bạn đồng hành nhỏ nhắn cho những phút giây bình yên cá nhân.</p>
        </div>
      </div>
    </div>
  );
}
