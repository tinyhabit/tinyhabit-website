import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { JsonLd } from '@/components/seo/JsonLd';
import styles from '@/styles/pages/productdetail.module.css';

export const metadata: Metadata = {
  title: 'DOPAMINE DETOX - 30 Days | TinyHabit',
  description: '30 ngày ngắt kết nối để kết nối sâu sắc hơn với chính mình. Sổ tay tái lập sự tập trung và quản trị năng lượng dịu dàng.',
  alternates: { canonical: '/30-days-dopamine-detox' }
};

export default function DopamineDetoxPage() {
  const instagramLink = "https://www.instagram.com/tiny.habitnotebook?text=" + encodeURIComponent("Xin chào TinyHabit, mình muốn được tư vấn và đặt hàng cuốn DOPAMINE DETOX 30 Days");

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'DOPAMINE DETOX 30 Days',
    image: ['/images/dopamine-detox-30-days.webp'],
    description: 'Cuốn sổ thiết kế riêng cho hành trình 30 ngày giảm bớt kích thích mạng xã hội, lấy lại sự tập trung và làm chủ sự chú ý.',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'VND',
      price: 158000,
      availability: 'https://schema.org/InStock'
    }
  };

  return (
    <div className={styles.detailWrapper}>
      <JsonLd data={productJsonLd} />

      {/* TOP HEADER */}
      <header className={styles.header}>
        <span className={styles.categoryBadge}>BỘ SƯU TẬP</span>
        <h1 className={styles.pageTitle}>DOPAMINE DETOX</h1>
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
            src="/images/detail/30-days-dopamine-detox.png"
            alt="Chi tiết nội dung bên trong Dopamine Detox 30 Days"
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
          <h2 className={styles.quoteHeadline}>Disconnect to RECONNECT</h2>
          <p>
            Trong một thế giới luôn đòi hỏi sự chú ý của bạn, việc làm chủ thói quen sử dụng công nghệ là chìa khóa để giảm bớt căng thẳng, tăng khả năng phục hồi và tìm thấy sự rõ ràng trong tâm hồn. Sức mạnh tinh thần thực sự không đến từ việc tránh thế giới ảo, mà là học cách ngắt kết nối đúng lúc để kết nối sâu sắc hơn với chính mình.
          </p>
        </div>

        {/* PRODUCT SPECS */}
        <div className={styles.infoSection}>
          <h2 className={styles.infoSectionTitle}>THÔNG TIN SẢN PHẨM</h2>
          <ul className={styles.infoList}>
            <li><strong>Phiên bản:</strong> Blue và Forest Green</li>
            <li><strong>Kích thước:</strong> A5 - 14.8 x 21 cm</li>
            <li><strong>Số lượng:</strong> 120 trang.</li>
            <li><strong>Chất liệu giấy:</strong> 100gsm chống thấm nhòe, phù hợp cho nhiều loại bút màu.</li>
            <li><strong>In ấn:</strong> Bìa màu cán màng mờ chống thấm nước.</li>
            <li><strong>Giá bán:</strong> 158.000đ</li>
            <li><strong>Vận chuyển:</strong> Ship đồng giá 15k toàn quốc. Freeship cho đơn hàng từ 200k trở lên.</li>
            <li><strong>Chính sách:</strong> Đổi trả trong 30 ngày</li>
          </ul>
        </div>

        {/* DETAILED STRUCTURE */}
        <div className={styles.infoSection}>
          <h2 className={styles.infoSectionTitle}>CHI TIẾT CẤU TRÚC BÊN TRONG (120 Trang)</h2>
          <p className={styles.introSubtext}>TinyHabit thiết kế cuốn sổ này như một &quot;người bạn đồng hành&quot; lắng nghe tâm hồn bạn:</p>
          
          <ul className={styles.featureBulletList}>
            <li><strong>Dopamine Menu (In màu rực rỡ):</strong> Hệ thống &quot;thực đơn&quot; thay thế cảm giác lướt điện thoại bằng những hoạt động chậm mà sâu.</li>
            <li><strong>Dopamine Factory (Layout hàng ngày):</strong> Giúp bạn quản trị năng lượng thay vì chỉ quản lý thời gian. Đặc biệt là phần <em>The Rewards</em> – nơi bạn dùng bút tặng kèm để tô điểm cho sự nỗ lực của chính mình.</li>
            <li><strong>The Mirror Page:</strong> Nhìn lại sự thay đổi của bản thân một cách chân thật.</li>
            <li><strong>Dot Grid Pages:</strong> 60 trang chấm tròn để bạn thỏa sức Journaling, vẽ mindmap hoặc viết những dòng tâm tình.</li>
          </ul>
        </div>

        {/* FOOTER CALL TO ACTION NOTE */}
        <div className={styles.brandFooterNote}>
          <p className={styles.brandTagline}>
            Đừng để Dopamine ảo lấy đi sự rạng rỡ thật sự của bạn. Hãy chọn cho mình một phiên bản màu sắc yêu thích và bắt đầu hành trình “Ngắt kết nối để kết nối” ngay hôm nay!
          </p>
        </div>
      </div>
    </div>
  );
}
