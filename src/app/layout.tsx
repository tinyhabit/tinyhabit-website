import type { Metadata } from 'next';
import '@/styles/globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { StickyMobileCTA } from '@/components/layout/StickyMobileCTA';
import { ScrollToTop } from '@/components/layout/ScrollToTop';
import { JsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  metadataBase: new URL('https://tinyhabit.vn'),
  alternates: { canonical: '/' },
  title: {
    default: 'TinyHabit — Nurturing Habits, Growing Dreams',
    template: '%s | TinyHabit'
  },
  description: 'Self-development lifestyle brand tiên phong tại Việt Nam với các sản phẩm Planner, Journaling và công cụ nuôi dưỡng thói quen dịu dàng.',
  keywords: ['TinyHabit', 'Planner', 'Journaling', 'Sổ tay 90 ngày', 'Gentle Discipline', 'Xây dựng thói quen', 'Self development'],
  authors: [{ name: 'TinyHabit Team' }],
  icons: {
    icon: '/images/logo.jpg',
    shortcut: '/images/logo.jpg',
    apple: '/images/logo.jpg',
  },
  openGraph: {
    title: 'TinyHabit — Nurturing Habits, Growing Dreams',
    description: 'Bắt đầu hành trình thay đổi bản thân từ những hành động nhỏ, lặp lại được.',
    url: 'https://tinyhabit.vn',
    siteName: 'TinyHabit',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=1200',
        width: 1200,
        height: 630,
        alt: 'TinyHabit Planner & Journaling'
      }
    ],
    locale: 'vi_VN',
    type: 'website'
  },
  robots: {
    index: true,
    follow: true
  }
};

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'TinyHabit',
  url: 'https://tinyhabit.vn',
  logo: 'https://tinyhabit.vn/images/logo.jpg',
  slogan: 'NURTURING HABITS - GROWING DREAMS',
  sameAs: [
    'https://www.instagram.com/tiny.habitnotebook',
    'https://www.facebook.com/tiny.habitnotebook',
    'https://shopee.vn/tinyhabit'
  ]
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" data-scroll-behavior="smooth">
      <head>
        <JsonLd data={orgJsonLd} />
      </head>
      <body>
        <Header />
        <main className="mainContent">{children}</main>
        <Footer />
        <StickyMobileCTA />
        <ScrollToTop />
      </body>
    </html>
  );
}
