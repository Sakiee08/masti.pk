'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ShoppingBag, Check, Star, ShieldCheck, Zap } from 'lucide-react';
import { Product } from '@/types/store';
import { useCartStore } from '@/lib/store/cart-store';
import { formatPKR, calculateDiscountPercentage, cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCartStore();
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [isAddedRecently, setIsAddedRecently] = useState(false);

  const currentVariant = product.variants[selectedVariantIndex] || product.variants[0];
  const primaryImage = product.images.find((img) => img.isPrimary) || product.images[0];
  const discount = calculateDiscountPercentage(
    currentVariant.priceInMinorUnits,
    currentVariant.compareAtPriceInMinorUnits
  );

  // Unit pricing calculation (e.g. Rs. 149 / unit)
  const unitPriceRupees = currentVariant.packSize > 1
    ? Math.round(currentVariant.priceInMinorUnits / 100 / currentVariant.packSize)
    : null;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    addItem({
      productId: product.id,
      productTitle: product.title,
      productSlug: product.slug,
      variantId: currentVariant.id,
      variantTitle: currentVariant.title,
      packSize: currentVariant.packSize,
      unitPriceInMinorUnits: currentVariant.priceInMinorUnits,
      imageUrl: primaryImage?.url || '',
      brand: product.brand,
    });

    setIsAddedRecently(true);
    setTimeout(() => setIsAddedRecently(false), 1800);
  };

  return (
    <div className="group relative rounded-3xl bg-dark-850/90 border border-white/5 hover:border-brand-500/40 transition-all duration-300 flex flex-col overflow-hidden shadow-lg hover:shadow-glow-brand/20">
      {/* Top Media & Badges */}
      <Link href={`/products/${product.slug}`} className="block relative aspect-[4/3] bg-dark-900 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={primaryImage?.url}
          alt={primaryImage?.altText || product.title}
          className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
        />

        {/* Gradient overlay on image bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-transparent to-transparent opacity-80 pointer-events-none" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.badge && (
            <span
              className={cn(
                'px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide uppercase shadow-md',
                product.badge === 'Best Seller' && 'bg-amber-500 text-black',
                product.badge === 'Max Delay' && 'bg-purple-600 text-white',
                product.badge === 'Ultra Thin' && 'bg-cyan-600 text-white',
                product.badge === 'Value Pack' && 'bg-rose-600 text-white',
                product.badge === 'Most Popular' && 'bg-blue-600 text-white'
              )}
            >
              {product.badge}
            </span>
          )}
          {discount && (
            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-rose-500 text-white w-max shadow">
              -{discount}% OFF
            </span>
          )}
        </div>

        {/* Sensory Tag if available */}
        {product.sensoryProfile?.delayRating && product.sensoryProfile.delayRating >= 4 && (
          <div className="absolute top-3 right-3 z-10 flex items-center gap-1 text-[10px] font-bold text-purple-300 bg-purple-950/80 backdrop-blur-md px-2 py-0.5 rounded-full border border-purple-500/30">
            <Zap className="w-3 h-3 text-purple-400" />
            <span>Delay 5/5</span>
          </div>
        )}

        {product.sensoryProfile?.thinnessRating && product.sensoryProfile.thinnessRating >= 4 && (
          <div className="absolute top-3 right-3 z-10 flex items-center gap-1 text-[10px] font-bold text-cyan-300 bg-cyan-950/80 backdrop-blur-md px-2 py-0.5 rounded-full border border-cyan-500/30">
            <span>Thin 5/5</span>
          </div>
        )}

        {product.sensoryProfile?.textureIntensity && product.sensoryProfile.textureIntensity >= 4 && (
          <div className="absolute top-3 right-3 z-10 flex items-center gap-1 text-[10px] font-bold text-brand-300 bg-brand-950/80 backdrop-blur-md px-2 py-0.5 rounded-full border border-brand-500/30">
            <span>Texture 5/5</span>
          </div>
        )}

        {/* Discreet Packing Pill */}
        <div className="absolute bottom-3 left-3 z-10 flex items-center gap-1 text-[10px] font-semibold text-emerald-300 bg-emerald-950/85 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-emerald-500/30">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>Discreet Box</span>
        </div>
      </Link>

      {/* Content Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-3.5">
        <div>
          <div className="flex items-center justify-between text-xs text-zinc-400 mb-1.5">
            <span className="font-bold text-brand-400 uppercase tracking-wider text-[10px]">
              {product.brand}
            </span>
            <div className="flex items-center gap-1 text-amber-400 text-xs font-semibold">
              <Star className="w-3 h-3 fill-amber-400" />
              <span>{product.rating.toFixed(1)}</span>
              <span className="text-zinc-500 text-[10px]">({product.reviewCount})</span>
            </div>
          </div>

          <Link href={`/products/${product.slug}`} className="block">
            <h3 className="text-sm font-bold text-zinc-100 group-hover:text-brand-400 transition-colors line-clamp-2 leading-snug">
              {product.title}
            </h3>
          </Link>
          <p className="text-xs text-zinc-400 mt-1 line-clamp-1">
            {product.tagline}
          </p>
        </div>

        {/* On-Card Variant Selector */}
        {product.variants.length > 1 && (
          <div className="space-y-1.5 pt-1">
            <div className="flex justify-between items-center text-[10px]">
              <span className="font-semibold text-zinc-400 uppercase tracking-wider">
                Pack Size:
              </span>
              {unitPriceRupees && (
                <span className="text-emerald-400 font-bold">
                  Rs. {unitPriceRupees} / unit
                </span>
              )}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {product.variants.map((variant, idx) => (
                <button
                  key={variant.id}
                  type="button"
                  onClick={() => setSelectedVariantIndex(idx)}
                  className={cn(
                    'px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all border',
                    selectedVariantIndex === idx
                      ? 'bg-brand-500 text-white border-brand-500 shadow-sm'
                      : 'bg-dark-800 text-zinc-300 border-white/10 hover:border-white/20'
                  )}
                >
                  {variant.packSize > 1 ? `${variant.packSize} Pack` : variant.title}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Pricing & Add to Cart */}
        <div className="pt-2.5 border-t border-white/5 flex items-center justify-between gap-2">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-extrabold text-white">
                {formatPKR(currentVariant.priceInMinorUnits)}
              </span>
              {currentVariant.compareAtPriceInMinorUnits && (
                <span className="text-xs text-zinc-500 line-through">
                  {formatPKR(currentVariant.compareAtPriceInMinorUnits)}
                </span>
              )}
            </div>
            <span className="text-[10px] text-emerald-400 font-medium block">
              In Stock • Dispatches Today
            </span>
          </div>

          <button
            onClick={handleAddToCart}
            className={cn(
              'px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm',
              isAddedRecently
                ? 'bg-emerald-600 text-white'
                : 'bg-brand-600 hover:bg-brand-500 text-white hover:shadow-glow-brand'
            )}
          >
            {isAddedRecently ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Added</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Add</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
