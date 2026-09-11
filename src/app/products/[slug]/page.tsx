import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { SEED_PRODUCTS } from '@/data/seed-catalogue';
import { ProductDetailClient } from '@/components/product/ProductDetailClient';

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = SEED_PRODUCTS.find((p) => p.slug === params.slug);
  if (!product) {
    return {
      title: 'Product Not Found | Masti.pk',
    };
  }

  return {
    title: `${product.title} | Buy Online in Pakistan | Masti.pk`,
    description: `${product.tagline}. Cash on Delivery (COD) and 100% discreet delivery in plain packaging across Pakistan.`,
  };
}

export async function generateStaticParams() {
  return SEED_PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = SEED_PRODUCTS.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = SEED_PRODUCTS.filter(
    (p) => p.id !== product.id && (p.category === product.category || p.brand === product.brand)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <ProductDetailClient product={product} relatedProducts={relatedProducts} />
    </div>
  );
}
