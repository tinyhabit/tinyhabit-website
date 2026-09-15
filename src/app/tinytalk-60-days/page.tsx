import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { JsonLd } from '@/components/seo/JsonLd';
import styles from '@/styles/pages/productdetail.module.css';

export const metadata: Metadata = {
  title: 'Nhật ký 60 Days TinyTalk | TinyHabit',
  description: 'Cuộc trò chuyện nhỏ nhẹ nhàng với chính mình mỗi ngày. Sổ tay nhật ký 60 ngày lắng nghe cảm xúc và chữa lành bản thân.',
  alternates: { canonical: '/tinytalk-60-days' }
};

export default function TinyTalk60DaysPage() {
  const instagramLink = "https://www.instagram.com/tiny.habitnotebook?text=" + encodeURIComponent("Xin chào TinyHabit, mình muốn được tư vấn và đặt hàng cuốn Nhật ký 60 Days TinyTalk");

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Nhật ký 60 Days TinyTalk',
    image: ['/images/tinytalk-60-days.webp'],
    description: 'Sổ tay viết nhật ký theo gợi ý ngắn, giúp bạn giải tỏa cảm xúc, lắng nghe tâm trí và trân trọng những điều bình dị.',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'VND',
      price: 58000,
      availability: 'https://schema.org/InStock'
    }
  };

  return (
    <div className={styles.detailWrapper}>
      <JsonLd data={productJsonLd} />

      {/* TOP HEADER */}
      <header className={styles.header}>
        <span className={styles.categoryBadge}>NHẬT KÝ</span>
        <h1 className={styles.pageTitle}>60 DAYS TINYTALK</h1>
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
            src="/images/detail/tinytalk-60-days.png"
            alt="Chi tiết nội dung sổ Nhật ký 60 Days TinyTalk"
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
          <p>
            Hành trình phát triển không bắt đầu từ việc bạn trở nên hoàn hảo, mà từ khoảnh khắc bạn bắt đầu nói với chính mình bằng sự dịu dàng. Trong 60 ngày này bạn sẽ cùng TinyTalk trải qua những cung bậc cảm xúc mà vốn dĩ những công việc thường nhật đã lấy đi những khoảng lặng của bạn hằng ngày!
          </p>
        </div>

        {/* PRODUCT SPECS */}
        <div className={styles.infoSection}>
          <h2 className={styles.infoSectionTitle}>Thông tin sản phẩm:</h2>
          <ul className={styles.infoList}>
            <li><strong>Kích thước:</strong> A6</li>
            <li><strong>Số trang:</strong> 32 trang (60 Days)</li>
            <li><strong>Độ dày:</strong> 100 gsm vừa đủ lưu giữ những cảm xúc của bạn</li>
            <li><strong>Giá bán:</strong> 58.000đ</li>
            <li><strong>Vận chuyển:</strong> Ship đồng giá 15k toàn quốc</li>
          </ul>
        </div>

        {/* THREE PILLARS */}
        <div className={styles.infoSection}>
          <h2 className={styles.infoSectionTitle}>Hành trình 3 bước cùng TinyTalk:</h2>
          <ul className={styles.featureBulletList}>
            <li>
              <strong>01. SELF-AWARENESS (Lắng nghe – Gọi tên – Thấu hiểu):</strong> Mọi hành trình đều bắt đầu từ bên trong. Khi bạn dừng lại để lắng nghe cảm xúc, bạn sẽ tìm thấy những tín hiệu chân thật nhất về điều mình cần.
            </li>
            <li>
              <strong>02. SELF-KINDNESS (Dịu dàng – Chữa lành – Chấp nhận):</strong> Tự yêu thương không phải là sự yếu mềm - mà là cách bạn học cách nắm lấy đôi tay chính mình, kể cả khi không ai khác làm điều đó.
            </li>
            <li>
              <strong>03. GROWTH (Nuôi dưỡng – Phát triển – Tiến lên):</strong> Từng bước nhỏ mỗi ngày chính là hạt mầm của sự lớn lên. Không cần vội vàng - chỉ cần bạn tiếp tục đi, bằng nhịp điệu của chính mình.
            </li>
          </ul>
        </div>

        {/* FOOTER REFLECTION NOTE */}
        <div className={styles.brandFooterNote}>
          <p className={styles.introSubtext} style={{ marginBottom: '0.5rem' }}>
            Bất kể khi nào bạn thấy chông vênh hay ngồi xuống chọn 1 trang và viết lại cảm xúc của chính mình. Viết để reset tâm trí, để cơ thể thấy nhẹ nhàng hơn và tiếp tục vững bước trên hành trình phát triển phía trước.
          </p>
          <p className={styles.brandTagline}>
            Lắng nghe bản thân, chữa lành, và tìm ra điều mình thật sự mong muốn - để hành trình không chỉ hiệu quả, mà còn bình yên!
          </p>
        </div>
      </div>
    </div>
  );
}
