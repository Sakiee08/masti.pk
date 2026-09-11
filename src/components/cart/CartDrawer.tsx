'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShieldCheck, 
  ArrowRight, 
  ShoppingBag,
  Sparkles,
  Tag
} from 'lucide-react';
import { useCartStore, FREE_SHIPPING_THRESHOLD_MINOR } from '@/lib/store/cart-store';
import { formatPKR } from '@/lib/utils';

export function CartDrawer() {
  const {
    items,
    isDrawerOpen,
    closeDrawer,
    updateQuantity,
    removeItem,
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

  if (!isDrawerOpen) return null;

  const subtotalMinor = getSubtotalMinor();
  const discountMinor = getDiscountAmountMinor();
  const shippingMinor = getShippingFeeMinor();
  const totalMinor = getTotalMinor();
  const freeShippingProgress = getFreeShippingProgress();
  const remainingForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD_MINOR - subtotalMinor);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    setCouponError(null);
    if (!inputCoupon.trim()) return;
    const success = applyCoupon(inputCoupon);
    if (success) {
      setInputCoupon('');
    } else {
      setCouponError('Invalid promo code. Try MASTI10 for 10% off.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Dimmed backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={closeDrawer}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-3 sm:pl-10">
        <div className="w-screen max-w-md bg-dark-900 border-l border-white/10 shadow-2xl flex flex-col">
          {/* Drawer Header */}
          <div className="p-5 border-b border-white/10 flex items-center justify-between bg-dark-950/60">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-brand-500/20 text-brand-400 flex items-center justify-center">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-base font-bold text-white">Your Cart</h2>
                <p className="text-xs text-zinc-400">
                  {items.length} {items.length === 1 ? 'item' : 'items'} selected
                </p>
              </div>
            </div>
            <button
              onClick={closeDrawer}
              aria-label="Close Cart"
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-dark-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="px-5 py-3 bg-dark-850 border-b border-white/5">
            <div className="flex items-center justify-between text-xs mb-1.5">
              {remainingForFreeShipping === 0 ? (
                <span className="text-emerald-400 font-medium flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  Unlocked! Free Delivery across Pakistan
                </span>
              ) : (
                <span className="text-zinc-300">
                  Add <strong className="text-brand-400">{formatPKR(remainingForFreeShipping)}</strong> more for <strong>FREE Delivery</strong>
                </span>
              )}
              <span className="text-zinc-500 text-[11px]">{freeShippingProgress}%</span>
            </div>
            <div className="w-full h-1.5 bg-dark-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-brand-500 to-emerald-400 transition-all duration-300"
                style={{ width: `${freeShippingProgress}%` }}
              />
            </div>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-dark-800 flex items-center justify-center text-zinc-500">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-zinc-200">Your cart is empty</h3>
                  <p className="text-xs text-zinc-400 mt-1 max-w-xs">
                    Explore our certified condoms, long-lasting delay formulas, and intimate lubes.
                  </p>
                </div>
                <Link
                  href="/products"
                  onClick={closeDrawer}
                  className="px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white text-xs font-semibold shadow-glow-brand transition-all"
                >
                  Browse Products
                </Link>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.variantId}
                  className="p-3.5 rounded-xl bg-dark-850/70 border border-white/5 flex gap-3.5 hover:border-white/10 transition-colors"
                >
                  {/* Thumbnail */}
                  <div className="w-16 h-16 rounded-lg bg-dark-800 overflow-hidden relative flex-shrink-0 border border-white/5">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.imageUrl}
                      alt={item.productTitle}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-1">
                      <div>
                        <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                          {item.brand}
                        </span>
                        <h4 className="text-xs font-semibold text-zinc-100 line-clamp-1">
                          {item.productTitle}
                        </h4>
                        <span className="text-[11px] text-zinc-400 block mt-0.5">
                          {item.variantTitle}
                        </span>
                      </div>
                      <button
                        onClick={() => removeItem(item.variantId)}
                        className="text-zinc-500 hover:text-rose-400 p-1 transition-colors"
                        title="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity Stepper */}
                      <div className="flex items-center border border-white/10 rounded-lg bg-dark-900">
                        <button
                          onClick={() => updateQuantity(item.variantId, item.quantity - 1)}
                          className="p-1 hover:bg-dark-800 text-zinc-400 hover:text-white rounded-l-lg transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2.5 text-xs font-semibold text-zinc-200">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.variantId, item.quantity + 1)}
                          className="p-1 hover:bg-dark-800 text-zinc-400 hover:text-white rounded-r-lg transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Total Item Price */}
                      <span className="text-xs font-bold text-zinc-100">
                        {formatPKR(item.unitPriceInMinorUnits * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Drawer Footer & Checkout Action */}
          {items.length > 0 && (
            <div className="p-5 border-t border-white/10 bg-dark-950/80 space-y-4">
              {/* Coupon Code Input */}
              <div>
                {couponCode ? (
                  <div className="flex items-center justify-between bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-lg text-xs">
                    <span className="text-emerald-400 font-medium flex items-center gap-1.5">
                      <Tag className="w-3 h-3" />
                      Code <strong>{couponCode}</strong> applied (10% OFF)
                    </span>
                    <button
                      onClick={removeCoupon}
                      className="text-zinc-400 hover:text-white text-[11px] underline"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleApplyCoupon} className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Promo code (e.g. MASTI10)"
                      value={inputCoupon}
                      onChange={(e) => setInputCoupon(e.target.value)}
                      className="flex-1 bg-dark-850 text-xs text-zinc-100 placeholder-zinc-500 rounded-lg px-3 py-2 border border-white/10 focus:outline-none focus:border-brand-500"
                    />
                    <button
                      type="submit"
                      className="px-3.5 py-2 bg-dark-800 hover:bg-dark-700 text-zinc-200 text-xs font-semibold rounded-lg border border-white/10 transition-colors"
                    >
                      Apply
                    </button>
                  </form>
                )}
                {couponError && (
                  <p className="text-[11px] text-rose-400 mt-1">{couponError}</p>
                )}
              </div>

              {/* Price Breakdown */}
              <div className="space-y-1.5 text-xs text-zinc-400">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-zinc-200 font-medium">{formatPKR(subtotalMinor)}</span>
                </div>
                {discountMinor > 0 && (
                  <div className="flex justify-between text-emerald-400">
                    <span>Discount</span>
                    <span>-{formatPKR(discountMinor)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Estimated Shipping</span>
                  <span className="text-zinc-200 font-medium">
                    {shippingMinor === 0 ? (
                      <span className="text-emerald-400 font-semibold">FREE</span>
                    ) : (
                      formatPKR(shippingMinor)
                    )}
                  </span>
                </div>
                <div className="flex justify-between pt-2 border-t border-white/5 text-sm font-bold text-white">
                  <span>Total Amount</span>
                  <span className="text-brand-400 text-base">{formatPKR(totalMinor)}</span>
                </div>
              </div>

              {/* Discreet Packaging Badge */}
              <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-start gap-2 text-[11px] text-emerald-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>100% Discreet Packaging:</strong> Packed in an unmarked, tamper-evident courier box. Safe, anonymous delivery guaranteed.
                </span>
              </div>

              {/* Proceed to Checkout CTA */}
              <Link
                href="/checkout"
                onClick={closeDrawer}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 text-white font-bold text-sm shadow-glow-brand flex items-center justify-center gap-2 transition-all group"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
