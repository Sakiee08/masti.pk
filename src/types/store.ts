export interface ProductVariant {
  id: string;
  sku: string;
  barcodeGtin?: string;
  title: string;
  packSize: number; // e.g. 3, 10, 12, 30
  priceInMinorUnits: number; // e.g. 45000 = Rs. 450.00
  compareAtPriceInMinorUnits?: number; // e.g. 60000 = Rs. 600.00
  inStock: boolean;
  stockQuantity: number;
}

export interface ProductImage {
  id: string;
  url: string;
  altText: string;
  isPrimary?: boolean;
}

export interface SensoryProfile {
  thinnessRating?: number; // 1 to 5
  delayRating?: number; // 1 to 5
  textureIntensity?: number; // 1 to 5
  lubricationLevel?: number; // 1 to 5
}

export interface SupplementFacts {
  servingSize: string;
  servingsPerContainer: number;
  keyNutrients: string[];
  healthTarget: 'Bone Health' | 'Sexual Health' | 'Liver Health' | 'Kidney Health' | 'General Vitality';
}

export interface Product {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  brand: string;
  category: string;
  texture: string;
  flavour?: string;
  nominalWidthMm?: number; // e.g. 52.5, 53, 56
  material?: string;
  descriptionHtml: string;
  highlights: string[];
  usageInstructions: string[];
  discreetPackagingGuaranteed: boolean;
  rating: number;
  reviewCount: number;
  badge?: string;
  sensoryProfile?: SensoryProfile;
  supplementFacts?: SupplementFacts;
  variants: ProductVariant[];
  images: ProductImage[];
}

export interface CartItem {
  productId: string;
  productTitle: string;
  productSlug: string;
  variantId: string;
  variantTitle: string;
  packSize: number;
  unitPriceInMinorUnits: number;
  quantity: number;
  imageUrl: string;
  brand: string;
}

export interface FilterState {
  category: string | null;
  brand: string | null;
  texture: string | null;
  minPrice: number | null;
  maxPrice: number | null;
  inStockOnly: boolean;
  searchQuery: string;
  sortBy: 'featured' | 'price_asc' | 'price_desc' | 'rating';
}
