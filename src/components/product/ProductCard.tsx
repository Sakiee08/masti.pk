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
    <div className="group relative rounded-3xl bg-[#13110E] border border-[#EAC996]/15 hover:border-[#EAC996]/40 transition-all duration-500 flex flex-col overflow-hidden shadow-xl hover:shadow-[0_20px_45px_-12px_rgba(217,107,67,0.22)] candle-card">
      {/* Top Media & Badges */}
      <Link href={`/products/${product.slug}`} className="block relative aspect-[4/3] bg-gradient-to-b from-[#181512] to-[#0E0C0A] overflow-hidden">
        {/* Soft Ambient Candlelight Halo behind packshot */}
        <div className="absolute inset-0 bg-radial-gradient from-[#D96B43]/15 via-transparent to-transparent opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 pointer-events-none" />

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={primaryImage?.url}
          alt={primaryImage?.altText || product.title}
          className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500 relative z-10"
        />

        {/* Gradient overlay on image bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#13110E] via-transparent to-transparent opacity-80 pointer-events-none z-10" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-20">
          {product.badge && (
            <span
              className={cn(
                'px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide uppercase shadow-md',
                product.badge === 'Best Seller' && 'bg-gradient-to-r from-[#D4AF37] to-[#B58E22] text-black font-bold',
                product.badge === 'Max Delay' && 'bg-gradient-to-r from-[#9E3C1B] to-[#6E2D17] text-[#FCF3E3] border border-[#EAC996]/20',
                product.badge === 'Ultra Thin' && 'bg-[#181512] text-[#EAC996] border border-[#EAC996]/30',
                product.badge === 'Value Pack' && 'bg-[#D96B43] text-white',
                product.badge === 'Most Popular' && 'bg-[#181512] text-[#F5F2EB] border border-[#EAC996]/25'
              )}
            >
              {product.badge}
            </span>
          )}
          {discount && (
            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#C85A32] text-white w-max shadow">
              -{discount}% OFF
            </span>
          )}
        </div>

        {/* Sensory Tag if available */}
        {product.sensoryProfile?.delayRating && product.sensoryProfile.delayRating >= 4 && (
          <div className="absolute top-3 right-3 z-20 flex items-center gap-1 text-[10px] font-bold text-[#E88A6E] bg-[#241712]/90 backdrop-blur-md px-2 py-0.5 rounded-full border border-[#D96B43]/30">
            <Zap className="w-3 h-3 text-[#E88A6E]" />
            <span>Delay 5/5</span>
          </div>
        )}

        {product.sensoryProfile?.thinnessRating && product.sensoryProfile.thinnessRating >= 4 && (
          <div className="absolute top-3 right-3 z-20 flex items-center gap-1 text-[10px] font-bold text-[#EAC996] bg-[#181512]/90 backdrop-blur-md px-2 py-0.5 rounded-full border border-[#D4AF37]/30">
            <span>Thin 5/5</span>
          </div>
        )}

        {product.sensoryProfile?.textureIntensity && product.sensoryProfile.textureIntensity >= 4 && (
          <div className="absolute top-3 right-3 z-20 flex items-center gap-1 text-[10px] font-bold text-[#FCF3E3] bg-[#2A1E18]/90 backdrop-blur-md px-2 py-0.5 rounded-full border border-[#E88A6E]/30">
            <span>Texture 5/5</span>
          </div>
        )}

        {/* Discreet Packing Pill */}
        <div className="absolute bottom-3 left-3 z-20 flex items-center gap-1 text-[10px] font-semibold text-[#EAC996] bg-[#13110E]/90 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-[#EAC996]/20">
          <ShieldCheck className="w-3.5 h-3.5 text-[#EAC996]" />
          <span>Discreet Box</span>
        </div>
      </Link>

      {/* Content Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-3.5">
        <div>
          <div className="flex items-center justify-between text-xs text-[#A8A29E] mb-1.5">
            <span className="font-semibold text-[#EAC996] uppercase tracking-[0.16em] text-[10px]">
              {product.brand}
            </span>
            <div className="flex items-center gap-1 text-[#D4AF37] text-xs font-semibold">
              <Star className="w-3 h-3 fill-[#D4AF37]" />
              <span>{product.rating.toFixed(1)}</span>
              <span className="text-[#8A8275] text-[10px]">({product.reviewCount})</span>
            </div>
          </div>

          <Link href={`/products/${product.slug}`} className="block">
            <h3 className="text-sm font-medium text-[#F5F2EB] group-hover:text-[#EAC996] transition-colors line-clamp-2 leading-snug">
              {product.title}
            </h3>
          </Link>
          <p className="text-xs text-[#A8A29E] mt-1 line-clamp-1 font-light">
            {product.tagline}
          </p>
        </div>

        {/* On-Card Variant Selector */}
        {product.variants.length > 1 && (
          <div className="space-y-1.5 pt-1">
            <div className="flex justify-between items-center text-[10px]">
              <span className="font-semibold text-[#A8A29E] uppercase tracking-wider">
                Pack Size:
              </span>
              {unitPriceRupees && (
                <span className="text-[#34D399] font-bold">
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
                      ? 'bg-[#D96B43] text-white border-[#D96B43] shadow-sm'
                      : 'bg-[#181512] text-[#D5CEBA] border-[#EAC996]/15 hover:border-[#EAC996]/30'
                  )}
                >
                  {variant.packSize > 1 ? `${variant.packSize} Pack` : variant.title}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Pricing & Add to Cart */}
        <div className="pt-2.5 border-t border-[#302A24]/70 flex items-center justify-between gap-2">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-bold text-[#F5F2EB]">
                {formatPKR(currentVariant.priceInMinorUnits)}
              </span>
              {currentVariant.compareAtPriceInMinorUnits && (
                <span className="text-xs text-[#8A8275] line-through">
                  {formatPKR(currentVariant.compareAtPriceInMinorUnits)}
                </span>
              )}
            </div>
            <span className="text-[10px] text-[#34D399] font-medium block">
              In Stock • Dispatches Today
            </span>
          </div>

          <button
            onClick={handleAddToCart}
            className={cn(
              'px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 shadow-sm',
              isAddedRecently
                ? 'bg-emerald-600 text-white'
                : 'bg-gradient-to-r from-[#D96B43] to-[#C85A32] hover:from-[#C85A32] hover:to-[#B54D28] text-white shadow-[0_4px_15px_rgba(217,107,67,0.35)] border border-[#EAC996]/20'
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
