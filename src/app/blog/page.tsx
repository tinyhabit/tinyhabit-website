import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { JsonLd } from '@/components/seo/JsonLd';
import styles from '@/styles/pages/blog.module.css';

export const metadata: Metadata = {
  title: 'Blog — Grow Your Version of You | TinyHabit',
  description: 'Khám phá bài viết chia sẻ về Quản lý năng lượng, Xây dựng thói quen, Quản lý thời gian và Chăm sóc sức khỏe.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'TinyHabit Blog | Grow Your Version of You',
    description: 'Nơi sẻ chia hành trình phát triển bản thân và nuôi dưỡng thói quen tốt mỗi ngày.'
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
      name: 'Blog',
      item: 'https://tinyhabit.vn/blog'
    }
  ]
};

interface BlogPost {
  id: number;
  category: string;
  title: string;
  image: string;
  isDark?: boolean;
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    category: 'Quản Lý Năng Lượng (Energy)',
    title: '3 Giai Đoạn Nuôi Dưỡng Nội Lực Tự Tin Cùng Sổ Tay Inner Power',
    image: '/images/detail/inner-power.png'
  },
  {
    id: 2,
    category: 'Chăm Sóc Sức Khỏe (Health)',
    title: 'Sổ Tay Dopamine Detox: 30 Ngày Ngắt Kết Nối Để Kết Nối Sâu Sắc Với Chính Mình',
    image: '/images/detail/30-days-dopamine-detox.png'
  },
  {
    id: 3,
    category: 'Chăm Sóc Sức Khỏe (Health)',
    title: 'Recap Workshop: Chạm Những Cánh Hoa, Chạm Vào Bình An',
    image: '/images/anh-bia-membership.avif',
    isDark: true
  },
  {
    id: 4,
    category: 'Quản Lý Sự Tập Trung (Focus)',
    title: 'Sự Sống Thuộc Về Người Chịu Hiểu Cơ Thể Của Mình',
    image: '/images/detail/kit-gieo-mam-thoi-quen-tinyhabit.png'
  },
  {
    id: 5,
    category: 'Quản Lý Sự Tập Trung (Focus)',
    title: '9 Hệ Thống Giúp Năm 2026 Trở Thành Năm Rực Rỡ Nhất Của Bạn',
    image: '/images/detail/journey-90-days.png'
  },
  {
    id: 6,
    category: 'Quản Lý Sự Tập Trung (Focus)',
    title: 'Làm Được Nhiều Hơn Trong 12 Tuần So Với Người Khác Trong 12 Tháng?',
    image: '/images/just-me-and-my-mind-cover.png',
    isDark: true
  },
  {
    id: 7,
    category: 'Xây Dựng Thói Quen (Habits)',
    title: '8 Thói Quen Nhỏ Để Trở Nên Am Hiểu Tài Chính Trong Năm 2026',
    image: '/images/detail/bo-suu-tap.png'
  },
  {
    id: 8,
    category: 'Xây Dựng Thói Quen (Habits)',
    title: 'Hiểu Mình Hiểu Người: Nền Tảng Của Mọi Mối Quan Hệ Lành Mạnh',
    image: '/images/detail/tinytalk-60-days.png'
  },
  {
    id: 9,
    category: 'Quản Lý Sự Tập Trung (Focus)',
    title: 'Làm Thế Nào Để Tìm Ra Mục Đích Cuộc Sống Của Bạn',
    image: '/images/talk-to-yourself-gently-cover.png'
  },
  {
    id: 10,
    category: 'Xây Dựng Thói Quen (Habits)',
    title: '6 Thói Quen Giúp Bạn Làm Chủ Buổi Sáng - Nâng Cao Hiệu Suất Mỗi Ngày',
    image: '/images/dopamine-detox-30-days.webp'
  },
  {
    id: 11,
    category: 'Quản Lý Sự Tập Trung (Focus)',
    title: 'Chiến Lược Đột Phá Tăng Thu Nhập Gấp 2, Gấp 3 Lần Trong Năm Nay',
    image: '/images/inner-power-60-days.webp',
    isDark: true
  },
  {
    id: 12,
    category: 'Quản Lý Sự Tập Trung (Focus)',
    title: 'Đầu Tư Cho Bản Thân: Hành Trình Biến Đổi Để Cơ Hội Tự Tìm Đến',
    image: '/images/journey-90-days.webp'
  },
  {
    id: 13,
    category: 'Quản Lý Năng Lượng (Energy)',
    title: 'Đừng Chỉ Viết Mục Tiêu Lên Giấy, Hãy Tạo Hệ Thống Duy Trì Đều Đặn',
    image: '/images/detail/30-days-journaling.png',
    isDark: true
  },
  {
    id: 14,
    category: 'Chăm Sóc Sức Khỏe (Health)',
    title: 'TinyTalk: Khi Những Trang Giấy Bắt Đầu "Chữa Lành" Cuộc Đời Bạn',
    image: '/images/tinytalk-60-days.webp'
  },
  {
    id: 15,
    category: 'Chăm Sóc Sức Khỏe (Health)',
    title: 'Tự Định Nghĩa Giá Trị Bản Thân Để Hạnh Phúc Hơn Giữa Kỳ Vọng Xã Hội',
    image: '/images/kit-gieo-mam-thoi-quen-cover.jpg'
  },
  {
    id: 16,
    category: 'Quản Lý Thời Gian (Time)',
    title: '5 "Kẻ cắp thời gian" Thầm Lặng: Bạn Có Đang Vô Tình Đánh Mất?',
    image: '/images/detail/30-days-dopamine-detox.png'
  },
  {
    id: 17,
    category: 'Chăm Sóc Sức Khỏe (Health)',
    title: 'Nuôi Dưỡng Não Bộ Như Chăm Sóc Làn Da? Tại Sao?',
    image: '/images/just-me-and-my-mind-cover.png'
  },
  {
    id: 18,
    category: 'Xây Dựng Thói Quen (Habits)',
    title: '5 Điều Bạn Cần Rèn Luyện Mỗi Ngày Để Phát Triển Toàn Diện',
    image: '/images/anh-bia-membership.avif',
    isDark: true
  },
  {
    id: 19,
    category: 'Quản Lý Sự Tập Trung (Focus)',
    title: 'Cách Đặt Mục Tiêu Để Đạt Được Thành Công?',
    image: '/images/detail/journey-90-days.png'
  },
  {
    id: 20,
    category: 'Quản Lý Năng Lượng (Energy)',
    title: 'Làm Sao Để Tạo Động Lực Ngay Cả Khi Bạn Không Muốn Làm Gì',
    image: '/images/detail/bo-suu-tap.png'
  },
  {
    id: 21,
    category: 'Quản Lý Sự Tập Trung (Focus)',
    title: 'Làm Việc Thông Minh Hơn, Không Cần Chăm Chỉ Hơn Với Quy Tắc 80/20',
    image: '/images/detail/kit-gieo-mam-thoi-quen-tinyhabit.png'
  },
  {
    id: 22,
    category: 'Xây Dựng Thói Quen (Habits)',
    title: 'Tư Duy Hệ Thống, Giúp Bạn Đạt Được Mục Tiêu Dễ Dàng',
    image: '/images/detail/inner-power.png'
  },
  {
    id: 23,
    category: 'Quản Lý Thời Gian (Time)',
    title: 'Time Audit: Cách Tiết Kiệm Hơn 10 Giờ Mỗi Tuần Với Khung Quản Lý Thời Gian',
    image: '/images/detail/tinytalk-60-days.png',
    isDark: true
  }
];

