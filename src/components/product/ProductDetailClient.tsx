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
        <Link href="/" className="hover:text-white transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link href="/products" className="hover:text-white transition-colors">
          Catalogue
        </Link>
        <span>/</span>
        <Link
          href={`/products?category=${encodeURIComponent(product.category)}`}
          className="hover:text-white transition-colors"
        >
          {product.category}
        </Link>
        <span>/</span>
        <span className="text-zinc-200 truncate">{product.title}</span>
      </nav>

      {/* Main Product Hero Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Column: Media Gallery */}
        <div className="space-y-4">
          <div className="aspect-[4/3] sm:aspect-square rounded-3xl bg-dark-900 border border-white/10 overflow-hidden relative group flex items-center justify-center p-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={currentImage?.url}
              alt={currentImage?.altText || product.title}
              className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
            />
            {product.badge && (
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-600 text-white shadow-lg">
                {product.badge}
              </span>
            )}
            <div className="absolute bottom-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-dark-950/85 backdrop-blur-md text-emerald-400 text-xs font-semibold border border-emerald-500/30">
              <ShieldCheck className="w-4 h-4" />
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
                    'w-20 h-20 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 bg-dark-900 p-2 flex items-center justify-center',
                    selectedImageIndex === idx
                      ? 'border-brand-500 shadow-glow-brand/40'
                      : 'border-white/10 hover:border-white/30'
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
            <div className="flex items-center gap-3 text-xs mb-2">
              <span className="font-bold uppercase tracking-widest text-brand-400 bg-brand-500/10 px-2.5 py-0.5 rounded-full border border-brand-500/20">
                {product.brand}
              </span>
              <div className="flex items-center gap-1 text-amber-400 font-semibold">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <span>{product.rating.toFixed(1)}</span>
                <span className="text-zinc-500">({product.reviewCount} verified reviews)</span>
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              {product.title}
            </h1>
            <p className="text-sm text-zinc-300 mt-2 leading-relaxed">
              {product.tagline}
            </p>
          </div>

          {/* Dynamic Price Display */}
          <div className="p-5 rounded-2xl bg-dark-850/80 border border-white/10 space-y-1">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-extrabold text-white">
                {formatPKR(currentVariant.priceInMinorUnits)}
              </span>
              {currentVariant.compareAtPriceInMinorUnits && (
                <span className="text-base text-zinc-500 line-through">
                  {formatPKR(currentVariant.compareAtPriceInMinorUnits)}
                </span>
              )}
              {discount && (
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-500 text-white">
                  Save {discount}%
                </span>
              )}
            </div>
            <div className="flex items-center justify-between text-xs text-zinc-400 pt-1">
              <span>GST inclusive • All taxes paid</span>
              {unitPriceRupees && (
                <span className="text-emerald-400 font-bold">
                  Just Rs. {unitPriceRupees} / unit
                </span>
              )}
            </div>
          </div>

          {/* Pack Size / Variant Selector */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-semibold text-zinc-300 uppercase tracking-wider">
                Select Option / Pack Size:
              </span>
              <span className="text-brand-400 font-medium">{currentVariant.title}</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {product.variants.map((v, idx) => (
                <button
                  key={v.id}
                  onClick={() => setSelectedVariantIndex(idx)}
                  className={cn(
                    'p-3.5 rounded-2xl border text-left transition-all flex flex-col justify-between',
                    selectedVariantIndex === idx
                      ? 'bg-brand-500/15 border-brand-500 text-white shadow-glow-brand/20'
                      : 'bg-dark-850 border-white/10 text-zinc-400 hover:border-white/20'
                  )}
                >
                  <span className="text-xs font-bold text-zinc-200">{v.title}</span>
                  <span className="text-xs font-extrabold text-brand-400 mt-1">
                    {formatPKR(v.priceInMinorUnits)}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Stepper & Actions */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-4">
              <span className="text-xs font-semibold text-zinc-300">Quantity:</span>
              <div className="flex items-center border border-white/10 rounded-xl bg-dark-850">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2.5 text-zinc-400 hover:text-white hover:bg-dark-800 rounded-l-xl transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 text-sm font-bold text-white">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2.5 text-zinc-400 hover:text-white hover:bg-dark-800 rounded-r-xl transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <button
                onClick={handleAddToCart}
                className={cn(
                  'w-full py-4 px-6 rounded-xl font-bold text-sm shadow-sm flex items-center justify-center gap-2 transition-all',
                  isAddedRecently
                    ? 'bg-emerald-600 text-white'
                    : 'bg-dark-800 hover:bg-dark-700 text-white border border-white/10'
                )}
              >
                {isAddedRecently ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Added to Cart</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4 text-brand-400" />
                    <span>Add to Cart</span>
                  </>
                )}
              </button>

              <button
                onClick={handleBuyNow}
                className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 text-white font-bold text-sm shadow-glow-brand flex items-center justify-center gap-2 transition-all hover:scale-[1.01]"
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
                className="w-full py-3 px-4 rounded-xl bg-emerald-600/15 hover:bg-emerald-600/25 border border-emerald-500/30 text-emerald-300 font-semibold text-xs flex items-center justify-center gap-2 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Order via WhatsApp (100% Confidential)</span>
              </a>
            </div>
          </div>

          {/* Delivery Estimator for Pakistan */}
          <div className="p-4 rounded-2xl bg-dark-900 border border-white/5 space-y-3 text-xs">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-zinc-200 flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-blue-400" />
                Delivery to Your City:
              </span>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="bg-dark-800 text-zinc-200 border border-white/10 rounded-lg px-2.5 py-1 text-xs focus:outline-none focus:border-brand-500 cursor-pointer"
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

            <p className="text-zinc-400 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-brand-400 flex-shrink-0" />
              <span>{getDeliveryEstimate()}</span>
            </p>

            <p className="text-[11px] text-emerald-400 font-medium">
              🚚 Orders over Rs. 2,000 qualify for FREE delivery across Pakistan!
            </p>
          </div>
        </div>
      </div>

      {/* Tabbed Product Details Section */}
      <div className="pt-8 border-t border-white/10 space-y-6">
        <div className="flex border-b border-white/10 overflow-x-auto gap-2">
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
                'py-3 px-4 text-xs font-bold transition-all border-b-2 whitespace-nowrap',
                activeTab === tab.id
                  ? 'border-brand-500 text-white'
                  : 'border-transparent text-zinc-400 hover:text-zinc-200'
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="p-6 sm:p-8 rounded-3xl bg-dark-900/60 border border-white/5 text-zinc-300 text-xs sm:text-sm leading-relaxed">
          {activeTab === 'details' && (
            <div className="space-y-4">
              <div
                dangerouslySetInnerHTML={{ __html: sanitizeHtml(product.descriptionHtml) }}
                className="space-y-3 text-zinc-300 leading-relaxed"
              />
              <div className="pt-3">
                <h4 className="font-bold text-white mb-2">Key Highlights:</h4>
                <ul className="list-disc list-inside space-y-1.5 text-zinc-400">
                  {product.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'supplements' && product.supplementFacts && (
            <div className="space-y-6">
              <div className="p-5 rounded-2xl bg-gradient-to-r from-brand-600/15 via-dark-850 to-dark-850 border border-brand-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-400 block">
                    Clinical Health Target
                  </span>
                  <span className="text-base sm:text-lg font-extrabold text-white">
                    {product.supplementFacts.healthTarget}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="px-3 py-1.5 rounded-xl bg-dark-900 border border-white/10 text-zinc-300">
                    Serving: <strong className="text-white">{product.supplementFacts.servingSize}</strong>
                  </span>
                  <span className="px-3 py-1.5 rounded-xl bg-dark-900 border border-white/10 text-zinc-300">
                    Doses: <strong className="text-emerald-400">{product.supplementFacts.servingsPerContainer} servings</strong>
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Key Active Nutrients & Potency Breakdown:</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.supplementFacts.keyNutrients.map((nutrient, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-2xl bg-dark-850 border border-white/5 flex items-center gap-3"
                    >
                      <span className="w-2.5 h-2.5 rounded-full bg-brand-500 flex-shrink-0" />
                      <span className="text-xs font-semibold text-zinc-200">{nutrient}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-dark-850/80 border border-white/5 space-y-1.5 text-xs text-zinc-400">
                <div className="flex items-center gap-2 text-emerald-400 font-bold">
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
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-brand-400" />
                  Sensory Assessment Profile
                </h4>
                <p className="text-xs text-zinc-400">
                  Evaluated according to international testing criteria for comfort, tactile sensitivity, and glide.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                {product.sensoryProfile?.thinnessRating !== undefined && (
                  <div className="p-4 rounded-2xl bg-dark-850 border border-white/5 space-y-2">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-zinc-200">Skin-on-Skin Thinness</span>
                      <span className="text-cyan-400">{product.sensoryProfile.thinnessRating} / 5</span>
                    </div>
                    <div className="w-full h-2 bg-dark-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-cyan-400 rounded-full"
                        style={{ width: `${(product.sensoryProfile.thinnessRating / 5) * 100}%` }}
                      />
                    </div>
                    <span className="text-[10px] text-zinc-500 block">
                      {product.sensoryProfile.thinnessRating >= 4 ? 'Maximum sensitivity and warmth transfer.' : 'Balanced thickness for security.'}
                    </span>
                  </div>
                )}

                {product.sensoryProfile?.delayRating !== undefined && (
                  <div className="p-4 rounded-2xl bg-dark-850 border border-white/5 space-y-2">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-zinc-200">Climax Control & Delay</span>
                      <span className="text-purple-400">{product.sensoryProfile.delayRating} / 5</span>
                    </div>
                    <div className="w-full h-2 bg-dark-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-purple-500 rounded-full"
                        style={{ width: `${(product.sensoryProfile.delayRating / 5) * 100}%` }}
                      />
                    </div>
                    <span className="text-[10px] text-zinc-500 block">
                      {product.sensoryProfile.delayRating >= 4 ? 'Formulated with active desensitising benzocaine.' : 'Standard natural response.'}
                    </span>
                  </div>
                )}

                {product.sensoryProfile?.textureIntensity !== undefined && (
                  <div className="p-4 rounded-2xl bg-dark-850 border border-white/5 space-y-2">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-zinc-200">Texture & Friction Intensity</span>
                      <span className="text-rose-400">{product.sensoryProfile.textureIntensity} / 5</span>
                    </div>
                    <div className="w-full h-2 bg-dark-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-rose-500 rounded-full"
                        style={{ width: `${(product.sensoryProfile.textureIntensity / 5) * 100}%` }}
                      />
                    </div>
                    <span className="text-[10px] text-zinc-500 block">
                      {product.sensoryProfile.textureIntensity >= 4 ? 'Studded beads and circular friction ribs.' : 'Smooth contoured surface.'}
                    </span>
                  </div>
                )}

                {product.sensoryProfile?.lubricationLevel !== undefined && (
                  <div className="p-4 rounded-2xl bg-dark-850 border border-white/5 space-y-2">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-zinc-200">Lubrication & Glide</span>
                      <span className="text-emerald-400">{product.sensoryProfile.lubricationLevel} / 5</span>
                    </div>
                    <div className="w-full h-2 bg-dark-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-emerald-400 rounded-full"
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
              <div className="p-4 rounded-2xl bg-dark-850 border border-white/5">
                <span className="text-xs text-zinc-500 block">Brand</span>
                <span className="text-sm font-bold text-zinc-100">{product.brand}</span>
              </div>
              <div className="p-4 rounded-2xl bg-dark-850 border border-white/5">
                <span className="text-xs text-zinc-500 block">Category</span>
                <span className="text-sm font-bold text-zinc-100">{product.category}</span>
              </div>
              <div className="p-4 rounded-2xl bg-dark-850 border border-white/5">
                <span className="text-xs text-zinc-500 block">Texture & Sensation</span>
                <span className="text-sm font-bold text-zinc-100">{product.texture}</span>
              </div>
              <div className="p-4 rounded-2xl bg-dark-850 border border-white/5">
                <span className="text-xs text-zinc-500 block">Nominal Width</span>
                <span className="text-sm font-bold text-zinc-100">
                  {product.nominalWidthMm && product.nominalWidthMm > 0 ? `${product.nominalWidthMm} mm` : 'N/A (Lube / Spray)'}
                </span>
              </div>
              <div className="p-4 rounded-2xl bg-dark-850 border border-white/5">
                <span className="text-xs text-zinc-500 block">Material Composition</span>
                <span className="text-sm font-bold text-zinc-100">{product.material}</span>
              </div>
              <div className="p-4 rounded-2xl bg-dark-850 border border-white/5">
                <span className="text-xs text-zinc-500 block">Quality Certification</span>
                <span className="text-sm font-bold text-emerald-400">100% Electronically Tested (ISO 4074)</span>
              </div>
            </div>
          )}

          {activeTab === 'shipping' && (
            <div className="space-y-4">
              <h4 className="font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                Zero-Disclosure Packaging Commitment
              </h4>
              <p className="text-zinc-400 leading-relaxed">
                Every order is enclosed in an opaque, neutral cardboard box or heavy black mailer with zero logos, zero product names, and a generic logistics sender label. The delivery rider will not know what is inside.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-dark-850 border border-white/5 space-y-1">
                  <span className="text-xs font-bold text-white">Sender Name on Waybill:</span>
                  <span className="text-xs text-zinc-400 block font-mono">
                    Logistics Fulfillment Hub
                  </span>
                </div>
                <div className="p-4 rounded-2xl bg-dark-850 border border-white/5 space-y-1">
                  <span className="text-xs font-bold text-white">Contents Description:</span>
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
        <div className="space-y-6 pt-10 border-t border-white/10">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-white">Complementary Recommendations</h3>
            <Link
              href="/products"
              className="text-xs font-bold text-brand-400 hover:text-brand-300"
            >
              View Full Collection
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
      <div className="fixed bottom-0 left-0 right-0 z-40 p-3 bg-dark-950/95 backdrop-blur-md border-t border-white/10 md:hidden flex items-center justify-between gap-3 shadow-2xl">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-11 h-11 rounded-lg bg-dark-900 border border-white/10 p-1 flex-shrink-0 flex items-center justify-center overflow-hidden">
            <img
              src={product.images[0]?.url}
              alt={product.title}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="min-w-0">
            <p className="text-xs font-bold text-white truncate">{product.title}</p>
            <p className="text-xs font-extrabold text-brand-400">
              {formatPKR(currentVariant.priceInMinorUnits)}{' '}
              <span className="text-[10px] text-zinc-400 font-normal">({currentVariant.title})</span>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={handleAddToCart}
            className="py-2.5 px-4 rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 text-white font-bold text-xs shadow-glow-brand flex items-center gap-1.5"
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
