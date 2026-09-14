import React from 'react';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { JsonLd } from '@/components/seo/JsonLd';

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

import styles from '@/styles/pages/about.module.css';

export default function AboutPage() {
  return (
    <div className={`container ${styles.container}`}>
      <JsonLd data={breadcrumbJsonLd} />

      <header className={styles.header}>
        <span className={styles.subtitle}>
          OUR STORY & PHILOSOPHY
        </span>
        <h1 className={styles.title}>
          Về TinyHabit
        </h1>
        <p className={styles.quote}>
          &ldquo;NURTURING HABITS - GROWING DREAMS&rdquo;
        </p>
      </header>

      {/* FOUNDER STORY CONTENT */}
      <article className={styles.article}>
        <section className={styles.sectionCard}>
          <h2 className={styles.sectionTitle}>
            Vì sao TinyHabit tồn tại?
          </h2>
          <p className={styles.paragraph}>
            TinyHabit không ra đời đơn thuần như một cửa hàng bán văn phòng phẩm hay sổ tay Planner. Chúng mình được thành lập từ một trăn trở rất thực tế của chính những người trẻ đang nỗ lực thay đổi bản thân mỗi ngày.
          </p>
          <p>
            Rất nhiều người trong chúng ta từng hào hứng mua một cuốn sổ kế hoạch dày dặn, viết kín các mục tiêu lớn lao vào tuần đầu tiên... để rồi vài tuần sau đó, cuốn sổ nằm phủ bụi ở góc bàn. Đi kèm với đó là cảm giác tội lỗi, tự phán xét rằng mình thiếu kỷ luật.
          </p>
        </section>

        <section className={styles.sectionCard}>
          <h2 className={styles.sectionTitle}>
            Kỷ Luật Nhưng Không Khắc Nghiệt (Gentle Discipline)
          </h2>
          <p className={styles.paragraph}>
            TinyHabit tin rằng: Sự thay đổi lớn không đến từ nỗ lực bộc phát trong một vài ngày kiệt sức. Sự thay đổi bền vững được nuôi dưỡng từ những thói quen nhỏ (Tiny Habits), đủ dịu dàng để làm mỗi ngày và đủ kiên trì để tiếp tục.
          </p>
          <p>
            Khi gạt bỏ áp lực hoàn hảo, bạn mới thực sự có không gian để tận hưởng hành trình phát triển cá nhân của mình.
          </p>
        </section>

        <section className={styles.sectionCard}>
          <h2 className={styles.sectionTitlePillars}>
            Ba Trụ Cột Triết Lý
          </h2>
          <div className={styles.pillarsList}>
            <div>
              <h3 className={styles.pillarTitle}>1. Gentle Discipline</h3>
              <p className={styles.pillarDesc}>Ưu tiên sự đều đặn bền vững hơn những nỗ lực bốc đồng cực đoan.</p>
            </div>
            <div>
              <h3 className={styles.pillarTitle}>2. Energy over Time</h3>
              <p className={styles.pillarDesc}>Quản lý nhịp sinh hoạt, năng lượng và sự tập trung sâu thay vì vắt kiệt thời gian.</p>
            </div>
            <div>
              <h3 className={styles.pillarTitle}>3. Intentional Living</h3>
              <p className={styles.pillarDesc}>Sống có chủ đích, loại bỏ xao nhãng kỹ thuật số và trân trọng khoảnh khắc hiện tại.</p>
            </div>
          </div>
        </section>

        <div className={styles.ctaWrapper}>
          <Button href="/bo-suu-tap" variant="primary" size="lg">
            Khám phá các công cụ TinyHabit
          </Button>
        </div>
      </article>
    </div>
  );
}
