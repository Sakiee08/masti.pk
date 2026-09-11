'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Trash2, 
  Plus, 
  Minus, 
  ShieldCheck, 
  ArrowRight, 
  ShoppingBag, 
  Sparkles,
  ArrowLeft,
  Tag
} from 'lucide-react';
import { useCartStore, FREE_SHIPPING_THRESHOLD_MINOR } from '@/lib/store/cart-store';
import { formatPKR } from '@/lib/utils';

export default function CartPage() {
  const {
    items,
    updateQuantity,
    removeItem,
    clearCart,
    getSubtotalMinor,
    getDiscountAmountMinor,
    getShippingFeeMinor,
    getTotalMinor,
    getFreeShippingProgress,
    couponCode,
    applyCoupon,
    removeCoupon,
  } = useCartStore();

  const [inputCoupon, setInputCoupon] = useState('');
  const [couponError, setCouponError] = useState<string | null>(null);

  const subtotalMinor = getSubtotalMinor();
  const discountMinor = getDiscountAmountMinor();
  const shippingMinor = getShippingFeeMinor();
  const totalMinor = getTotalMinor();
  const freeShippingProgress = getFreeShippingProgress();
  const remainingForFree = Math.max(0, FREE_SHIPPING_THRESHOLD_MINOR - subtotalMinor);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    setCouponError(null);
    if (!inputCoupon.trim()) return;
    const ok = applyCoupon(inputCoupon);
    if (ok) {
      setInputCoupon('');
    } else {
      setCouponError('Invalid promo code. Use MASTI10 for 10% off.');
    }
  };

  if (items.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-6">
        <div className="w-20 h-20 rounded-3xl bg-dark-850 mx-auto flex items-center justify-center text-zinc-500 border border-white/5">
          <ShoppingBag className="w-10 h-10" />
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-white">Your Shopping Cart is Empty</h1>
          <p className="text-sm text-zinc-400 max-w-md mx-auto">
            Discover ultra thin condoms, extended delay formulas, and intimate lubricants delivered in 100% discreet packaging.
          </p>
        </div>
        <Link
          href="/products"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-sm shadow-glow-brand transition-all"
        >
          <span>Explore Products</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between pb-6 border-b border-champagne-500/15">
        <div>
          <h1 className="font-serif text-3xl sm:text-4xl font-normal text-white tracking-tight">Shopping Cart</h1>
          <p className="text-xs sm:text-sm text-champagne-400/80 mt-1 font-light">
            Review your confidential order before proceeding to checkout
          </p>
        </div>
        <button
          onClick={clearCart}
          className="text-xs text-zinc-400 hover:text-rose-400 transition-colors font-light"
        >
          Clear Cart
        </button>
      </div>

      {/* Free Delivery Bar */}
      <div className="p-5 rounded-3xl bg-[#110F0D] border border-champagne-500/15 shadow-candle-glow space-y-2.5">
        <div className="flex items-center justify-between text-xs">
          {remainingForFree === 0 ? (
            <span className="text-emerald-400 font-medium flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-champagne-400" />
              Congratulations! Your order qualifies for FREE Express Delivery across Pakistan!
            </span>
          ) : (
            <span className="text-zinc-300 font-light">
              Add <strong className="text-champagne-400 font-semibold">{formatPKR(remainingForFree)}</strong> more to unlock <strong className="text-white">FREE Delivery</strong>
            </span>
          )}
          <span className="text-champagne-400 font-mono font-medium">{freeShippingProgress}%</span>
        </div>
        <div className="w-full h-1.5 bg-[#181512] rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-brand-500 via-champagne-400 to-emerald-400 transition-all duration-500"
            style={{ width: `${freeShippingProgress}%` }}
          />
        </div>
      </div>

      {/* Main 2-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
        {/* Items Table */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <div
              key={item.variantId}
              className="p-5 sm:p-6 rounded-3xl bg-[#110F0D] border border-champagne-500/15 shadow-candle-glow flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
              <div className="flex items-center gap-4 flex-1">
                <div className="w-20 h-20 rounded-2xl bg-[#141210] overflow-hidden flex-shrink-0 border border-champagne-500/15 p-2 flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.imageUrl}
                    alt={item.productTitle}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-champagne-400">
                    {item.brand}
                  </span>
                  <Link href={`/products/${item.productSlug}`}>
                    <h3 className="text-sm font-medium text-zinc-100 hover:text-champagne-300 transition-colors">
                      {item.productTitle}
                    </h3>
                  </Link>
                  <span className="text-xs text-zinc-400 block mt-0.5 font-light">
                    {item.variantTitle}
                  </span>
                  <span className="text-xs font-semibold text-champagne-400 mt-1 block sm:hidden">
                    {formatPKR(item.unitPriceInMinorUnits)} each
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-t-0 border-white/5">
                {/* Stepper */}
                <div className="flex items-center border border-champagne-500/20 rounded-xl bg-[#141210]">
                  <button
                    onClick={() => updateQuantity(item.variantId, item.quantity - 1)}
                    className="p-2 text-zinc-400 hover:text-white rounded-l-xl transition-colors"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-3.5 text-xs font-semibold text-white">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.variantId, item.quantity + 1)}
                    className="p-2 text-zinc-400 hover:text-white rounded-r-xl transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                <span className="text-sm font-semibold text-champagne-300 min-w-[80px] text-right">
                  {formatPKR(item.unitPriceInMinorUnits * item.quantity)}
                </span>

                <button
                  onClick={() => removeItem(item.variantId)}
                  className="text-zinc-500 hover:text-rose-400 p-1 transition-colors"
                  title="Remove from cart"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}

          <div className="pt-2">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-xs font-medium text-zinc-400 hover:text-champagne-300 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Continue Shopping</span>
            </Link>
          </div>
        </div>

        {/* Order Summary Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#110F0D] border border-champagne-500/20 shadow-candle-glow space-y-6 sticky top-28">
          <h2 className="text-lg font-serif font-normal text-white">Order Summary</h2>

          {/* Promo Code Box */}
          <div>
            {couponCode ? (
              <div className="flex items-center justify-between bg-emerald-950/30 border border-emerald-500/30 p-3 rounded-xl text-xs">
                <span className="text-emerald-400 font-medium flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5" />
                  Code {couponCode} Applied (10% OFF)
                </span>
                <button
                  onClick={removeCoupon}
                  className="text-zinc-400 hover:text-white underline text-[11px]"
                >
                  Remove
                </button>
              </div>
            ) : (
              <form onSubmit={handleApplyCoupon} className="space-y-2">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Coupon (e.g. MASTI10)"
                    value={inputCoupon}
                    onChange={(e) => setInputCoupon(e.target.value)}
                    className="flex-1 bg-[#141210] text-xs text-white placeholder-zinc-500 rounded-xl px-3 py-2.5 border border-champagne-500/20 focus:outline-none focus:border-champagne-400 uppercase font-mono"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 bg-[#181512] hover:bg-[#201D19] text-champagne-300 text-xs font-medium rounded-xl border border-champagne-500/20 transition-colors"
                  >
                    Apply
                  </button>
                </div>
                {couponError && (
                  <p className="text-[11px] text-rose-400">{couponError}</p>
                )}
              </form>
            )}
          </div>

          {/* Pricing Calculations */}
          <div className="space-y-2.5 text-xs text-zinc-400 pt-2 border-t border-champagne-500/15">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="text-zinc-200 font-medium">{formatPKR(subtotalMinor)}</span>
            </div>

            {discountMinor > 0 && (
              <div className="flex justify-between text-emerald-400">
                <span>Voucher Discount</span>
                <span>-{formatPKR(discountMinor)}</span>
              </div>
            )}

            <div className="flex justify-between">
              <span>Delivery Fee (Nationwide)</span>
              <span className="text-zinc-200 font-medium">
                {shippingMinor === 0 ? (
                  <span className="text-emerald-400 font-bold">FREE</span>
                ) : (
                  formatPKR(shippingMinor)
                )}
              </span>
            </div>

            <div className="flex justify-between pt-3.5 border-t border-champagne-500/15 text-base font-serif font-normal text-white">
              <span>Estimated Total</span>
              <span className="text-champagne-400 text-xl font-sans font-bold">{formatPKR(totalMinor)}</span>
            </div>
          </div>

          {/* Discreet Packaging Pledge */}
          <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/20 space-y-1.5 text-xs text-emerald-300">
            <div className="flex items-center gap-1.5 font-medium text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>100% Discreet Packaging Included</span>
            </div>
            <p className="text-[11px] text-zinc-300 font-light leading-relaxed">
              Standard unmarked brown box. Neutral label with no product mentions.
            </p>
          </div>

          {/* Checkout CTA */}
          <Link
            href="/checkout"
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 text-white font-medium text-sm shadow-glow-brand flex items-center justify-center gap-2 transition-all hover:scale-[1.01] tracking-wide"
          >
            <span>Proceed to Checkout</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
