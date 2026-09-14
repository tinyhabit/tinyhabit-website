import React from 'react';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { JsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Liên Hệ TinyHabit — Tư Vấn & Đặt Hàng Qua Social',
  description: 'Liên hệ với TinyHabit qua Instagram, Facebook, Shopee hoặc Hotline 0349338608 để được tư vấn sản phẩm Planner & Journaling phù hợp nhất.',
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

export default function ContactPage() {
  const cardStyle: React.CSSProperties = {
    backgroundColor: 'var(--color-brand-light)',
    borderRadius: 'var(--radius-lg)',
    padding: 'var(--space-2xl) var(--space-md)',
    textAlign: 'center',
    border: '1px solid var(--color-border)',
    marginBottom: 'var(--space-2xl)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 'var(--space-md)'
  };

  const socialLinkStyle: React.CSSProperties = {
    background: 'var(--color-card-bg)',
    padding: 'var(--space-md)',
    borderRadius: 'var(--radius-md)',
    border: '1px solid var(--color-border)',
    textAlign: 'center',
    textDecoration: 'none'
  };

  return (
    <div className="container" style={{ maxWidth: '800px', paddingBottom: 'var(--space-2xl)' }}>
      <JsonLd data={breadcrumbJsonLd} />

      <header style={{ textAlign: 'center', padding: 'var(--space-xl) 0 var(--space-lg)' }}>
        <span style={{ fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--color-brand)' }}>
          GET IN TOUCH
        </span>
        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginTop: '8px' }}>
          Liên Hệ Vẫn Được Xử Lý Trực Tiếp Với Team
        </h1>
        <p style={{ color: 'var(--color-muted)', fontSize: '1.05rem', maxWidth: '600px', margin: '16px auto 0', lineHeight: '1.6' }}>
          Tại TinyHabit Phase 1, từng đơn hàng và câu hỏi tư vấn đều được team chăm sóc trực tiếp qua Instagram, Facebook và Hotline để đảm bảo bạn chọn đúng cuốn sổ phù hợp nhất.
        </p>
      </header>

      {/* PRIMARY INSTAGRAM CONTACT CARD */}
      <div style={cardStyle}>
        <span style={{ fontSize: '2.5rem' }}>💬</span>
        <div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--color-brand-dark)' }}>
            Kênh Tư Vấn Ưu Tiên: Instagram & Hotline
          </h2>
          <p style={{ color: 'var(--color-text)', marginTop: '8px' }}>
            Nhắn tin trực tiếp cho TinyHabit trên Instagram hoặc gọi Hotline để nhận phản hồi nhanh nhất.
          </p>
          <p style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-brand-dark)', marginTop: '12px' }}>
            📞 Hotline: <a href="tel:0349338608" style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>0349 338 608</a>
          </p>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
          <Button href="https://www.instagram.com/tiny.habitnotebook" external variant="primary" size="lg">
            Nhắn Instagram (@tiny.habitnotebook) 🟢
          </Button>
          <Button href="https://shopee.vn/tinyhabit" external variant="outline" size="lg">
            Ghé Gian Hàng Shopee 🛍️
          </Button>
        </div>
      </div>

      {/* OTHER SOCIAL CHANNELS */}
      <section style={{ marginBottom: 'var(--space-2xl)' }}>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, textAlign: 'center', marginBottom: 'var(--space-lg)' }}>
          Theo Dõi TinyHabit Trên Các Nền Tảng Kỹ Thuật Số
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 'var(--space-md)' }}>
          <a
            href="https://www.facebook.com/tiny.habitnotebook"
            target="_blank"
            rel="noopener noreferrer"
            style={socialLinkStyle}
          >
            <span style={{ fontSize: '1.5rem', display: 'block', marginBottom: '8px' }}>📘</span>
            <span style={{ fontWeight: 700, display: 'block' }}>Facebook Fanpage</span>
            <span style={{ fontSize: '0.85rem', color: 'var(--color-muted)' }}>tiny.habitnotebook</span>
          </a>

          <a
            href="https://www.instagram.com/tiny.habitnotebook"
            target="_blank"
            rel="noopener noreferrer"
            style={socialLinkStyle}
          >
            <span style={{ fontSize: '1.5rem', display: 'block', marginBottom: '8px' }}>📸</span>
            <span style={{ fontWeight: 700, display: 'block' }}>Instagram</span>
            <span style={{ fontSize: '0.85rem', color: 'var(--color-muted)' }}>tiny.habitnotebook</span>
          </a>

          <a
            href="https://shopee.vn/tinyhabit"
            target="_blank"
            rel="noopener noreferrer"
            style={socialLinkStyle}
          >
            <span style={{ fontSize: '1.5rem', display: 'block', marginBottom: '8px' }}>🛍️</span>
            <span style={{ fontWeight: 700, display: 'block' }}>Shopee</span>
            <span style={{ fontSize: '0.85rem', color: 'var(--color-muted)' }}>shopee.vn/tinyhabit</span>
          </a>

          <a
            href="tel:0349338608"
            style={socialLinkStyle}
          >
            <span style={{ fontSize: '1.5rem', display: 'block', marginBottom: '8px' }}>📞</span>
            <span style={{ fontWeight: 700, display: 'block' }}>Hotline / Zalo</span>
            <span style={{ fontSize: '0.85rem', color: 'var(--color-muted)' }}>0349 338 608</span>
          </a>
        </div>
      </section>
    </div>
  );
}
