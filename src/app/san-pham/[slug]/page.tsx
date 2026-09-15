import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllProducts, getProductBySlug, getRelatedProducts } from '@/data/products';
import { ProductGallery } from '@/components/product/ProductGallery';
import { ProductSpecTable } from '@/components/product/ProductSpecTable';
import { ProductGrid } from '@/components/product/ProductGrid';
import { Accordion } from '@/components/ui/Accordion';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { JsonLd } from '@/components/seo/JsonLd';
import styles from '@/styles/pages/productdetail.module.css';

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const products = getAllProducts();
  return products.map((product) => ({
    slug: product.slug
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const product = getProductBySlug(resolvedParams.slug);

  if (!product) {
    return {
      title: 'Sản phẩm không tồn tại | TinyHabit'
    };
  }

  return {
    title: product.seo.title,
    description: product.seo.description,
    alternates: { canonical: `/san-pham/${resolvedParams.slug}` },
    openGraph: {
      title: product.seo.title,
      description: product.seo.description,
      images: [
        {
          url: product.seo.ogImage || product.images[0],
          alt: product.name
        }
      ]
    }
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const resolvedParams = await params;
  const product = getProductBySlug(resolvedParams.slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product.slug, 3);

  const formattedPrice = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  }).format(product.price).replace(/\s?₫/, 'đ');

  const instagramMsg = encodeURIComponent(`Xin chào TinyHabit, mình muốn được tư vấn và đặt hàng cuốn ${product.name}`);

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    image: product.images,
    description: product.shortDescription,
    sku: product.id,
    brand: {
      '@type': 'Brand',
      name: 'TinyHabit'
    },
    offers: {
      '@type': 'Offer',
      url: `https://tinyhabit.vn/san-pham/${product.slug}`,
      priceCurrency: 'VND',
      price: product.price,
      availability: 'https://schema.org/InStock'
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
        name: 'Bộ sưu tập',
        item: 'https://tinyhabit.vn/bo-suu-tap'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: product.name,
        item: `https://tinyhabit.vn/san-pham/${product.slug}`
      }
    ]
  };

  return (
    <div className="container">
      <JsonLd data={[productJsonLd, breadcrumbJsonLd]} />

      <div className={styles.grid}>
        {/* LEFT: GALLERY */}
        <div className={styles.galleryCol}>
          <ProductGallery images={product.images} productName={product.name} />
        </div>

        {/* RIGHT: DETAILS */}
        <div className={styles.infoCol}>
          <span className={styles.category}>{product.categoryName}</span>
          <h1 className={styles.title}>{product.name}</h1>

          <div className={styles.priceRow}>
            <span className={styles.price}>{formattedPrice}</span>
            {product.duration && <Badge variant="brand">{product.duration}</Badge>}
            {product.coverColor && <Badge variant="muted">{product.coverColor}</Badge>}
          </div>

          <p className={styles.tagline}>{product.tagline}</p>
          <p className={styles.desc}>{product.longDescription}</p>

          <div style={{ marginTop: 'var(--space-xs)' }}>
            <Button
              href={`https://www.instagram.com/tiny.habitnotebook?text=${instagramMsg}`}
              external
              variant="primary"
              size="lg"
              fullWidth
            >
              Nhắn Instagram Tư Vấn & Đặt Hàng 🟢
            </Button>
          </div>

          <div className={styles.accordionGroup}>
            <Accordion title="Thông số kỹ thuật" defaultOpen>
              <ProductSpecTable specs={product.specs} />
            </Accordion>

            <Accordion title="Lợi ích nổi bật">
              <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {product.benefits.map((benefit, idx) => (
                  <li key={idx}>{benefit}</li>
                ))}
              </ul>
            </Accordion>

            <Accordion title="Đối tượng phù hợp">
              <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {product.targetAudience.map((audience, idx) => (
                  <li key={idx}>{audience}</li>
                ))}
              </ul>
            </Accordion>

            {product.features && (
              <Accordion title="Đặc điểm thiết kế">
                <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {product.features.map((feat, idx) => (
                    <li key={idx}>{feat}</li>
                  ))}
                </ul>
              </Accordion>
            )}
          </div>
        </div>
      </div>

      {/* RELATED PRODUCTS */}
      {relatedProducts.length > 0 && (
        <section className={styles.relatedSection}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 'var(--space-md)', textAlign: 'center' }}>
            Sản Phẩm Khác Bạn Có Thể Thích
          </h2>
          <ProductGrid products={relatedProducts} columns={3} />
        </section>
      )}
    </div>
  );
}
