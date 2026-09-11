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
      <div className="flex items-center justify-between pb-6 border-b border-white/10">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">Shopping Cart</h1>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            Review your confidential order before proceeding to checkout
          </p>
        </div>
        <button
          onClick={clearCart}
          className="text-xs text-zinc-400 hover:text-rose-400 transition-colors"
        >
          Clear Cart
        </button>
      </div>

      {/* Free Delivery Bar */}
      <div className="p-4 rounded-2xl bg-dark-900 border border-white/5 space-y-2">
        <div className="flex items-center justify-between text-xs">
          {remainingForFree === 0 ? (
            <span className="text-emerald-400 font-bold flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" />
              Congratulations! Your order qualifies for FREE Express Delivery across Pakistan!
            </span>
          ) : (
            <span className="text-zinc-300">
              Add <strong className="text-brand-400">{formatPKR(remainingForFree)}</strong> more to unlock <strong>FREE Delivery</strong>
            </span>
          )}
          <span className="text-zinc-400 font-mono">{freeShippingProgress}%</span>
        </div>
        <div className="w-full h-2 bg-dark-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-brand-500 to-emerald-400 transition-all duration-300"
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
              className="p-4 sm:p-5 rounded-2xl bg-dark-900 border border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
              <div className="flex items-center gap-4 flex-1">
                <div className="w-20 h-20 rounded-xl bg-dark-800 overflow-hidden flex-shrink-0 border border-white/5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.imageUrl}
                    alt={item.productTitle}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-400">
                    {item.brand}
                  </span>
                  <Link href={`/products/${item.productSlug}`}>
                    <h3 className="text-sm font-bold text-zinc-100 hover:text-brand-400 transition-colors">
                      {item.productTitle}
                    </h3>
                  </Link>
                  <span className="text-xs text-zinc-400 block mt-0.5">
                    {item.variantTitle}
                  </span>
                  <span className="text-xs font-semibold text-zinc-200 mt-1 block sm:hidden">
                    {formatPKR(item.unitPriceInMinorUnits)} each
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-t-0 border-white/5">
                {/* Stepper */}
                <div className="flex items-center border border-white/10 rounded-xl bg-dark-850">
                  <button
                    onClick={() => updateQuantity(item.variantId, item.quantity - 1)}
                    className="p-1.5 text-zinc-400 hover:text-white rounded-l-xl transition-colors"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-3 text-xs font-bold text-white">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.variantId, item.quantity + 1)}
                    className="p-1.5 text-zinc-400 hover:text-white rounded-r-xl transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                <span className="text-sm font-bold text-white min-w-[80px] text-right">
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
              className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Continue Shopping</span>
            </Link>
          </div>
        </div>

        {/* Order Summary Card */}
        <div className="p-6 rounded-3xl bg-dark-900 border border-white/10 space-y-6 sticky top-28">
          <h2 className="text-lg font-bold text-white">Order Summary</h2>

          {/* Promo Code Box */}
          <div>
            {couponCode ? (
              <div className="flex items-center justify-between bg-emerald-500/10 border border-emerald-500/20 p-3 rounded-xl text-xs">
                <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
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
                    className="flex-1 bg-dark-850 text-xs text-white placeholder-zinc-500 rounded-xl px-3 py-2.5 border border-white/10 focus:outline-none focus:border-brand-500 uppercase"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 bg-dark-800 hover:bg-dark-700 text-zinc-200 text-xs font-bold rounded-xl border border-white/10 transition-colors"
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
          <div className="space-y-3 text-xs text-zinc-400 pt-2 border-t border-white/5">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="text-zinc-200 font-semibold">{formatPKR(subtotalMinor)}</span>
            </div>

            {discountMinor > 0 && (
              <div className="flex justify-between text-emerald-400">
                <span>Voucher Discount</span>
                <span>-{formatPKR(discountMinor)}</span>
              </div>
            )}

            <div className="flex justify-between">
              <span>Delivery Fee (Nationwide)</span>
              <span className="text-zinc-200 font-semibold">
                {shippingMinor === 0 ? (
                  <span className="text-emerald-400 font-bold">FREE</span>
                ) : (
                  formatPKR(shippingMinor)
                )}
              </span>
            </div>

            <div className="flex justify-between pt-3 border-t border-white/10 text-base font-extrabold text-white">
              <span>Estimated Total</span>
              <span className="text-brand-400 text-lg">{formatPKR(totalMinor)}</span>
            </div>
          </div>

          {/* Discreet Packaging Pledge */}
          <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 space-y-1.5 text-xs text-emerald-300">
            <div className="flex items-center gap-1.5 font-bold text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>100% Discreet Packaging Included</span>
            </div>
            <p className="text-[11px] text-zinc-300 leading-relaxed">
              Standard unmarked brown box. Neutral label with no product mentions.
            </p>
          </div>

          {/* Checkout CTA */}
          <Link
            href="/checkout"
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 text-white font-extrabold text-sm shadow-glow-brand flex items-center justify-center gap-2 transition-all hover:scale-[1.01]"
          >
            <span>Proceed to Checkout</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
