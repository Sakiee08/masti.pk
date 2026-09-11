'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  ShoppingBag, 
  ShieldCheck, 
  Truck, 
  Star, 
  Check, 
  Minus, 
  Plus, 
  Clock, 
  Zap,
  Layers,
  Sparkles,
  Droplets,
  Package,
  HelpCircle,
  CheckCircle2,
  MessageCircle
} from 'lucide-react';
import { Product } from '@/types/store';
import { useCartStore } from '@/lib/store/cart-store';
import { formatPKR, calculateDiscountPercentage, cn } from '@/lib/utils';
import { ProductCard } from '@/components/product/ProductCard';
import { sanitizeHtml } from '@/lib/sanitize';

interface ProductDetailClientProps {
  product: Product;
  relatedProducts: Product[];
}

export function ProductDetailClient({ product, relatedProducts }: ProductDetailClientProps) {
  const router = useRouter();
  const { addItem } = useCartStore();

  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'details' | 'supplements' | 'sensory' | 'specs' | 'shipping'>('details');
  const [selectedCity, setSelectedCity] = useState('Lahore');
  const [isAddedRecently, setIsAddedRecently] = useState(false);

  const currentVariant = product.variants[selectedVariantIndex] || product.variants[0];
  const currentImage = product.images[selectedImageIndex] || product.images[0];
  const discount = calculateDiscountPercentage(
    currentVariant.priceInMinorUnits,
    currentVariant.compareAtPriceInMinorUnits
  );

  const unitPriceRupees = currentVariant.packSize > 1
    ? Math.round(currentVariant.priceInMinorUnits / 100 / currentVariant.packSize)
    : null;

  const handleAddToCart = () => {
    addItem({
      productId: product.id,
      productTitle: product.title,
      productSlug: product.slug,
      variantId: currentVariant.id,
      variantTitle: currentVariant.title,
      packSize: currentVariant.packSize,
      unitPriceInMinorUnits: currentVariant.priceInMinorUnits,
      imageUrl: currentImage?.url || '',
      brand: product.brand,
      quantity,
    });

    setIsAddedRecently(true);
    setTimeout(() => setIsAddedRecently(false), 1800);
  };

  const handleBuyNow = () => {
    handleAddToCart();
    router.push('/checkout');
  };

  const getDeliveryEstimate = () => {
    if (selectedCity === 'Lahore' || selectedCity === 'Karachi' || selectedCity === 'Islamabad' || selectedCity === 'Rawalpindi') {
      return 'Estimated Delivery: 24–48 Hours (Express Courier)';
    }
    return 'Estimated Delivery: 2–3 Business Days (Standard Nationwide Courier)';
  };

  return (
    <div className="space-y-16 pb-24 md:pb-8">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-zinc-400">
        <Link href="/" className="hover:text-champagne-300 transition-colors">
          Home
        </Link>
        <span className="text-zinc-600">/</span>
        <Link href="/products" className="hover:text-champagne-300 transition-colors">
          Catalogue
        </Link>
        <span className="text-zinc-600">/</span>
        <Link
          href={`/products?category=${encodeURIComponent(product.category)}`}
          className="hover:text-champagne-300 transition-colors"
        >
          {product.category}
        </Link>
        <span className="text-zinc-600">/</span>
        <span className="text-champagne-200/90 truncate">{product.title}</span>
      </nav>

      {/* Main Product Hero Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Column: Media Gallery */}
        <div className="space-y-4">
          <div className="aspect-[4/3] sm:aspect-square rounded-3xl bg-[#110F0D] border border-champagne-500/20 shadow-candle-glow overflow-hidden relative group flex items-center justify-center p-8">
            {/* Ambient Candlelight Glow */}
            <div className="absolute inset-0 bg-gradient-radial from-champagne-500/10 via-transparent to-transparent pointer-events-none" />
            
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={currentImage?.url}
              alt={currentImage?.altText || product.title}
              className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-700 relative z-10 filter drop-shadow-xl"
            />
            {product.badge && (
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider bg-brand-500/15 border border-brand-500/30 text-champagne-300 shadow-md backdrop-blur-md z-20">
                {product.badge}
              </span>
            )}
            <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#080706]/90 backdrop-blur-md text-emerald-400 text-xs font-medium border border-emerald-500/30 z-20">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% Discreet Packaging Guaranteed</span>
            </div>
          </div>

          {/* Thumbnail Strip */}
          {product.images.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-2">
              {product.images.map((img, idx) => (
                <button
                  key={img.id}
                  onClick={() => setSelectedImageIndex(idx)}
                  className={cn(
                    'w-20 h-20 rounded-2xl overflow-hidden border transition-all flex-shrink-0 bg-[#110F0D] p-2 flex items-center justify-center',
                    selectedImageIndex === idx
                      ? 'border-champagne-400 shadow-candle-glow bg-[#141210]'
                      : 'border-white/10 hover:border-champagne-500/40 opacity-70 hover:opacity-100'
                  )}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img.url}
                    alt={img.altText}
                    className="max-h-full max-w-full object-contain"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Variant Matrix, Price & Checkout CTAs */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-3 text-xs mb-2.5">
              <span className="font-semibold uppercase tracking-widest text-champagne-300 bg-champagne-500/10 px-3 py-0.5 rounded-full border border-champagne-500/20">
                {product.brand}
              </span>
              <div className="flex items-center gap-1.5 text-champagne-300 font-medium">
                <Star className="w-3.5 h-3.5 fill-champagne-400 text-champagne-400" />
                <span>{product.rating.toFixed(1)}</span>
                <span className="text-zinc-500">({product.reviewCount} verified reviews)</span>
              </div>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl text-white font-normal tracking-tight leading-tight">
              {product.title}
            </h1>
            <p className="text-sm text-zinc-300/90 mt-2.5 leading-relaxed font-light">
              {product.tagline}
            </p>
          </div>

          {/* Dynamic Price Display */}
          <div className="p-6 rounded-3xl bg-[#141210] border border-champagne-500/20 shadow-candle-glow space-y-2">
            <div className="flex items-baseline gap-3">
              <span className="font-serif text-3xl sm:text-4xl font-medium text-white tracking-tight">
                {formatPKR(currentVariant.priceInMinorUnits)}
              </span>
              {currentVariant.compareAtPriceInMinorUnits && (
                <span className="text-sm text-zinc-500 line-through">
                  {formatPKR(currentVariant.compareAtPriceInMinorUnits)}
                </span>
              )}
              {discount && (
                <span className="px-3 py-0.5 rounded-full text-xs font-semibold bg-brand-500/15 border border-brand-500/30 text-champagne-300">
                  Save {discount}%
                </span>
              )}
            </div>
            <div className="flex items-center justify-between text-xs text-zinc-400 pt-1">
              <span>GST inclusive • All taxes paid</span>
              {unitPriceRupees && (
                <span className="text-champagne-400 font-medium">
                  Just Rs. {unitPriceRupees} / unit
                </span>
              )}
            </div>
          </div>

          {/* Pack Size / Variant Selector */}
          <div className="space-y-2.5">
            <div className="flex justify-between items-center text-xs">
              <span className="font-semibold text-zinc-300 uppercase tracking-wider">
                Select Option / Pack Size:
              </span>
              <span className="text-champagne-400 font-medium">{currentVariant.title}</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {product.variants.map((v, idx) => (
                <button
                  key={v.id}
                  onClick={() => setSelectedVariantIndex(idx)}
                  className={cn(
                    'p-4 rounded-2xl border text-left transition-all flex flex-col justify-between',
                    selectedVariantIndex === idx
                      ? 'bg-brand-500/15 border-champagne-400 text-white shadow-candle-glow'
                      : 'bg-[#110F0D] border-white/10 text-zinc-400 hover:border-champagne-500/30'
                  )}
                >
                  <span className="text-xs font-medium text-zinc-200">{v.title}</span>
                  <span className="text-xs font-bold text-champagne-400 mt-1.5">
                    {formatPKR(v.priceInMinorUnits)}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Stepper & Actions */}
          <div className="space-y-3.5 pt-2">
            <div className="flex items-center gap-4">
              <span className="text-xs font-semibold text-zinc-300">Quantity:</span>
              <div className="flex items-center border border-champagne-500/20 rounded-2xl bg-[#110F0D]">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2.5 text-zinc-400 hover:text-white hover:bg-[#1A1714] rounded-l-2xl transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 text-sm font-semibold text-white">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2.5 text-zinc-400 hover:text-white hover:bg-[#1A1714] rounded-r-2xl transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <button
                onClick={handleAddToCart}
                className={cn(
                  'w-full py-4 px-6 rounded-2xl font-medium text-sm shadow-sm flex items-center justify-center gap-2 transition-all tracking-wide',
                  isAddedRecently
                    ? 'bg-emerald-600 text-white'
                    : 'bg-[#141210] hover:bg-[#1A1714] text-champagne-200 border border-champagne-500/30'
                )}
              >
                {isAddedRecently ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Added to Cart</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4 text-champagne-400" />
                    <span>Add to Cart</span>
                  </>
                )}
              </button>

              <button
                onClick={handleBuyNow}
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 text-white font-medium text-sm shadow-glow-brand flex items-center justify-center gap-2 transition-all hover:scale-[1.01] tracking-wide"
              >
                <span>Instant Buy (Cash on Delivery)</span>
              </button>

              {/* 1-Click WhatsApp Order Option (Preferred Pakistani Channel) */}
              <a
                href={`https://wa.me/923001234567?text=${encodeURIComponent(
                  `Hi Masti.pk, I would like to order ${product.title} (${currentVariant.title}) for ${formatPKR(currentVariant.priceInMinorUnits)}. Please dispatch in a discreet plain box via Cash on Delivery.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:col-span-2 py-3.5 px-4 rounded-2xl bg-emerald-950/40 hover:bg-emerald-900/40 border border-emerald-500/30 text-emerald-300 font-medium text-xs flex items-center justify-center gap-2 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Order via WhatsApp (100% Confidential)</span>
              </a>
            </div>
          </div>

          {/* Delivery Estimator for Pakistan */}
          <div className="p-5 rounded-3xl bg-[#110F0D] border border-champagne-500/15 space-y-3 text-xs">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-zinc-200 flex items-center gap-2">
                <Truck className="w-4 h-4 text-champagne-400" />
                Delivery to Your City:
              </span>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="bg-[#181512] text-zinc-200 border border-champagne-500/20 rounded-xl px-3 py-1.5 text-xs focus:outline-none focus:border-champagne-400 cursor-pointer"
              >
                <option value="Lahore">Lahore</option>
                <option value="Karachi">Karachi</option>
                <option value="Islamabad">Islamabad</option>
                <option value="Rawalpindi">Rawalpindi</option>
                <option value="Faisalabad">Faisalabad</option>
                <option value="Multan">Multan</option>
                <option value="Peshawar">Peshawar</option>
                <option value="Other">Other City / District</option>
              </select>
            </div>

            <p className="text-zinc-400 flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-champagne-400 flex-shrink-0" />
              <span>{getDeliveryEstimate()}</span>
            </p>

            <p className="text-[11px] text-champagne-300 font-medium pt-1">
              🚚 Orders over Rs. 2,000 qualify for FREE delivery across Pakistan!
            </p>
          </div>
        </div>
      </div>

      {/* Tabbed Product Details Section */}
      <div className="pt-8 border-t border-champagne-500/15 space-y-6">
        <div className="flex border-b border-champagne-500/15 overflow-x-auto gap-2">
          {[
            { id: 'details', label: 'Product Details' },
            ...(product.supplementFacts ? [{ id: 'supplements', label: 'Clinical Supplement Facts' }] : []),
            ...(product.sensoryProfile ? [{ id: 'sensory', label: 'How It Feels (Sensory Scale)' }] : []),
            { id: 'specs', label: 'Technical Specifications' },
            { id: 'shipping', label: 'Discreet Packaging Guarantee' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={cn(
                'py-3.5 px-4 text-xs font-semibold transition-all border-b-2 whitespace-nowrap tracking-wider',
                activeTab === tab.id
                  ? 'border-champagne-400 text-champagne-300'
                  : 'border-transparent text-zinc-400 hover:text-zinc-200'
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="p-6 sm:p-8 rounded-3xl bg-[#110F0D]/90 border border-champagne-500/15 text-zinc-300 text-xs sm:text-sm leading-relaxed shadow-candle-glow">
          {activeTab === 'details' && (
            <div className="space-y-4">
              <div
                dangerouslySetInnerHTML={{ __html: sanitizeHtml(product.descriptionHtml) }}
                className="space-y-3 text-zinc-300/90 leading-relaxed font-light"
              />
              <div className="pt-3">
                <h4 className="font-semibold text-champagne-200 mb-2.5">Key Highlights:</h4>
                <ul className="list-disc list-inside space-y-1.5 text-zinc-400 font-light">
                  {product.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'supplements' && product.supplementFacts && (
            <div className="space-y-6">
              <div className="p-6 rounded-3xl bg-gradient-to-r from-brand-600/15 via-[#141210] to-[#141210] border border-champagne-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-champagne-400 block">
                    Clinical Health Target
                  </span>
                  <span className="font-serif text-lg sm:text-xl font-medium text-white mt-0.5 block">
                    {product.supplementFacts.healthTarget}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-2.5 text-xs">
                  <span className="px-3.5 py-1.5 rounded-xl bg-[#181512] border border-champagne-500/20 text-zinc-300">
                    Serving: <strong className="text-white">{product.supplementFacts.servingSize}</strong>
                  </span>
                  <span className="px-3.5 py-1.5 rounded-xl bg-[#181512] border border-champagne-500/20 text-zinc-300">
                    Doses: <strong className="text-champagne-400">{product.supplementFacts.servingsPerContainer} servings</strong>
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-champagne-200 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Key Active Nutrients & Potency Breakdown:</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.supplementFacts.keyNutrients.map((nutrient, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-[#141210] border border-champagne-500/15 flex items-center gap-3"
                    >
                      <span className="w-2 h-2 rounded-full bg-champagne-400 flex-shrink-0" />
                      <span className="text-xs font-medium text-zinc-200">{nutrient}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#141210] border border-champagne-500/15 space-y-2 text-xs text-zinc-400 font-light">
                <div className="flex items-center gap-2 text-emerald-400 font-medium">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Certified Laboratory Quality & Authenticity Guarantee</span>
                </div>
                <p className="leading-relaxed">
                  100% authentic stock sourced from licensed pharmaceutical distributors of {product.brand} in Pakistan. Compliant with DRAP (Drug Regulatory Authority of Pakistan), British Pharmacopoeia (BP), and ISO/cGMP standards.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'sensory' && (
            <div className="space-y-6">
              <div className="space-y-1">
                <h4 className="text-base font-serif font-normal text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-champagne-400" />
                  Sensory Assessment Profile
                </h4>
                <p className="text-xs text-zinc-400 font-light">
                  Evaluated according to international testing criteria for comfort, tactile sensitivity, and glide.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                {product.sensoryProfile?.thinnessRating !== undefined && (
                  <div className="p-5 rounded-2xl bg-[#141210] border border-champagne-500/15 space-y-2.5">
                    <div className="flex justify-between text-xs font-medium">
                      <span className="text-zinc-200">Skin-on-Skin Thinness</span>
                      <span className="text-champagne-400 font-bold">{product.sensoryProfile.thinnessRating} / 5</span>
                    </div>
                    <div className="w-full h-1.5 bg-[#1C1814] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-champagne-400 rounded-full"
                        style={{ width: `${(product.sensoryProfile.thinnessRating / 5) * 100}%` }}
                      />
                    </div>
                    <span className="text-[10px] text-zinc-500 block">
                      {product.sensoryProfile.thinnessRating >= 4 ? 'Maximum sensitivity and warmth transfer.' : 'Balanced thickness for security.'}
                    </span>
                  </div>
                )}

                {product.sensoryProfile?.delayRating !== undefined && (
                  <div className="p-5 rounded-2xl bg-[#141210] border border-champagne-500/15 space-y-2.5">
                    <div className="flex justify-between text-xs font-medium">
                      <span className="text-zinc-200">Climax Control & Delay</span>
                      <span className="text-champagne-400 font-bold">{product.sensoryProfile.delayRating} / 5</span>
                    </div>
                    <div className="w-full h-1.5 bg-[#1C1814] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-champagne-400 rounded-full"
                        style={{ width: `${(product.sensoryProfile.delayRating / 5) * 100}%` }}
                      />
                    </div>
                    <span className="text-[10px] text-zinc-500 block">
                      {product.sensoryProfile.delayRating >= 4 ? 'Formulated with active desensitising benzocaine.' : 'Standard natural response.'}
                    </span>
                  </div>
                )}

                {product.sensoryProfile?.textureIntensity !== undefined && (
                  <div className="p-5 rounded-2xl bg-[#141210] border border-champagne-500/15 space-y-2.5">
                    <div className="flex justify-between text-xs font-medium">
                      <span className="text-zinc-200">Texture & Friction Intensity</span>
                      <span className="text-champagne-400 font-bold">{product.sensoryProfile.textureIntensity} / 5</span>
                    </div>
                    <div className="w-full h-1.5 bg-[#1C1814] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-champagne-400 rounded-full"
                        style={{ width: `${(product.sensoryProfile.textureIntensity / 5) * 100}%` }}
                      />
                    </div>
                    <span className="text-[10px] text-zinc-500 block">
                      {product.sensoryProfile.textureIntensity >= 4 ? 'Studded beads and circular friction ribs.' : 'Smooth contoured surface.'}
                    </span>
                  </div>
                )}

                {product.sensoryProfile?.lubricationLevel !== undefined && (
                  <div className="p-5 rounded-2xl bg-[#141210] border border-champagne-500/15 space-y-2.5">
                    <div className="flex justify-between text-xs font-medium">
                      <span className="text-zinc-200">Lubrication & Glide</span>
                      <span className="text-champagne-400 font-bold">{product.sensoryProfile.lubricationLevel} / 5</span>
                    </div>
                    <div className="w-full h-1.5 bg-[#1C1814] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-champagne-400 rounded-full"
                        style={{ width: `${(product.sensoryProfile.lubricationLevel / 5) * 100}%` }}
                      />
                    </div>
                    <span className="text-[10px] text-zinc-500 block">
                      Silicone or water-based non-sticky moisture.
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'specs' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-[#141210] border border-champagne-500/15">
                <span className="text-xs text-zinc-500 block">Brand</span>
                <span className="text-sm font-semibold text-zinc-100">{product.brand}</span>
              </div>
              <div className="p-4 rounded-2xl bg-[#141210] border border-champagne-500/15">
                <span className="text-xs text-zinc-500 block">Category</span>
                <span className="text-sm font-semibold text-zinc-100">{product.category}</span>
              </div>
              <div className="p-4 rounded-2xl bg-[#141210] border border-champagne-500/15">
                <span className="text-xs text-zinc-500 block">Texture & Sensation</span>
                <span className="text-sm font-semibold text-zinc-100">{product.texture}</span>
              </div>
              <div className="p-4 rounded-2xl bg-[#141210] border border-champagne-500/15">
                <span className="text-xs text-zinc-500 block">Nominal Width</span>
                <span className="text-sm font-semibold text-zinc-100">
                  {product.nominalWidthMm && product.nominalWidthMm > 0 ? `${product.nominalWidthMm} mm` : 'N/A (Lube / Spray)'}
                </span>
              </div>
              <div className="p-4 rounded-2xl bg-[#141210] border border-champagne-500/15">
                <span className="text-xs text-zinc-500 block">Material Composition</span>
                <span className="text-sm font-semibold text-zinc-100">{product.material}</span>
              </div>
              <div className="p-4 rounded-2xl bg-[#141210] border border-champagne-500/15">
                <span className="text-xs text-zinc-500 block">Quality Certification</span>
                <span className="text-sm font-semibold text-emerald-400">100% Electronically Tested (ISO 4074)</span>
              </div>
            </div>
          )}

          {activeTab === 'shipping' && (
            <div className="space-y-4">
              <h4 className="font-serif text-lg font-normal text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                Zero-Disclosure Packaging Commitment
              </h4>
              <p className="text-zinc-400 font-light leading-relaxed">
                Every order is enclosed in an opaque, neutral cardboard box or heavy black mailer with zero logos, zero product names, and a generic logistics sender label. The delivery rider will not know what is inside.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-2xl bg-[#141210] border border-champagne-500/15 space-y-1">
                  <span className="text-xs font-semibold text-champagne-300">Sender Name on Waybill:</span>
                  <span className="text-xs text-zinc-400 block font-mono">
                    Logistics Fulfillment Hub
                  </span>
                </div>
                <div className="p-5 rounded-2xl bg-[#141210] border border-champagne-500/15 space-y-1">
                  <span className="text-xs font-semibold text-champagne-300">Contents Description:</span>
                  <span className="text-xs text-zinc-400 block font-mono">
                    General Health Goods
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Related Products Recommendations */}
      {relatedProducts.length > 0 && (
        <div className="space-y-6 pt-10 border-t border-champagne-500/15">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[11px] uppercase tracking-widest text-champagne-400 font-semibold block mb-1">
                Curated Additions
              </span>
              <h3 className="font-serif text-2xl font-normal text-white">Complementary Recommendations</h3>
            </div>
            <Link
              href="/products"
              className="text-xs font-semibold text-champagne-400 hover:text-champagne-300 tracking-wider transition-colors"
            >
              View Full Collection →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.slice(0, 3).map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      )}

      {/* Sticky Mobile Add-to-Cart Bar (International Standard: Hims & Ro) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 p-3.5 bg-[#080706]/95 backdrop-blur-md border-t border-champagne-500/20 md:hidden flex items-center justify-between gap-3 shadow-2xl">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-11 h-11 rounded-xl bg-[#110F0D] border border-champagne-500/20 p-1 flex-shrink-0 flex items-center justify-center overflow-hidden">
            <img
              src={product.images[0]?.url}
              alt={product.title}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="min-w-0">
            <p className="text-xs font-medium text-white truncate">{product.title}</p>
            <p className="text-xs font-bold text-champagne-400">
              {formatPKR(currentVariant.priceInMinorUnits)}{' '}
              <span className="text-[10px] text-zinc-400 font-normal">({currentVariant.title})</span>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={handleAddToCart}
            className="py-2.5 px-4 rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 text-white font-medium text-xs shadow-glow-brand flex items-center gap-1.5"
          >
            {isAddedRecently ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Added</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Add to Cart</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
