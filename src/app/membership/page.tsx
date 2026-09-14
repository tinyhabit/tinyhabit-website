import React from 'react';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { JsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Membership — Chương Trình Đồng Hành Trọn Năm',
  description: 'Gói Membership TinyHabit mang đến 4 cuốn Planner trọn năm, tham gia Workshop chuyên đề và cộng đồng phát triển bản thân bền vững.',
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
    <div className="container" style={{ paddingBottom: 'var(--space-2xl)' }}>
      <JsonLd data={breadcrumbJsonLd} />

      <header style={{ textAlign: 'center', padding: 'var(--space-xl) 0 var(--space-lg)' }}>
        <span style={{ fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--color-accent)' }}>
          ECOSYSTEM MEMBER
        </span>
        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800, marginTop: '8px' }}>
          TinyHabit Membership
        </h1>
        <p style={{ color: 'var(--color-muted)', fontSize: '1.1rem', maxWidth: '640px', margin: '16px auto 0', lineHeight: '1.6' }}>
          Không chỉ là mua sổ tay, đây là lời cam kết đồng hành cùng bạn suốt 365 ngày nuôi dưỡng thói quen và kiến tạo cuộc sống có chủ đích.
        </p>
      </header>

      {/* PRICING & HIGHLIGHT BANNER */}
      <section style={{
        backgroundColor: 'var(--color-card-bg)',
        borderRadius: 'var(--radius-lg)',
        padding: 'var(--space-2xl) var(--space-lg)',
        border: '1px solid var(--color-border)',
        boxShadow: 'var(--shadow-md)',
        maxWidth: '800px',
        margin: '0 auto var(--space-2xl)',
        textAlign: 'center'
      }}>
        <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-brand-dark)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Gói Đồng Hành Trọn Năm
        </span>
        <div style={{ margin: '16px 0' }}>
          <span style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--color-accent)', fontFamily: 'var(--font-heading)' }}>
            528.000đ
          </span>
          <span style={{ fontSize: '1rem', color: 'var(--color-muted)', display: 'block' }}>
            / 12 tháng đồng hành
          </span>
        </div>
        <p style={{ color: 'var(--color-text)', fontSize: '1rem', marginBottom: '24px' }}>
          Tiết kiệm hơn 30% so với mua lẻ từng sản phẩm và nhận trọn vẹn đặc quyền thành viên.
        </p>
        <Button href="https://www.instagram.com/tiny.habitnotebook" external variant="primary" size="lg">
          Đăng ký Membership qua Instagram
        </Button>
      </section>

      {/* BENEFITS GRID */}
      <section style={{ marginBottom: 'var(--space-2xl)' }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 800, textAlign: 'center', marginBottom: 'var(--space-xl)' }}>
          Đặc Quyền Thành Viên TinyHabit
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 'var(--space-md)'
        }}>
          <div style={{ background: 'var(--bg-secondary)', padding: 'var(--space-lg)', borderRadius: 'var(--radius-md)' }}>
            <span style={{ fontSize: '2rem' }}>📖</span>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, margin: '12px 0 8px' }}>4 Bộ Planner Trọn Năm</h3>
            <p style={{ color: 'var(--color-muted)', fontSize: '0.95rem' }}>
              Nhận đủ 4 cuốn Planner cho 4 quý trong năm (JOURNEY, Dopamine Detox, Inner Power...) giao tận tay mỗi mùa.
            </p>
          </div>

          <div style={{ background: 'var(--bg-secondary)', padding: 'var(--space-lg)', borderRadius: 'var(--radius-md)' }}>
            <span style={{ fontSize: '2rem' }}>🎓</span>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, margin: '12px 0 8px' }}>Workshops Chuyên Đề</h3>
            <p style={{ color: 'var(--color-muted)', fontSize: '0.95rem' }}>
              Quyền tham gia miễn phí các buổi Workshop trực tuyến về Quản lý năng lượng, Deep Work và Reframing Mindset.
            </p>
          </div>

          <div style={{ background: 'var(--bg-secondary)', padding: 'var(--space-lg)', borderRadius: 'var(--radius-md)' }}>
            <span style={{ fontSize: '2rem' }}>☕</span>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, margin: '12px 0 8px' }}>Tiny Meeting Hàng Tháng</h3>
            <p style={{ color: 'var(--color-muted)', fontSize: '0.95rem' }}>
              Buổi tĩnh lặng và phản chiếu online cùng cộng đồng TinyHabit mỗi cuối tháng để chia sẻ tiến trình dịu dàng.
            </p>
          </div>

          <div style={{ background: 'var(--bg-secondary)', padding: 'var(--space-lg)', borderRadius: 'var(--radius-md)' }}>
            <span style={{ fontSize: '2rem' }}>🎁</span>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, margin: '12px 0 8px' }}>Seasonal Gift & Ưu Đãi</h3>
            <p style={{ color: 'var(--color-muted)', fontSize: '0.95rem' }}>
              Nhận bộ Kit quà tặng độc quyền mỗi mùa và ưu đãi 15% cho tất cả đơn hàng bổ sung trong năm.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
