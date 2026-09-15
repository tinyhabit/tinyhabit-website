import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { JsonLd } from '@/components/seo/JsonLd';
import styles from '@/styles/pages/gift.module.css';

export const metadata: Metadata = {
  title: 'Quà Tặng Membership — TinyHabit',
  description: 'Danh mục sản phẩm quà tặng Membership hỗ trợ nâng cao hiệu suất, sự bình an và tự tin phát triển bản thân.',
  alternates: { canonical: '/qua-tang-membership' },
  openGraph: {
    title: 'Quà Tặng Membership | TinyHabit',
    description: 'Trọn bộ quà tặng độc quyền dành cho thành viên TinyHabit Membership.'
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
      name: 'Quà Tặng Membership',
      item: 'https://tinyhabit.vn/qua-tang-membership'
    }
  ]
};

interface ProductItem {
  id: number;
  title: string;
  status: string;
  image: string;
  showOverlay?: boolean;
}

interface Category {
  title: string;
  ctaText?: string;
  products: ProductItem[];
}

const CATEGORIES: Category[] = [
  {
    title: 'Nâng cao Hiệu suất (Productivity & Focus)',
    ctaText: 'LIÊN HỆ TƯ VẤN',
    products: [
      { id: 1, title: 'Note brainstorm', status: '', image: '/images/detail/30-days-dopamine-detox.png' },
      { id: 2, title: '48 Weekly Reflection A4', status: 'Còn 45 sản phẩm', image: '/images/detail/30-days-journaling.png' },
      { id: 3, title: '14 Monthly Reflection A4', status: 'Còn 68 sản phẩm', image: '/images/detail/bo-suu-tap.png' },
      { id: 4, title: '14 Monthly Planner A4', status: 'Còn 32 sản phẩm', image: '/images/detail/journey-90-days.png' },
      { id: 5, title: 'Đồng hồ hẹn giờ Pomodoro', status: 'Còn 28 sản phẩm', image: '/images/detail/tinytalk-60-days.png' }
    ]
  },
  {
    title: 'Bình an & Kết nối (Mindfulness & Peace)',
    ctaText: 'LIÊN HỆ ĐẶT HÀNG',
    products: [
      { id: 6, title: '12 lá thư viết cho bản thân', status: 'Còn 35 sản phẩm', image: '/images/detail/kit-gieo-mam-thoi-quen-tinyhabit.png' },
      { id: 7, title: 'Cốc cùng bạn uống đủ nước', status: 'Còn 15 sản phẩm', image: '/images/just-me-and-my-mind-cover.png' },
      { id: 8, title: 'Nến thơm mini thư giãn', status: 'Sắp ra mắt', showOverlay: true, image: '/images/talk-to-yourself-gently-cover.png' },
      { id: 9, title: '12 Vòng quay bánh xe cuộc đời', status: 'Còn 34 sản phẩm', image: '/images/kit-gieo-mam-thoi-quen-cover.jpg' },
      { id: 10, title: 'Túi Tote TinyHabit & Friends', status: 'Riêng cho workshop', image: '/images/inner-power-60-days.webp' }
    ]
  },
  {
    title: 'Ghi nhận & Tự tin (Self-Reward & Growth)',
    ctaText: '',
    products: [
      { id: 11, title: 'Bộ 4 Sticker Sheet "Tiny Wins"', status: 'Còn 65 sản phẩm', image: '/images/dopamine-detox-30-days.webp' },
      { id: 12, title: 'Gương nhỏ rèn luyện sự tự tin', status: 'Còn 22 sản phẩm', showOverlay: true, image: '/images/journey-90-days.webp' },
      { id: 13, title: 'Kẹp tóc tính nữ', status: '102 sản phẩm', image: '/images/tinytalk-60-days.webp' }
    ]
  }
];

export default function QuaTangMembershipPage() {
  return (
    <div className={`container ${styles.pageWrapper}`}>
      <JsonLd data={breadcrumbJsonLd} />

      {CATEGORIES.map((cat, catIdx) => (
        <section key={catIdx} className={styles.categorySection}>
          <h2 className={styles.categoryTitle}>{cat.title}</h2>

          <div className={styles.productGrid}>
            {cat.products.map((prod) => (
              <div key={prod.id} className={styles.productCard}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={prod.image}
                    alt={prod.title}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className={styles.productImage}
                  />
                  {prod.showOverlay && (
                    <div className={styles.hoverOverlay}>
                      <span className={styles.hoverBtn}>Xem chi tiết</span>
                    </div>
                  )}
                </div>
                <h3 className={styles.productTitle}>{prod.title}</h3>
                {prod.status && (
                  <span className={styles.stockStatus}>{prod.status}</span>
                )}
              </div>
            ))}
          </div>

          {cat.ctaText && (
            <div className={styles.categoryCtaWrapper}>
              <a
                href="https://www.instagram.com/tiny.habitnotebook"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaBtn}
              >
                <span>{cat.ctaText}</span>
                <span className={styles.greenDot} />
              </a>
            </div>
          )}
        </section>
      ))}
    </div>
  );
}
