import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { SEED_PRODUCTS } from '@/data/seed-catalogue';
import { ProductCatalogClient } from '@/components/product/ProductCatalogClient';

export const metadata: Metadata = {
  title: 'Catalogue & Condom Range | Masti.pk Pakistan',
  description:
    'Browse our complete range of certified Durex, Masti, and Josh condoms, delay solutions, and intimate lubricants. 100% discreet packaging guaranteed.',
};

export default function ProductsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Suspense fallback={<div className="text-zinc-400 text-sm py-12 text-center">Loading catalogue...</div>}>
        <ProductCatalogClient initialProducts={SEED_PRODUCTS} />
      </Suspense>
    </div>
  );
}
