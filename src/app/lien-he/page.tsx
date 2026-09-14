import React from 'react';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { JsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Liên Hệ TinyHabit — Tư Vấn & Đặt Hàng Qua Social',
  description: 'Liên hệ với TinyHabit qua Instagram, Facebook, Shopee hoặc Hotline 0349338608 để được tư vấn sản phẩm Planner & Journaling phù hợp nhất.',
  alternates: { canonical: '/lien-he' },
  openGraph: {
    title: 'Liên Hệ TinyHabit',
    description: 'Chúng mình luôn sẵn sàng lắng nghe và tư vấn cho hành trình của bạn.'
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
      name: 'Liên hệ',
      item: 'https://tinyhabit.vn/lien-he'
    }
  ]
};

import styles from '@/styles/pages/contact.module.css';

export default function ContactPage() {
  return (
    <div className={`container ${styles.container}`}>
      <JsonLd data={breadcrumbJsonLd} />

      <header className={styles.header}>
        <span className={styles.subtitle}>
          GET IN TOUCH
        </span>
        <h1 className={styles.title}>
          Liên Hệ Vẫn Được Xử Lý Trực Tiếp Với Team
        </h1>
        <p className={styles.description}>
          Tại TinyHabit Phase 1, từng đơn hàng và câu hỏi tư vấn đều được team chăm sóc trực tiếp qua Instagram, Facebook và Hotline để đảm bảo bạn chọn đúng cuốn sổ phù hợp nhất.
        </p>
      </header>

      {/* PRIMARY INSTAGRAM CONTACT CARD */}
      <div className={styles.card}>
        <span className={styles.cardIcon} role="img" aria-label="Trò chuyện">💬</span>
        <div>
          <h2 className={styles.cardTitle}>
            Kênh Tư Vấn Ưu Tiên: Instagram & Hotline
          </h2>
          <p className={styles.cardDesc}>
            Nhắn tin trực tiếp cho TinyHabit trên Instagram hoặc gọi Hotline để nhận phản hồi nhanh nhất.
          </p>
          <p className={styles.cardHotline}>
            📞 Hotline: <a href="tel:0349338608" className={styles.cardHotlineLink}>0349 338 608</a>
          </p>
        </div>
        <div className={styles.cardButtons}>
          <Button href="https://www.instagram.com/tiny.habitnotebook" external variant="primary" size="lg">
            Nhắn Instagram (@tiny.habitnotebook) <span aria-hidden="true">🟢</span>
          </Button>
          <Button href="https://shopee.vn/tinyhabit" external variant="outline" size="lg">
            Ghé Gian Hàng Shopee <span aria-hidden="true">🛍️</span>
          </Button>
        </div>
      </div>

      {/* OTHER SOCIAL CHANNELS */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          Theo Dõi TinyHabit Trên Các Nền Tảng Kỹ Thuật Số
        </h2>

        <div className={styles.socialGrid}>
          <a
            href="https://www.facebook.com/tiny.habitnotebook"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <span className={styles.socialIcon} role="img" aria-label="Facebook">📘</span>
            <span className={styles.socialName}>Facebook Fanpage</span>
            <span className={styles.socialHandle}>tiny.habitnotebook</span>
          </a>

          <a
            href="https://www.instagram.com/tiny.habitnotebook"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <span className={styles.socialIcon} role="img" aria-label="Instagram">📸</span>
            <span className={styles.socialName}>Instagram</span>
            <span className={styles.socialHandle}>tiny.habitnotebook</span>
          </a>

          <a
            href="https://shopee.vn/tinyhabit"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <span className={styles.socialIcon} role="img" aria-label="Shopee">🛍️</span>
            <span className={styles.socialName}>Shopee</span>
            <span className={styles.socialHandle}>shopee.vn/tinyhabit</span>
          </a>

          <a
            href="tel:0349338608"
            className={styles.socialLink}
          >
            <span className={styles.socialIcon} role="img" aria-label="Điện thoại">📞</span>
            <span className={styles.socialName}>Hotline / Zalo</span>
            <span className={styles.socialHandle}>0349 338 608</span>
          </a>
        </div>
      </section>
    </div>
  );
}
