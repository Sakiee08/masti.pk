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
        <div className="w-screen max-w-md bg-[#0D0B0A] border-l border-[#EAC996]/20 shadow-2xl flex flex-col">
          {/* Drawer Header */}
          <div className="p-5 border-b border-[#EAC996]/15 flex items-center justify-between bg-[#080706]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#D96B43]/15 text-[#EAC996] flex items-center justify-center border border-[#EAC996]/20">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-base font-semibold text-[#F5F2EB]">Your Private Cart</h2>
                <p className="text-xs text-[#A8A29E]">
                  {items.length} {items.length === 1 ? 'item' : 'items'} selected
                </p>
              </div>
            </div>
            <button
              onClick={closeDrawer}
              aria-label="Close Cart"
              className="p-1.5 rounded-lg text-[#A8A29E] hover:text-[#F5F2EB] hover:bg-[#181512] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="px-5 py-3 bg-[#141210] border-b border-[#EAC996]/15">
            <div className="flex items-center justify-between text-xs mb-1.5">
              {remainingForFreeShipping === 0 ? (
                <span className="text-[#34D399] font-medium flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  Unlocked! Complimentary Delivery across Pakistan
                </span>
              ) : (
                <span className="text-[#D5CEBA]">
                  Add <strong className="text-[#EAC996]">{formatPKR(remainingForFreeShipping)}</strong> more for <strong>Complimentary Delivery</strong>
                </span>
              )}
              <span className="text-[#8A8275] text-[11px]">{freeShippingProgress}%</span>
            </div>
            <div className="w-full h-1.5 bg-[#24201D] rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#D96B43] via-[#D4AF37] to-[#34D399] transition-all duration-300"
                style={{ width: `${freeShippingProgress}%` }}
              />
            </div>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-[#141210] border border-[#EAC996]/15 flex items-center justify-center text-[#8A8275]">
                  <ShoppingBag className="w-8 h-8 text-[#EAC996]" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[#F5F2EB]">Your cart is empty</h3>
                  <p className="text-xs text-[#A8A29E] mt-1 max-w-xs font-light">
                    Explore our certified condoms, long-lasting delay formulas, and intimate lubes.
                  </p>
                </div>
                <Link
                  href="/products"
                  onClick={closeDrawer}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#D96B43] to-[#C85A32] text-white text-xs font-semibold shadow-[0_4px_15px_rgba(217,107,67,0.35)] border border-[#EAC996]/20 transition-all"
                >
                  Browse Products
                </Link>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.variantId}
                  className="p-3.5 rounded-2xl bg-[#141210] border border-[#EAC996]/15 flex gap-3.5 hover:border-[#EAC996]/30 transition-colors"
                >
                  {/* Thumbnail */}
                  <div className="w-16 h-16 rounded-xl bg-[#181512] overflow-hidden relative flex-shrink-0 border border-[#EAC996]/15">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.imageUrl}
                      alt={item.productTitle}
                      className="w-full h-full object-contain p-1"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-1">
                      <div>
                        <span className="text-[9.5px] font-semibold text-[#EAC996] uppercase tracking-[0.14em]">
                          {item.brand}
                        </span>
                        <h4 className="text-xs font-semibold text-[#F5F2EB] line-clamp-1">
                          {item.productTitle}
                        </h4>
                        <span className="text-[11px] text-[#A8A29E] block mt-0.5">
                          {item.variantTitle}
                        </span>
                      </div>
                      <button
                        onClick={() => removeItem(item.variantId)}
                        className="text-[#8A8275] hover:text-[#E88A6E] p-1 transition-colors"
                        title="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity Stepper */}
                      <div className="flex items-center border border-[#EAC996]/20 rounded-lg bg-[#181512]">
                        <button
                          onClick={() => updateQuantity(item.variantId, item.quantity - 1)}
                          className="p-1 hover:bg-[#221E1A] text-[#A8A29E] hover:text-[#F5F2EB] rounded-l-lg transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2.5 text-xs font-semibold text-[#F5F2EB]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.variantId, item.quantity + 1)}
                          className="p-1 hover:bg-[#221E1A] text-[#A8A29E] hover:text-[#F5F2EB] rounded-r-lg transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Total Item Price */}
                      <span className="text-xs font-bold text-[#F5F2EB]">
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
            <div className="p-5 border-t border-[#EAC996]/15 bg-[#080706] space-y-4">
              {/* Coupon Code Input */}
              <div>
                {couponCode ? (
                  <div className="flex items-center justify-between bg-[#34D399]/10 border border-[#34D399]/25 px-3 py-1.5 rounded-xl text-xs">
                    <span className="text-[#34D399] font-medium flex items-center gap-1.5">
                      <Tag className="w-3 h-3" />
                      Code <strong>{couponCode}</strong> applied (10% OFF)
                    </span>
                    <button
                      onClick={removeCoupon}
                      className="text-[#A8A29E] hover:text-[#F5F2EB] text-[11px] underline"
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
                      className="flex-1 bg-[#141210] text-xs text-[#F5F2EB] placeholder-[#8A8275] rounded-xl px-3 py-2 border border-[#EAC996]/20 focus:outline-none focus:border-[#EAC996]/60"
                    />
                    <button
                      type="submit"
                      className="px-3.5 py-2 bg-[#181512] hover:bg-[#221E1A] text-[#EAC996] text-xs font-semibold rounded-xl border border-[#EAC996]/20 transition-colors"
                    >
                      Apply
                    </button>
                  </form>
                )}
                {couponError && (
                  <p className="text-[11px] text-[#E88A6E] mt-1">{couponError}</p>
                )}
              </div>

              {/* Price Breakdown */}
              <div className="space-y-1.5 text-xs text-[#A8A29E]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-[#F5F2EB] font-medium">{formatPKR(subtotalMinor)}</span>
                </div>
                {discountMinor > 0 && (
                  <div className="flex justify-between text-[#34D399]">
                    <span>Discount</span>
                    <span>-{formatPKR(discountMinor)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Estimated Shipping</span>
                  <span className="text-[#F5F2EB] font-medium">
                    {shippingMinor === 0 ? (
                      <span className="text-[#34D399] font-semibold">FREE</span>
                    ) : (
                      formatPKR(shippingMinor)
                    )}
                  </span>
                </div>
                <div className="flex justify-between pt-2 border-t border-[#302A24] text-sm font-bold text-[#F5F2EB]">
                  <span>Total Amount</span>
                  <span className="text-[#EAC996] text-base">{formatPKR(totalMinor)}</span>
                </div>
              </div>

              {/* Discreet Packaging Badge */}
              <div className="p-3 rounded-xl bg-[#141210] border border-[#EAC996]/20 flex items-start gap-2 text-[11px] text-[#D5CEBA]">
                <ShieldCheck className="w-4 h-4 text-[#EAC996] flex-shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#EAC996]">100% Discreet Packaging:</strong> Packed in an unmarked, tamper-evident courier carton. Safe, anonymous delivery guaranteed.
                </span>
              </div>

              {/* Proceed to Checkout CTA */}
              <Link
                href="/checkout"
                onClick={closeDrawer}
                className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-[#D96B43] to-[#C85A32] hover:from-[#C85A32] hover:to-[#B54D28] text-white font-bold text-sm shadow-[0_10px_30px_-8px_rgba(217,107,67,0.5)] border border-[#EAC996]/30 flex items-center justify-center gap-2 transition-all group"
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