export default function BlogPage() {
  return (
    <div className={`container ${styles.pageWrapper}`}>
      <JsonLd data={breadcrumbJsonLd} />

      {/* HERO TITLE */}
      <header className={styles.heroHeader}>
        <h1 className={styles.heroTitle}>Grow Your Version of You</h1>
      </header>

      {/* FEATURED POST BANNER */}
      <section className={styles.featuredBanner}>
        <Image
          src="/images/detail/30-days-journaling.png"
          alt="Featured Blog Post"
          fill
          priority
          sizes="(max-width: 1200px) 100vw, 1200px"
          className={styles.featuredImage}
        />
        <div className={styles.featuredCard}>
          <span className={styles.featuredBadge}>Quản Lý Năng Lượng (Energy)</span>
          <h2 className={styles.featuredTitle}>
            Đừng Chỉ Viết Mục Tiêu Lên Giấy, Hãy Tạo Hệ Thống Duy Trì Đều Đặn
          </h2>
        </div>
      </section>

      {/* ALL BLOG SECTION & CATEGORY TABS */}
      <section className={styles.allBlogSection}>
        <h2 className={styles.allBlogTitle}>All Blog</h2>

        <div className={styles.categoryTabs}>
          <button className={`${styles.tabBtn} ${styles.active}`}>
            <span className={styles.tabIcon}>🔲</span>
            <span>All</span>
          </button>
          <span className={styles.tabDot}>•</span>
          <button className={styles.tabBtn}>Xây Dựng Thói Quen (Habits)</button>
          <span className={styles.tabDot}>•</span>
          <button className={styles.tabBtn}>Quản Lý Năng Lượng (Energy)</button>
          <span className={styles.tabDot}>•</span>
          <button className={styles.tabBtn}>Quản Lý Thời Gian (Time)</button>
          <span className={styles.tabDot}>•</span>
          <button className={styles.tabBtn}>Chăm Sóc Sức Khỏe (Health)</button>
        </div>
      </section>

      {/* BLOG CARDS GRID */}
      <section className={styles.blogGrid}>
        {BLOG_POSTS.map((post) => (
          <div
            key={post.id}
            className={`${styles.blogCard} ${post.isDark ? styles.dark : ''}`}
          >
            <div className={styles.cardTop}>
              <span className={styles.badge}>{post.category}</span>
              <h3 className={styles.cardTitle}>{post.title}</h3>
            </div>
            <div className={styles.cardImageWrapper}>
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className={styles.cardImage}
              />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
