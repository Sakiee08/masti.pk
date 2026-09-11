'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import confetti from 'canvas-confetti';
import { 
  CheckCircle2, 
  Package, 
  ShieldCheck, 
  Clock, 
  ArrowRight, 
  MessageCircle, 
  Truck
} from 'lucide-react';
import { formatPKR } from '@/lib/utils';

interface OrderSuccessProps {
  params: {
    orderId: string;
  };
}

export default function OrderSuccessPage({ params }: OrderSuccessProps) {
  const { orderId } = params;
  const [orderData, setOrderData] = useState<any>(null);

  useEffect(() => {
    // Fire festive confetti animation
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#f43f5e', '#10b981', '#f59e0b', '#3b82f6'],
    });

    if (typeof window !== 'undefined') {
      const stored = sessionStorage.getItem(`order_${orderId}`);
      if (stored) {
        try {
          setOrderData(JSON.parse(stored));
        } catch {
          // ignore
        }
      }
    }
  }, [orderId]);

  return (
    <div className="max-w-3xl mx-auto px-4 py-16 sm:py-24 text-center space-y-8">
      {/* Success Badge */}
      <div className="w-20 h-20 rounded-3xl bg-emerald-950/40 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/30 shadow-candle-glow">
        <CheckCircle2 className="w-10 h-10" />
      </div>

      <div className="space-y-3">
        <span className="text-xs font-semibold uppercase tracking-widest text-champagne-400 bg-champagne-500/10 px-3.5 py-1 rounded-full border border-champagne-500/20">
          Order Successfully Placed
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-normal text-white tracking-tight">
          Thank You for Your Order
        </h1>
        <p className="text-sm text-zinc-300 max-w-lg mx-auto font-light leading-relaxed">
          Your order has been recorded in our fulfillment system and will be prepared in an unmarked, confidential box.
        </p>
      </div>

      {/* Order Reference Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#110F0D] border border-champagne-500/20 shadow-candle-glow text-left space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-champagne-500/15">
          <div>
            <span className="text-xs text-zinc-400 block font-light">Order Reference Number</span>
            <span className="text-lg font-mono font-bold text-champagne-300 mt-0.5 block">
              {orderId}
            </span>
          </div>

          <div className="sm:text-right">
            <span className="text-xs text-zinc-400 block font-light">Payment Method</span>
            <span className="text-xs font-medium text-emerald-400 mt-0.5 inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              {orderData?.payment?.method === 'card'
                ? 'Paid Online (Stripe)'
                : 'Cash on Delivery (Pay upon arrival)'}
            </span>
          </div>
        </div>

        {/* Discreet Delivery Commitment */}
        <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/20 flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
          <div className="space-y-1 text-xs">
            <h4 className="font-medium text-emerald-300">100% Discreet Packaging Confirmed</h4>
            <p className="text-zinc-300 font-light leading-relaxed">
              Your parcel will arrive in a plain, unbranded cardboard carton or black opaque courier flyer. The courier rider will have no knowledge of the items.
            </p>
          </div>
        </div>

        {/* Next Steps Timeline */}
        <div className="space-y-3 pt-2">
          <h3 className="text-xs font-semibold text-champagne-300 uppercase tracking-wider">
            What Happens Next:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-4 rounded-2xl bg-[#141210] border border-champagne-500/15 space-y-1.5">
              <div className="flex items-center gap-1.5 text-champagne-400 font-medium">
                <Package className="w-4 h-4" />
                <span>1. Packing</span>
              </div>
              <p className="text-zinc-400 text-[11px] font-light leading-relaxed">
                Discreetly packed and sealed with tamper-evident security tape.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#141210] border border-champagne-500/15 space-y-1.5">
              <div className="flex items-center gap-1.5 text-champagne-300 font-medium">
                <Truck className="w-4 h-4" />
                <span>2. Dispatch</span>
              </div>
              <p className="text-zinc-400 text-[11px] font-light leading-relaxed">
                Dispatched via courier. You will receive an SMS with tracking details.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#141210] border border-champagne-500/15 space-y-1.5">
              <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
                <Clock className="w-4 h-4" />
                <span>3. Delivery</span>
              </div>
              <p className="text-zinc-400 text-[11px] font-light leading-relaxed">
                Rider calls prior to arrival. Pay cash if COD was selected.
              </p>
            </div>
          </div>
        </div>

        {/* Customer Support Callout */}
        <div className="pt-4 border-t border-champagne-500/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <span className="text-zinc-400 font-light">Need to update your delivery address or instructions?</span>
          <a
            href={`https://wa.me/923001234567?text=Hi%2C%20I%20need%20assistance%20with%20Order%20${orderId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-950/40 text-emerald-300 border border-emerald-500/30 font-medium hover:bg-emerald-900/40 transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Return to Store */}
      <div className="pt-4">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 text-white font-medium text-xs shadow-glow-brand transition-all tracking-wide"
        >
          <span>Continue Shopping</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
