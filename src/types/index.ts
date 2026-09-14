export type ProductCategoryType = 'planner' | 'journaling' | 'bo-tro';

export interface ProductSpecs {
  dimensions: string;
  pages: number;
  paperType: string;
  coverMaterial: string;
  contents?: string;
}

export interface ProductSEO {
  title: string;
  description: string;
  ogImage?: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategoryType;
  categoryName: string;
  tagline: string;
  price: number;
  currency: string;
  duration?: string;
  coverColor?: string;
  images: string[];
  shortDescription: string;
  longDescription: string;
  specs: ProductSpecs;
  benefits: string[];
  targetAudience: string[];
  features?: string[];
  seo: ProductSEO;
}

export interface NavigationItem {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
