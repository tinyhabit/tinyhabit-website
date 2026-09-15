import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { JsonLd } from '@/components/seo/JsonLd';
import styles from '@/styles/pages/productdetail.module.css';

export const metadata: Metadata = {
  title: 'JOURNEY 90 DAYS - Sổ Tay Planner 90 Ngày | TinyHabit',
  description: 'Hành trình 90 ngày định hình thói quen và kiến tạo cuộc sống có chủ đích theo triết lý Gentle Discipline.',
  alternates: { canonical: '/journey-90-days' }
};

export default function Journey90DaysPage() {
  const instagramLink = "https://www.instagram.com/tiny.habitnotebook?text=" + encodeURIComponent("Xin chào TinyHabit, mình muốn được tư vấn và đặt hàng cuốn JOURNEY 90 DAYS");

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'JOURNEY 90 DAYS',
    image: ['/images/journey-90-days.webp'],
    description: 'Cuốn sổ tay thiết kế theo nguyên lý Gentle Discipline, giúp bạn lập kế hoạch 90 ngày thực tế, theo dõi năng lượng và nuôi dưỡng sự thay đổi bền vững.',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'VND',
      price: 188000,
      availability: 'https://schema.org/InStock'
    }
  };

  return (
    <div className={styles.detailWrapper}>
      <JsonLd data={productJsonLd} />

      {/* TOP HEADER */}
      <header className={styles.header}>
        <span className={styles.categoryBadge}>SỔ TAY</span>
        <h1 className={styles.pageTitle}>JOURNEY 90 DAYS</h1>
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
            src="/images/detail/journey-90-days.png"
            alt="Chi tiết bên trong sổ tay JOURNEY 90 Days"
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

        {/* INTRO PARAGRAPH */}
        <div className={styles.introBlock}>
          <p>
            Mỗi hành trình phát triển đều bắt đầu từ một hạt mầm nhỏ. Khi bạn gieo xuống một thói quen tốt, chăm sóc nó mỗi ngày, nó sẽ lớn lên cùng bạn một cách nhẹ nhàng nhưng bền vững. TinyHabit tin rằng sự thay đổi không cần phải ồn ào. Nó chỉ cần được nuôi dưỡng mỗi ngày, để rồi tự nhiên vươn mình, đón lấy ánh sáng và trở thành phiên bản rực rỡ nhất của chính bạn.
          </p>
        </div>

        {/* PRODUCT SPECS */}
        <div className={styles.infoSection}>
          <h2 className={styles.infoSectionTitle}>Thông tin sản phẩm:</h2>
          <ul className={styles.infoList}>
            <li><strong>Phiên bản:</strong> Xanh - Be - Đỏ nâu</li>
            <li><strong>Giá bán:</strong> 188.000đ</li>
            <li><strong>Freeship:</strong> Freeship toàn quốc</li>
          </ul>

          <ul className={styles.infoList} style={{ marginTop: '1rem' }}>
            <li><strong>Kích thước:</strong> A5 – nhỏ gọn, dễ mang theo.</li>
            <li><strong>Số trang:</strong> 120 trang.</li>
            <li><strong>Màu sắc:</strong> Be</li>
            <li><strong>Giấy:</strong> 100gsm – viết mượt, không thấm mực.</li>
            <li><strong>Bìa:</strong> Cứng cáp, thiết kế tối giản, không thấm nước</li>
          </ul>

          <p className={styles.highlightText}>
            Khâu chỉ thủ công – bền đẹp, dở mở phẳng khi viết.<br />
            Đóng gói: Hộp giấy vuông/túi giấy đáng yêu và thiệp quà tặng dễ thương (có thể tái sử dụng)
          </p>
        </div>

        {/* INSIDE PLANNER */}
        <div className={styles.infoSection}>
          <h2 className={styles.infoSectionTitle}>Bên trong planner:</h2>
          <ul className={styles.featureBulletList}>
            <li><strong>Trang Name</strong> – không gian viết tên riêng của bạn.</li>
            <li><strong>Trang Hướng dẫn sử dụng</strong> – giúp bạn hiểu cách dùng planner để không bị “quá tải” hay áp lực khi lên kế hoạch hằng ngày.</li>
            <li><strong>Trang Overall tháng</strong> – tổng quan tháng, giúp bạn hình dung tổng thể.</li>
            <li><strong>3 tháng planner</strong> – dành riêng cho hành trình gần 100 ngày “sống rõ” của bạn.</li>
            <li><strong>Trang ghi chú tự do</strong> – khoảng thở để bạn viết ra bất cứ điều gì bạn muốn.</li>
          </ul>
        </div>

        {/* TARGET AUDIENCE */}
        <div className={styles.infoSection}>
          <h2 className={styles.infoSectionTitle}>Dành cho ai?</h2>
          <ul className={styles.featureBulletList}>
            <li>Những ai muốn bắt đầu quản lý thời gian làm việc, nghỉ ngơi để trở nên năng suất hơn mỗi ngày</li>
            <li>Người yêu thích sự đơn giản, nhẹ nhàng.</li>
            <li>Người mong muốn lắng nghe bản thân, sắp xếp lại cuộc sống một cách chậm rãi.</li>
            <li>Bạn không cần phải hoàn hảo. Chỉ cần sống rõ, từng ngày.</li>
          </ul>
        </div>

        {/* FOOTER BRAND SLOGAN */}
        <div className={styles.brandFooterNote}>
          <p className={styles.brandTagline}>TinyHabit - Nurturing Habits, Growing Dreams</p>
          <p className={styles.brandSubtext}>Không chỉ là một cuốn sổ, mà là người bạn đồng hành trên hành trình phát triển bản thân.</p>
        </div>
      </div>
    </div>
  );
}
