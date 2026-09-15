import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { JsonLd } from '@/components/seo/JsonLd';
import { FaqAccordion } from '@/components/common/FaqAccordion';
import styles from '@/styles/pages/membership.module.css';

export const metadata: Metadata = {
  title: 'Membership — Chương Trình Đồng Hành Trọn Năm | TinyHabit',
  description: 'Gói Membership với 4 Sổ Planner Đồng Hành Trọn Vẹn & Tiết Kiệm 260k. Nhận 4 cuốn sổ Planner theo các BST mới nhất trong năm cùng nhiều đặc quyền.',
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

export default function MembershipPage() {
  return (
    <div className={`container ${styles.pageWrapper}`}>
      <JsonLd data={breadcrumbJsonLd} />

      {/* COVER IMAGE */}
      <div className={styles.coverContainer}>
        <Image
          src="/images/anh-bia-membership.avif"
          alt="TinyHabit Membership Banner"
          fill
          priority
          sizes="(max-width: 1200px) 100vw, 1200px"
          className={styles.coverImage}
        />
      </div>

      {/* HERO HEADER */}
      <header className={styles.heroHeader}>
        <h1 className={styles.heroTitle}>
          Gói Membership với 4 Sổ Planner Đồng Hành Trọn Vẹn &amp; Tiết Kiệm 260k
        </h1>
        <p className={styles.heroDesc}>
          Với lộ trình 4 Journey này, TinyHabit giúp bạn <strong>tiết kiệm hơn 260k</strong> (mua trọn gói rẻ hơn lẻ), tiết kiệm thời gian (có sẵn hệ thống hướng dẫn), và quan trọng nhất là không lãng phí tâm sức vì luôn có người đồng hành trong mọi giai đoạn. Cứ khi bạn dùng hết 1 sổ, <strong>TinyHabit sẽ gửi bạn 1 quyển Planner của bộ sưu tập mới</strong>. Chỉ với <strong>1.500 VNĐ/ngày</strong>, bạn không chỉ sở hữu những cuốn sổ xinh xắn mà còn sở hữu một phiên bản mới kỷ luật và tự do hơn.
        </p>
      </header>

      {/* 4 JOURNEYS */}
      <section className={styles.journeysList}>
        {/* JOURNEY 1 */}
        <div className={styles.journeyCardWrapper}>
          <div className={styles.journeyBadge}>JOURNEY ĐẦU TIÊN</div>
          <div className={styles.journeyCard}>
            <div className={styles.journeyLeft}>
              <div>
                <h2 className={styles.journeyTitle}>GIEO MẦM THÓI QUEN</h2>
                <div className={styles.priceWrapper}>
                  <span className={styles.priceText}>528.000 VNĐ</span>
                </div>
                <p className={styles.journeyLeftDesc}>
                  Nhận ngay thẻ Tiny Membership và 1 sổ Planner đầu tiên, trải nghiệm 90 Days làm chủ năng lượng - hiệu suất - sự bình yên trong bạn mỗi ngày.
                </p>
              </div>
              <a
                href="https://www.instagram.com/tiny.habitnotebook"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaBtnPill}
              >
                <span>CHỌN THÊM QUÀ ĐẶC BIỆT</span>
                <span className={styles.btnDot} />
              </a>
            </div>

            <div className={styles.journeyRight}>
              <div className={styles.featureList}>
                <div className={styles.featureItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Tiny Meeting hướng dẫn trực tiếp (Online) để thiết lập mục tiêu thực tế, giúp bạn lên kế hoạch và dễ duy trì đều đặn.</span>
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Leaflet A4 Hướng dẫn cách đặt mục tiêu, action plan cụ thể để dễ dàng duy trì</span>
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>1 Món quà tặng ĐẶC BIỆT (tự chọn)</span>
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Miễn phí vận chuyển đơn hàng</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* JOURNEY 2 */}
        <div className={styles.journeyCardWrapper}>
          <div className={styles.journeyBadge}>JOURNEY 2</div>
          <div className={styles.journeyCard}>
            <div className={styles.journeyLeft}>
              <div>
                <h2 className={styles.journeyTitle}>NUÔI DƯỠNG SỰ NHẤT QUÁN</h2>
                <div className={styles.priceWrapper}>
                  <span className={styles.priceText}>0 VNĐ</span>
                  <span className={styles.lifetimeBadge}>Bảo lưu trọn đời</span>
                </div>
                <p className={styles.journeyLeftDesc}>
                  Nhận cuốn sổ thứ 2 (BST Mới). Tiếp tục hành trình với giao diện mới từ bộ sưu tập theo mùa, giúp duy trì cảm hứng viết mỗi ngày.
                </p>
              </div>
              <a
                href="https://www.instagram.com/tiny.habitnotebook"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.ctaBtnPill} ${styles.solid}`}
              >
                <span>CHỌN THÊM QUÀ ĐẶC BIỆT</span>
                <span className={styles.btnDot} />
              </a>
            </div>

            <div className={styles.journeyRight}>
              <div className={styles.featureList}>
                <div className={styles.featureItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Tham gia miễn phí buổi Workshop (Online/Offline) về các chủ đề liên quan đến cách nâng cao hiệu suất, phát triển bản thân, nâng cao giá trị nội tại.</span>
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>1 Món quà tặng ĐẶC BIỆT (tự chọn)</span>
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Bút Gel nước viết không lo lem</span>
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Miễn phí vận chuyển đơn hàng lần 2</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* JOURNEY 3 */}
        <div className={styles.journeyCardWrapper}>
          <div className={styles.journeyBadge}>JOURNEY 3</div>
          <div className={styles.journeyCard}>
            <div className={styles.journeyLeft}>
              <div>
                <h2 className={styles.journeyTitle}>LÀM CHỦ NĂNG LƯỢNG - THỜI GIAN</h2>
                <div className={styles.priceWrapper}>
                  <span className={styles.priceText}>0 VNĐ</span>
                  <span className={styles.lifetimeBadge}>Bảo lưu trọn đời</span>
                </div>
                <p className={styles.journeyLeftDesc}>
                  Nhận cuốn sổ thứ 3 (BST Mới) làm chủ năng lượng - Sống có chủ đích những ngày tiếp theo.
                </p>
              </div>
              <a
                href="https://www.instagram.com/tiny.habitnotebook"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaBtnPill}
              >
                <span>CHỌN THÊM QUÀ ĐẶC BIỆT</span>
                <span className={styles.btnDot} />
              </a>
            </div>

            <div className={styles.journeyRight}>
              <div className={styles.featureList}>
                <div className={styles.featureItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>File Google Sheet Habit Tracker: Hệ thống quản lý thói quen tự động, hiện đại</span>
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Tham gia miễn phí các hoạt động bổ trợ về sức khỏe thể chất và tinh thần (Yoga, Pilates, Badminton) phối hợp cùng cộng đồng đối tác của TinyHabit.</span>
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>1 Món quà tặng ĐẶC BIỆT (tự chọn)</span>
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Miễn phí vận chuyển đơn hàng lần 3</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* JOURNEY 4 */}
        <div className={styles.journeyCardWrapper}>
          <div className={styles.journeyBadge}>JOURNEY 4</div>
          <div className={styles.journeyCard}>
            <div className={styles.journeyLeft}>
              <div>
                <h2 className={styles.journeyTitle}>CÙNG NHAU LAN TỎA GIÁ TRỊ</h2>
                <div className={styles.priceWrapper}>
                  <span className={styles.priceText}>0 VNĐ</span>
                  <span className={styles.lifetimeBadge}>Bảo lưu trọn đời</span>
                </div>
                <p className={styles.journeyLeftDesc}>
                  Nhận sổ thứ 4, tiếp tục hành trình chinh phục 90 Days cuối năm với thật nhiều năng lượng tích cực, được sẻ chia và hỗ trợ từ phía cộng đồng TinyHabit để cùng nhau về đích.
                </p>
              </div>
              <a
                href="https://www.instagram.com/tiny.habitnotebook"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.ctaBtnPill} ${styles.solid}`}
              >
                <span>CHỌN THÊM QUÀ ĐẶC BIỆT</span>
                <span className={styles.btnDot} />
              </a>
            </div>

            <div className={styles.journeyRight}>
              <div className={styles.featureList}>
                <div className={styles.featureItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Nhận ưu đãi giảm 20% khi gia hạn thẻ cho năm tiếp theo hoặc mua quà tặng cho người thân.</span>
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>1 Món quà tặng ĐẶC BIỆT (tự chọn)</span>
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Huy hiệu &quot;Consistency King/Queen&quot;: Biểu tượng của sự kiên trì và kỷ luật</span>
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Miễn phí vận chuyển đơn hàng lần 4</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONSULTATION BUTTON & ARROWS */}
      <div className={styles.consultSection}>
        <a
          href="https://www.instagram.com/tiny.habitnotebook"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.consultBtn}
        >
          <span>LIÊN HỆ TƯ VẤN</span>
          <span className={styles.greenDot} />
        </a>
      </div>

      {/* WORKSHOP CARDS SECTION */}
      <section className={styles.workshopSection}>
        <div className={styles.workshopImageCard}>
          <Image
            src="/images/anh-bia-membership.avif"
            alt="Workshop Kết Nối & Chia Sẻ"
            fill
            sizes="(max-width: 900px) 100vw, 33vw"
            style={{ objectFit: 'cover' }}
          />
        </div>

        <div className={styles.workshopTextCard}>
          <span className={styles.workshopTag}>TinyHabit Support /</span>
          <h2 className={styles.workshopTitle}>Workshop Kết Nối &amp; Chia Sẻ</h2>
          <p className={styles.workshopDesc}>
            Dù bạn đang mong muốn tối ưu hóa hiệu suất, làm chủ kỹ năng Deep Work hay đơn giản là muốn làm chủ 24 giờ mỗi ngày một cách trọn vẹn, chúng mình tin rằng sự thay đổi bền vững nhất luôn bắt đầu từ cảm giác bình yên khi cùng nhau phát triển.
          </p>
        </div>

        <div className={styles.workshopImageCard}>
          <Image
            src="/images/detail/journey-90-days.png"
            alt="Workshop Online Deep Work"
            fill
            sizes="(max-width: 900px) 100vw, 33vw"
            style={{ objectFit: 'cover' }}
          />
        </div>
      </section>

      {/* FAQS SECTION */}
      <FaqAccordion />
    </div>
  );
}
