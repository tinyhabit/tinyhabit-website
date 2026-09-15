import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { JsonLd } from '@/components/seo/JsonLd';
import styles from '@/styles/pages/productdetail.module.css';

export const metadata: Metadata = {
  title: 'Kit Gieo Mầm Thói Quen | TinyHabit',
  description: 'Bộ công cụ nhỏ trực quan giúp gieo trồng và nuôi dưỡng thói quen mới mỗi ngày cùng TinyHabit.',
  alternates: { canonical: '/kit-gieo-mam-thoi-quen-tinyhabit' }
};

export default function KitGieoMamThoiQuenPage() {
  const instagramLink = "https://www.instagram.com/tiny.habitnotebook?text=" + encodeURIComponent("Xin chào TinyHabit, mình muốn được tư vấn và đặt hàng Kit Gieo Mầm Thói Quen");

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Kit Gieo Mầm Thói Quen',
    image: ['/images/kit-gieo-mam-thoi-quen-cover.jpg'],
    description: 'Bộ công cụ nhỏ trực quan giúp gieo trồng và nuôi dưỡng thói quen mới.',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'VND',
      price: 30000,
      availability: 'https://schema.org/InStock'
    }
  };

  return (
    <div className={styles.detailWrapper}>
      <JsonLd data={productJsonLd} />

      {/* TOP HEADER */}
      <header className={styles.header}>
        <span className={styles.categoryBadge}>SẢN PHẨM BỔ TRỢ</span>
        <h1 className={styles.pageTitle}>KIT GIEO MẦM THÓI QUEN</h1>
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
            src="/images/detail/kit-gieo-mam-thoi-quen-tinyhabit.png"
            alt="Chi tiết Kit Gieo Mầm Thói Quen TinyHabit"
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
          <h2 className={styles.quoteHeadline}>🌱 Hạt Giống Thay Đổi Bắt Đầu Từ Đâu?</h2>
          <p>
            &quot;Hãy gieo hạt mầm bạn muốn trồng.<br />
            Tưới chúng bằng cảm xúc.<br />
            Chăm sóc chúng bằng sự tập trung.<br />
            Nuôi dưỡng chúng lớn lên dựa vào sự lặp lại giản đơn mỗi ngày.&quot;
          </p>
          <p style={{ marginTop: '0.75rem' }}>
            Chúng ta không trưởng thành trong một ngày, và giấc mơ không nở hoa chỉ vì ta muốn. Mọi hành trình cần được NUÔI DƯỠNG – từng chút một, mỗi ngày.
          </p>
        </div>

        {/* SPECS BLOCK */}
        <div className={styles.infoSection}>
          <h2 className={styles.infoSectionTitle}>🎁 TRỌN BỘ KIT GIEO MẦM THÓI QUEN BAO GỒM:</h2>
          <ul className={styles.featureBulletList}>
            <li>Chậu và 1 Viên nén hữu cơ</li>
            <li>Hạt Giống ý nghĩa tượng trưng cho sự nảy mầm của thói quen.</li>
            <li>Que ghi thói quen bạn muốn nuôi dưỡng</li>
            <li>Tài liệu Hướng dẫn chi tiết cách Gieo Mầm Thói Quen</li>
          </ul>
          <p className={styles.highlightText} style={{ marginTop: '0.75rem' }}>
            * <em>Lưu ý: TinyHabit có bán số lượng lớn & chiết khấu kèm túi đựng Kit (bạn nhắn riêng để mình hỗ trợ tư vấn nha)</em>
          </p>
        </div>

        {/* PRICE & FREESHIP */}
        <div className={styles.infoSection}>
          <h2 className={styles.infoSectionTitle}>Giá bán & Chính sách:</h2>
          <ul className={styles.infoList}>
            <li><strong>Giá bán lẻ:</strong> 30.000đ/kit</li>
            <li><strong>Chính sách Freeship:</strong> Freeship cho đơn hàng từ 200k</li>
            <li><em>(Liên hệ tư vấn khi mua số lượng từ 10 Kit trở lên để nhận ưu đãi)</em></li>
          </ul>
        </div>

        {/* BENEFITS */}
        <div className={styles.infoSection}>
          <h2 className={styles.infoSectionTitle}>KIT GIEO MẦM TINYHABIT chính là công cụ giúp bạn:</h2>
          <ul className={styles.featureBulletList}>
            <li><strong>TỐI ƯU HÓA phương pháp TINYHABIT:</strong> (Thói quen nhỏ) – Bí quyết được khoa học chứng minh để xây dựng những thói quen tích cực mà không cần động lực khổng lồ.</li>
            <li><strong>HỮU HÌNH HÓA sự kiên trì:</strong> Mỗi lần bạn hoàn thành một thói quen nhỏ, bạn đang tưới nước cho cây của mình lớn lên.</li>
            <li><strong>TẠO ĐỘNG LỰC:</strong> Cảm giác hoàn thành mỗi ngày, dù là việc nhỏ nhất.</li>
          </ul>
        </div>

        {/* FOOTER BRAND NOTE */}
        <div className={styles.brandFooterNote}>
          <p>
            <strong>Với KIT GIEO MẦM THÓI QUEN, phát triển bản thân không phải là chạy nhanh.</strong><br />
            Mà là: CHĂM CHÚT những điều nhỏ, nhưng BỀN VỮNG như gieo một hạt mầm. LẶP LẠI hành động đơn giản mỗi ngày với SỰ KIÊN NHẪN và YÊU THƯƠNG.
          </p>
          <p className={styles.brandTagline} style={{ marginTop: '0.75rem' }}>
            &quot;KIT GIEO MẦM là một nhắc nhở hữu hình rằng: sự kiên trì sẽ nảy mầm, dù bắt đầu từ những điều rất nhỏ.&quot;
          </p>
        </div>
      </div>
    </div>
  );
}
