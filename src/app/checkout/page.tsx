'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Truck, 
  CreditCard, 
  Banknote, 
  Lock, 
  ArrowLeft, 
  ShoppingBag,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { useCartStore } from '@/lib/store/cart-store';
import { formatPKR, cn } from '@/lib/utils';

export default function CheckoutPage() {
  const router = useRouter();
  const {
    items,
    clearCart,
    getSubtotalMinor,
    getDiscountAmountMinor,
    getShippingFeeMinor,
    getTotalMinor,
    couponCode,
  } = useCartStore();

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [area, setArea] = useState('');
  const [city, setCity] = useState('Lahore');
  const [deliveryNotes, setDeliveryNotes] = useState('');
  const [shippingMethod, setShippingMethod] = useState<'standard' | 'express'>('standard');
  const [paymentMethod, setPaymentMethod] = useState<'cod' | 'card'>('cod');
  const [discreetPackagingChecked, setDiscreetPackagingChecked] = useState(true);
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvc, setCardCvc] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const subtotalMinor = getSubtotalMinor();
  const discountMinor = getDiscountAmountMinor();
  const baseShippingMinor = getShippingFeeMinor();
  const expressSurchargeMinor = shippingMethod === 'express' ? 20000 : 0; // Rs. 200 extra for express
  const finalShippingMinor = baseShippingMinor + expressSurchargeMinor;
  const finalTotalMinor = Math.max(0, subtotalMinor - discountMinor + finalShippingMinor);

  if (items.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-dark-850 mx-auto flex items-center justify-center text-zinc-500">
          <ShoppingBag className="w-8 h-8" />
        </div>
        <h1 className="text-2xl font-bold text-white">Your Cart is Empty</h1>
        <p className="text-xs text-zinc-400">
          Please add items to your cart before proceeding to checkout.
        </p>
        <Link
          href="/products"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-600 text-white text-xs font-bold"
        >
          Browse Catalogue
        </Link>
      </div>
    );
  }

  const handleSubmitOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    // Basic Pakistani phone validation: 03XX-XXXXXXX or 11 digits
    const cleanPhone = phone.replace(/[^0-9]/g, '');
    if (cleanPhone.length < 10 || cleanPhone.length > 12) {
      setFormError('Please enter a valid Pakistani mobile number (e.g. 0300 1234567).');
      return;
    }

    if (!fullName.trim() || !address.trim()) {
      setFormError('Please fill in your name and delivery address.');
      return;
    }

    if (paymentMethod === 'card') {
      if (!cardNumber || !cardExpiry || !cardCvc) {
        setFormError('Please enter your card number, expiry, and CVC for online payment.');
        return;
      }
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/checkout/create-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: items.map((i) => ({
            productId: i.productId,
            variantId: i.variantId,
            quantity: i.quantity,
          })),
          customer: { 
            fullName: fullName.trim(), 
            phone: cleanPhone, 
            email: email.trim() || undefined 
          },
          shipping: {
            address: address.trim(),
            area: area.trim(),
            city,
            notes: deliveryNotes.trim(),
            method: shippingMethod,
          },
          paymentMethod,
          couponCode: couponCode || undefined,
        }),
      });

      const resData = await response.json();

      if (!response.ok || !resData.success) {
        setFormError(resData.message || 'Unable to place order. Please check your details.');
        setIsSubmitting(false);
        return;
      }

      const orderPayload = resData.order;

      // Store in session storage for the confirmation page
      if (typeof window !== 'undefined') {
        sessionStorage.setItem(`order_${resData.orderId}`, JSON.stringify(orderPayload));
      }

      // Clear cart
      clearCart();

      // Navigate to order confirmation
      router.push(`/checkout/success/${resData.orderId}`);
    } catch {
      setFormError('An error occurred while communicating with the checkout server. Please try again.');
      setIsSubmitting(false);
    }
  };

  const cities = [
    'Lahore', 'Karachi', 'Islamabad', 'Rawalpindi', 'Faisalabad', 
    'Multan', 'Peshawar', 'Gujranwala', 'Sialkot', 'Quetta', 'Hyderabad', 
    'Abbottabad', 'Bahawalpur', 'Sargodha', 'Sukkur', 'Gujrat', 'Other'
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8">
        <Link
          href="/cart"
          className="inline-flex items-center gap-2 text-xs text-zinc-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Cart</span>
        </Link>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
          Confidential Checkout
        </h1>
        <p className="text-xs text-zinc-400 mt-1">
          Zero-disclosure packaging guaranteed • Cash on Delivery or Card
        </p>
      </div>

      <form onSubmit={handleSubmitOrder}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          {/* Left Columns (Form Inputs) */}
          <div className="lg:col-span-2 space-y-8">
            {/* Error Banner */}
            {formError && (
              <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-xs text-rose-300 flex items-center gap-2.5">
                <AlertCircle className="w-4 h-4 text-rose-400 flex-shrink-0" />
                <span>{formError}</span>
              </div>
            )}

            {/* 1. Customer Details */}
            <div className="p-6 sm:p-8 rounded-3xl bg-dark-900 border border-white/5 space-y-4">
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-brand-500/20 text-brand-400 text-xs flex items-center justify-center font-bold">
                  1
                </span>
                Recipient Information
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-zinc-300">
                    Full Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Muhammad Ali"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-dark-850 text-xs text-white rounded-xl px-3.5 py-2.5 border border-white/10 focus:outline-none focus:border-brand-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-zinc-300">
                    Mobile Phone Number <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="0300 1234567"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-dark-850 text-xs text-white rounded-xl px-3.5 py-2.5 border border-white/10 focus:outline-none focus:border-brand-500"
                  />
                  <span className="text-[10px] text-zinc-500">
                    Courier rider will call this number prior to delivery
                  </span>
                </div>

                <div className="sm:col-span-2 space-y-1.5">
                  <label className="text-xs font-semibold text-zinc-300">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    placeholder="ali@example.com (for order tracking confirmation)"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-dark-850 text-xs text-white rounded-xl px-3.5 py-2.5 border border-white/10 focus:outline-none focus:border-brand-500"
                  />
                </div>
              </div>
            </div>

            {/* 2. Delivery Address */}
            <div className="p-6 sm:p-8 rounded-3xl bg-dark-900 border border-white/5 space-y-4">
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-brand-500/20 text-brand-400 text-xs flex items-center justify-center font-bold">
                  2
                </span>
                Shipping Address in Pakistan
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-zinc-300">
                    Destination City <span className="text-rose-400">*</span>
                  </label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full bg-dark-850 text-xs text-white rounded-xl px-3.5 py-2.5 border border-white/10 focus:outline-none focus:border-brand-500 cursor-pointer"
                  >
                    {cities.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-zinc-300">
                    Area / Sector / Colony <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. DHA Phase 5, Gulberg, Clifton, F-7"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    className="w-full bg-dark-850 text-xs text-white rounded-xl px-3.5 py-2.5 border border-white/10 focus:outline-none focus:border-brand-500"
                  />
                </div>

                <div className="sm:col-span-2 space-y-1.5">
                  <label className="text-xs font-semibold text-zinc-300">
                    Street Address & House / Apartment # <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="House #, Street #, Building Name or Landmark"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full bg-dark-850 text-xs text-white rounded-xl px-3.5 py-2.5 border border-white/10 focus:outline-none focus:border-brand-500"
                  />
                </div>

                <div className="sm:col-span-2 space-y-1.5">
                  <label className="text-xs font-semibold text-zinc-300">
                    Delivery Instructions for Rider (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Call when outside, leave at gate with guard, do not ring bell"
                    value={deliveryNotes}
                    onChange={(e) => setDeliveryNotes(e.target.value)}
                    className="w-full bg-dark-850 text-xs text-white rounded-xl px-3.5 py-2.5 border border-white/10 focus:outline-none focus:border-brand-500"
                  />
                </div>
              </div>
            </div>

            {/* 3. Shipping Speed */}
            <div className="p-6 sm:p-8 rounded-3xl bg-dark-900 border border-white/5 space-y-4">
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-brand-500/20 text-brand-400 text-xs flex items-center justify-center font-bold">
                  3
                </span>
                Shipping Speed
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <label
                  onClick={() => setShippingMethod('standard')}
                  className={cn(
                    'p-4 rounded-2xl border cursor-pointer transition-all flex items-start justify-between gap-3',
                    shippingMethod === 'standard'
                      ? 'bg-brand-500/10 border-brand-500 text-white'
                      : 'bg-dark-850 border-white/10 text-zinc-400 hover:border-white/20'
                  )}
                >
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-white block">Standard Courier</span>
                    <span className="text-[11px] text-zinc-400 block">
                      24–48 hrs in major cities; 2–3 days nationwide
                    </span>
                  </div>
                  <span className="text-xs font-bold text-zinc-200">
                    {baseShippingMinor === 0 ? 'FREE' : formatPKR(baseShippingMinor)}
                  </span>
                </label>

                <label
                  onClick={() => setShippingMethod('express')}
                  className={cn(
                    'p-4 rounded-2xl border cursor-pointer transition-all flex items-start justify-between gap-3',
                    shippingMethod === 'express'
                      ? 'bg-brand-500/10 border-brand-500 text-white'
                      : 'bg-dark-850 border-white/10 text-zinc-400 hover:border-white/20'
                  )}
                >
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-white block">Express Priority Dispatch</span>
                    <span className="text-[11px] text-zinc-400 block">
                      Same-day dispatch with priority rider routing
                    </span>
                  </div>
                  <span className="text-xs font-bold text-brand-400">
                    +Rs. 200
                  </span>
                </label>
              </div>
            </div>

            {/* 4. Payment Method */}
            <div className="p-6 sm:p-8 rounded-3xl bg-dark-900 border border-white/5 space-y-4">
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-brand-500/20 text-brand-400 text-xs flex items-center justify-center font-bold">
                  4
                </span>
                Payment Method
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {/* Cash on Delivery (COD) Option */}
                <div
                  onClick={() => setPaymentMethod('cod')}
                  className={cn(
                    'p-4 rounded-2xl border cursor-pointer transition-all space-y-2',
                    paymentMethod === 'cod'
                      ? 'bg-emerald-500/10 border-emerald-500 text-white shadow-glow-emerald/20'
                      : 'bg-dark-850 border-white/10 text-zinc-400 hover:border-white/20'
                  )}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Banknote className="w-5 h-5 text-emerald-400" />
                      <span className="text-xs font-bold text-white">Cash on Delivery (COD)</span>
                    </div>
                    {paymentMethod === 'cod' && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    )}
                  </div>
                  <p className="text-[11px] text-zinc-400 leading-relaxed">
                    Pay with cash to the courier rider upon receiving your package. Most popular in Pakistan.
                  </p>
                </div>

                {/* Card Payment (Stripe) Option */}
                <div
                  onClick={() => setPaymentMethod('card')}
                  className={cn(
                    'p-4 rounded-2xl border cursor-pointer transition-all space-y-2',
                    paymentMethod === 'card'
                      ? 'bg-brand-500/10 border-brand-500 text-white shadow-glow-brand/20'
                      : 'bg-dark-850 border-white/10 text-zinc-400 hover:border-white/20'
                  )}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CreditCard className="w-5 h-5 text-brand-400" />
                      <span className="text-xs font-bold text-white">Debit / Credit Card</span>
                    </div>
                    {paymentMethod === 'card' && (
                      <CheckCircle2 className="w-4 h-4 text-brand-400" />
                    )}
                  </div>
                  <p className="text-[11px] text-zinc-400 leading-relaxed">
                    Pay securely online via Stripe. Visa, Mastercard, and UnionPay supported.
                  </p>
                </div>
              </div>

              {/* Card input mock form if card selected */}
              {paymentMethod === 'card' && (
                <div className="p-5 rounded-2xl bg-dark-850 border border-white/10 space-y-3 pt-4">
                  <div className="flex items-center justify-between text-xs text-zinc-400 pb-1">
                    <span className="font-semibold text-white flex items-center gap-1.5">
                      <Lock className="w-3.5 h-3.5 text-emerald-400" />
                      256-Bit SSL Encrypted Card Payment
                    </span>
                    <span className="text-[10px] text-zinc-500">Stripe Verified</span>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] text-zinc-300">Card Number</label>
                    <input
                      type="text"
                      placeholder="4242 •••• •••• 4242"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      className="w-full bg-dark-900 text-xs text-white rounded-xl px-3 py-2 border border-white/10 focus:outline-none focus:border-brand-500 font-mono"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                      <label className="text-[11px] text-zinc-300">Expiry (MM/YY)</label>
                      <input
                        type="text"
                        placeholder="12/28"
                        value={cardExpiry}
                        onChange={(e) => setCardExpiry(e.target.value)}
                        className="w-full bg-dark-900 text-xs text-white rounded-xl px-3 py-2 border border-white/10 focus:outline-none focus:border-brand-500 font-mono"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[11px] text-zinc-300">CVC / Security Code</label>
                      <input
                        type="text"
                        placeholder="123"
                        value={cardCvc}
                        onChange={(e) => setCardCvc(e.target.value)}
                        className="w-full bg-dark-900 text-xs text-white rounded-xl px-3 py-2 border border-white/10 focus:outline-none focus:border-brand-500 font-mono"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 5. Discreet Packaging Guarantee Checkbox */}
            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-start gap-3">
              <input
                type="checkbox"
                id="discreetCheckbox"
                checked={discreetPackagingChecked}
                onChange={(e) => setDiscreetPackagingChecked(e.target.checked)}
                className="w-4 h-4 rounded text-emerald-500 focus:ring-emerald-400 bg-dark-800 border-white/10 cursor-pointer mt-0.5"
              />
              <label htmlFor="discreetCheckbox" className="text-xs text-zinc-300 leading-relaxed cursor-pointer">
                <strong className="text-emerald-400 font-bold block mb-0.5">
                  100% Discreet Packaging Guarantee
                </strong>
                Ship in a plain, unmarked box with zero product names or logos. The sender name will appear as &quot;Logistics Hub&quot;.
              </label>
            </div>
          </div>

          {/* Right Column: Order Review & Confirm CTA */}
          <div className="p-6 rounded-3xl bg-dark-900 border border-white/10 space-y-6 sticky top-28">
            <h2 className="text-base font-bold text-white">Review Your Items</h2>

            <div className="space-y-3 max-h-64 overflow-y-auto pr-1">
              {items.map((item) => (
                <div key={item.variantId} className="flex items-center gap-3 text-xs">
                  <div className="w-12 h-12 rounded-lg bg-dark-800 overflow-hidden flex-shrink-0 border border-white/5">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.imageUrl}
                      alt={item.productTitle}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="font-semibold text-zinc-100 block truncate">
                      {item.productTitle}
                    </span>
                    <span className="text-[11px] text-zinc-400 block">
                      {item.variantTitle} × {item.quantity}
                    </span>
                  </div>
                  <span className="font-bold text-zinc-200">
                    {formatPKR(item.unitPriceInMinorUnits * item.quantity)}
                  </span>
                </div>
              ))}
            </div>

            {/* Calculations */}
            <div className="space-y-2 text-xs text-zinc-400 pt-4 border-t border-white/5">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="text-zinc-200 font-semibold">{formatPKR(subtotalMinor)}</span>
              </div>
              {discountMinor > 0 && (
                <div className="flex justify-between text-emerald-400">
                  <span>Coupon Discount</span>
                  <span>-{formatPKR(discountMinor)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Shipping ({shippingMethod === 'express' ? 'Express' : 'Standard'})</span>
                <span className="text-zinc-200 font-semibold">
                  {finalShippingMinor === 0 ? (
                    <span className="text-emerald-400 font-bold">FREE</span>
                  ) : (
                    formatPKR(finalShippingMinor)
                  )}
                </span>
              </div>
              <div className="flex justify-between pt-3 border-t border-white/10 text-base font-extrabold text-white">
                <span>Payable Amount</span>
                <span className="text-brand-400 text-lg">{formatPKR(finalTotalMinor)}</span>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 disabled:opacity-50 text-white font-extrabold text-sm shadow-glow-brand flex items-center justify-center gap-2 transition-all hover:scale-[1.01]"
            >
              {isSubmitting ? (
                <span>Confirming Order...</span>
              ) : paymentMethod === 'cod' ? (
                <span>Place Order (Cash on Delivery)</span>
              ) : (
                <span>Pay {formatPKR(finalTotalMinor)} Online</span>
              )}
            </button>

            <p className="text-[11px] text-center text-zinc-500">
              By confirming, you acknowledge that your parcel will be delivered in unbranded packaging.
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
