import { NextRequest, NextResponse } from 'next/server';
import { SEED_PRODUCTS } from '@/data/seed-catalogue';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = req.nextUrl;
    const category = searchParams.get('category');
    const brand = searchParams.get('brand');
    const texture = searchParams.get('texture');
    const search = searchParams.get('search');
    const sort = searchParams.get('sort') || 'featured';

    let results = [...SEED_PRODUCTS];

    if (category && category !== 'all') {
      results = results.filter((p) => p.category.toLowerCase() === category.toLowerCase());
    }

    if (brand && brand !== 'all') {
      results = results.filter((p) => p.brand.toLowerCase() === brand.toLowerCase());
    }

    if (texture && texture !== 'all') {
      results = results.filter((p) => p.texture.toLowerCase() === texture.toLowerCase());
    }

    if (search) {
      const q = search.toLowerCase();
      results = results.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.tagline.toLowerCase().includes(q)
      );
    }

    if (sort === 'price_asc') {
      results.sort(
        (a, b) =>
          Math.min(...a.variants.map((v) => v.priceInMinorUnits)) -
          Math.min(...b.variants.map((v) => v.priceInMinorUnits))
      );
    } else if (sort === 'price_desc') {
      results.sort(
        (a, b) =>
          Math.min(...b.variants.map((v) => v.priceInMinorUnits)) -
          Math.min(...a.variants.map((v) => v.priceInMinorUnits))
      );
    } else if (sort === 'rating') {
      results.sort((a, b) => b.rating - a.rating);
    }

    return NextResponse.json({
      data: results,
      total: results.length,
    });
  } catch {
    return NextResponse.json(
      { error: 'INTERNAL_SERVER_ERROR', message: 'Failed to retrieve catalogue.' },
      { status: 500 }
    );
  }
}
