import { NextRequest, NextResponse } from 'next/server';
import { SEED_PRODUCTS } from '@/data/seed-catalogue';

export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;
  const product = SEED_PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    return NextResponse.json(
      { error: 'NOT_FOUND', message: 'Product not found.' },
      { status: 404 }
    );
  }

  return NextResponse.json({ data: product });
}
