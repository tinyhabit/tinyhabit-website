import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { JsonLd } from '@/components/seo/JsonLd';
import { FaqAccordion } from '@/components/common/FaqAccordion';
import styles from '@/styles/pages/about.module.css';

export const metadata: Metadata = {
  title: 'Về TinyHabit — Câu Chuyện Thương Hiệu & Triết Lý',
  description: 'Khám phá hành trình hình thành TinyHabit, thương hiệu đồng hành phát triển bản thân từ những thói quen nhỏ dịu dàng.',
  alternates: { canonical: '/ve-tinyhabit' },
  openGraph: {
    title: 'Câu Chuyện TinyHabit | Gentle Discipline',
    description: 'Chúng mình tin rằng sự thay đổi bền vững bắt đầu từ những thói quen nhỏ và sự bao dung với chính mình.'
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
      name: 'Về TinyHabit',
      item: 'https://tinyhabit.vn/ve-tinyhabit'
    }
  ]
};

export default function AboutPage() {
  return (
    <div className={`container ${styles.pageWrapper}`}>
      <JsonLd data={breadcrumbJsonLd} />

      {/* TOP HEADER */}
      <section className={styles.topSection}>
        <h1 className={styles.mainTitle}>
          Nuturing Habits, Growing Dreams
        </h1>
        <Link href="/bo-suu-tap" className={styles.exploreBtn}>
          <span>KHÁM PHÁ SẢN PHẨM</span>
          <span className={styles.dot} />
        </Link>
      </section>

      <p className={styles.introDesc}>
        Mọi hành trình vạn dặm đều bắt đầu từ một bước chân nhỏ. Với TinyHabit, bước chân ấy bắt đầu từ những trải nghiệm thực tế trên con đường phát triển sự nghiệp của một cô gái tuổi 28 – chính là <strong>Mình</strong>, giữa những bộn bề lo toan và những trăn trở về giá trị nội tại của bản thân.
      </p>

      {/* STORY SECTION */}
      <section>
        <h2 className={styles.storyTitle}>Hành trình từ những &quot;Chiến thắng nhỏ&quot; đầu tiên</h2>
        <p className={styles.paragraph}>
          TinyHabit không ra đời từ một ý tưởng kinh doanh xa vời, mà nảy mầm từ những ngày mình kiệt sức vì áp lực công việc và cuộc sống. Mình từng là một Planner trong ngành Marketing, luôn quay cuồng với những kế hoạch hoành tráng cho khách hàng nhưng lại bỏ quên kế hoạch cho chính cuộc đời mình.
        </p>
        <p className={styles.paragraph}>
          Bước ngoặt đến từ một lần mình tình cờ nghe được Podcast: <strong>&quot;Hãy lên danh sách những chiến thắng nhỏ cho ngày mai&quot;</strong>.
        </p>

        {/* YOUTUBE EMBED */}
        <div className={styles.videoContainer}>
          <iframe
            src="https://www.youtube.com/embed/P_9DkCB1c-Y"
            title="TinyHabit Story Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className={styles.videoIframe}
          />
        </div>

        {/* TWO CALLOUT BOXES */}
        <div className={styles.calloutGrid}>
          <div className={styles.calloutBox}>
            <p>
              Mình bắt đầu đặt bút ghi lại. Ban đầu chỉ là những dòng chữ nguệch ngoạc về buổi đi tập gym đầu tiên đầy bỡ ngỡ, rồi đến những buổi sáng chạy bộ đón bình minh, hay những lần tự tay nấu một bữa ăn lành mạnh để chăm sóc sức khỏe.
            </p>
          </div>
          <div className={styles.calloutBox}>
            <p>
              Mình nhận ra: Sổ tay không chỉ để ghi chép công việc, nó là bằng chứng vật lý cho sự trưởng thành của tâm hồn. Từ một người cả ngày đối mặt với deadline, tin nhắn thông báo, và mạng xã hội, mình dần trở nên kỷ luật một cách nhẹ nhàng.
            </p>
          </div>
        </div>

        <p className={styles.paragraph}>
          Khi mình học được cách quản lý tốt năng lượng và sự tập trung (Time - Energy - Focus), cuộc sống không còn là một cuộc rượt đuổi. Minh làm việc hiệu suất hơn, bình an hơn, có nhiều thời gian chăm sóc bản thân và gắn bó với gia đình hơn trên hành trình chinh phục sự tự do và phát triển sự nghiệp bền vững.
        </p>

        {/* SUBHEADING 1 */}
        <h3 className={styles.sectionHeading}>Những mắt xích của sự tử tế và lòng biết ơn</h3>
        <p className={styles.paragraph}>
          TinyHabit hôm nay được dệt nên từ những mắt xích tuyệt vời trong cuộc sống mà mình vô cùng trân trọng:
        </p>
        <ul className={styles.bulletList}>
          <li className={styles.bulletItem}>
            <strong>Người Chị Designer</strong>: Người đã cùng mình &quot;hù hù&quot; từ những ngày đầu tiên, tỉ mẩn phác họa từng ý tưởng để biến những trang sổ vô hồn thành người bạn đồng hành đầy cảm hứng như hiện tại.
          </li>
          <li className={styles.bulletItem}>
            <strong>Anh Chị chủ quán 1995</strong>: Nơi gắn liền với ký ức tuổi thơ tại trường Nguyễn Ngọc Thăng. Nhờ sự hỗ trợ của anh chị, TinyHabit đã có cơ hội kết nối với các bạn trẻ tại chính ngôi trường cũ của mình.
          </li>
        </ul>

        <div className={styles.quoteBlock}>
          &quot;Mỗi khi nhìn các bạn trẻ, mình luôn thầm ước: <em>&apos;Giá như ngày ấy mình biết đến việc lập kế hoạch sớm hơn, có lẽ mình đã có thể phát triển nhanh hơn và vững vàng hơn rất nhiều&apos;</em>. Đó cũng chính là động lực để mình cống hiến và chia sẻ những giá trị này đến cộng đồng.&quot;
        </div>

        {/* SUBHEADING 2 */}
        <h3 className={styles.sectionHeading}>TRIẾT LÝ THƯƠNG HIỆU: 3 TRỤ CỘT CỐT LÕI</h3>
        <p className={styles.paragraph}>
          Tại TinyHabit, mình tin rằng sự thành công bền vững phải luôn đi đôi với sự bình an nội tại. Triết lý của chúng mình gói gọn trong 3 trụ cột:
        </p>
        <div className={styles.pillarsList}>
          <div className={styles.pillarItem}>
            <strong>1. Kỷ luật nhẹ nhàng (Gentle Discipline)</strong>: Chúng mình không cổ xúy cho việc &quot;chạy đua&quot; đến kiệt sức. TinyHabit tin vào sức mạnh của những thói quen nhỏ (Tiny Habits) được thực hiện đều đặn với một tâm thế thoải mái.
          </div>
          <div className={styles.pillarItem}>
            <strong>2. Quản trị Năng lượng hơn Thời gian (Energy over Time)</strong>: Thay vì cố nhồi nhét công việc vào 24 giờ, mình hướng dẫn bạn cách hiểu nhịp sinh học của bản thân để làm việc lúc năng suất nhất và nghỉ ngơi lúc cần thiết nhất.
          </div>
          <div className={styles.pillarItem}>
            <strong>3. Sống có chủ đích (Intentional Living)</strong>: Mỗi trang sổ, mỗi buổi <strong>Tiny Meeting</strong> đều hướng bạn đến việc thấu hiểu &quot;giá trị nội tại&quot;. Khi bạn biết rõ điều gì khiến mình bình yên, bạn sẽ không còn bị cuốn theo những xao nhãng bên ngoài.
          </div>
        </div>

        <p className={styles.closingTagline}>
          TinyHabit – Cái neo cho chính bản thân mình mỗi ngày.
        </p>
        <p className={styles.thankYouText}>
          Cảm ơn bạn đã là một mắt xích tuyệt vời trên hành trình lan tỏa năng lượng lành cùng mình!
        </p>
      </section>

      {/* BANNER SECTION: PHÁT TRIỂN BẢN THÂN MỖI NGÀY */}
      <section className={styles.devBanner}>
        <div className={styles.devBannerContent}>
          <h2 className={styles.devBannerTitle}>Phát Triển Bản Thân Mỗi Ngày</h2>
          <p className={styles.devBannerDesc}>
            Khám phá những sản phẩm đồng hành cùng bạn trong giai đoạn phát triển bản thân. Từ việc quản lý - nạp năng lượng, đến cách tận dụng thời gian quý giá 24h mỗi ngày và sự tập trung nhất định vào những công việc quan trọng - nơi sự sáng tạo, trí tuệ, hiệu suất được nâng cao.
          </p>
          <Link href="/bo-suu-tap" className={styles.exploreBtn}>
            <span>KHÁM PHÁ SẢN PHẨM</span>
            <span className={styles.dot} />
          </Link>
        </div>

        {/* GRAPHIC COLLAGE */}
        <div className={styles.graphicCollage}>
          <div className={styles.collageTextRow}>
            <span className={styles.shapeBadge}>
              <Image
                src="/images/detail/kit-gieo-mam-thoi-quen-tinyhabit.png"
                alt="Joyful habit"
                fill
                sizes="70px"
                style={{ objectFit: 'cover' }}
              />
            </span>
            <span>Joyful</span>
          </div>
          <div className={styles.collageTextRow}>
            <span>Balance</span>
            <span className={styles.shapeBadge}>
              <Image
                src="/images/detail/bo-suu-tap.png"
                alt="Balance habit"
                fill
                sizes="70px"
                style={{ objectFit: 'cover' }}
              />
            </span>
          </div>
          <div className={styles.collageTextRow}>
            <span className={styles.shapeBadge}>
              <Image
                src="/images/detail/journey-90-days.png"
                alt="Wellness habit"
                fill
                sizes="70px"
                style={{ objectFit: 'cover' }}
              />
            </span>
            <span>Wellness</span>
          </div>
        </div>
      </section>

      {/* FAQS SECTION */}
      <FaqAccordion />
    </div>
  );
}
