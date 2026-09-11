import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  ShieldCheck, 
  Package, 
  FileText, 
  CreditCard, 
  Lock, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

export const metadata: Metadata = {
  title: '100% Discreet Packaging & Privacy Guarantee | Masti.pk Pakistan',
  description:
    'Learn how Masti.pk protects your privacy. Unbranded plain brown boxes, neutral courier waybills, and complete confidentiality for orders across Pakistan.',
};

export default function DiscreetPackagingPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 space-y-16">
      {/* Header Banner */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-champagne-500/10 text-champagne-300 text-xs font-medium border border-champagne-500/20">
          <ShieldCheck className="w-4 h-4 text-champagne-400" />
          <span>Our Unconditional Privacy Commitment</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight leading-tight">
          How We Protect Your Confidentiality
        </h1>
        <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
          At Masti.pk, we understand that intimate wellness products in Pakistan require absolute discretion. We treat your privacy with rigorous editorial standards. Here is exactly how your order is packed and handled.
        </p>
      </div>

      {/* 4 Steps of Discreet Fulfillment */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 rounded-3xl bg-[#110F0D] border border-champagne-500/15 shadow-candle-glow space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-brand-500/15 text-champagne-400 border border-brand-500/30 flex items-center justify-center">
            <Package className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-xl font-normal text-white">1. Plain, Unmarked Packaging</h3>
          <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
            Your products are sealed in opaque bubble-wrap and placed inside a generic brown corrugated carton or a heavy-duty opaque black poly flyer. There are NO company logos, NO brand graphics, and NO mentions of condoms or lubricants anywhere on the outside.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-[#110F0D] border border-champagne-500/15 shadow-candle-glow space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-champagne-500/15 text-champagne-400 border border-champagne-500/30 flex items-center justify-center">
            <FileText className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-xl font-normal text-white">2. Neutral Courier Airway Bill</h3>
          <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
            The shipping waybill attached to the outside of your box only lists our neutral fulfillment partner name (&quot;Logistics Distribution Hub&quot;) as the sender. The item description field is marked as &quot;Healthcare Essentials&quot; or left intentionally blank.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-[#110F0D] border border-champagne-500/15 shadow-candle-glow space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-brand-500/15 text-champagne-400 border border-brand-500/30 flex items-center justify-center">
            <Lock className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-xl font-normal text-white">3. Tamper-Evident Security Seal</h3>
          <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
            Every parcel is sealed using high-tensile security tape. If the parcel has been opened or tampered with by any third party in transit, the seal will show visible distortion, giving you 100% assurance of integrity.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-[#110F0D] border border-champagne-500/15 shadow-candle-glow space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-950/40 text-emerald-400 border border-emerald-500/30 flex items-center justify-center">
            <CreditCard className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-xl font-normal text-white">4. Discreet Billing Descriptors</h3>
          <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
            If you choose to pay online via card instead of Cash on Delivery, your bank or credit card statement will appear under a neutral merchant name such as &quot;E-Mart Logistics&quot; rather than any sensitive wording.
          </p>
        </div>
      </div>

      {/* Visual Comparison Box */}
      <div className="rounded-3xl bg-[#110F0D] border border-champagne-500/20 shadow-candle-glow p-8 sm:p-10 space-y-6">
        <h2 className="font-serif text-2xl sm:text-3xl font-normal text-white text-center">
          What the Delivery Rider Sees vs. What You See
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          <div className="p-6 rounded-2xl bg-[#141210] border border-champagne-500/15 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-champagne-400">
              Courier Delivery Rider
            </span>
            <ul className="space-y-2.5 text-xs text-zinc-300 font-light">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Sees only your Name, Phone #, and Street Address</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Sees a sealed, solid neutral kraft parcel</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Collects COD cash without any knowledge of contents</span>
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-[#141210] border border-champagne-500/15 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-300">
              Inside Your Parcel (For You Alone)
            </span>
            <ul className="space-y-2.5 text-xs text-zinc-300 font-light">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Original, factory-sealed condom and lube boxes</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Fresh stock with 2–4 years remaining expiry</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Discreet invoice tucked safely inside the sealed carton</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA Bottom */}
      <div className="text-center pt-4">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-brand-600 to-brand-500 text-white font-medium text-sm shadow-glow-brand hover:from-brand-500 hover:to-brand-400 transition-all hover:scale-[1.02] tracking-wide"
        >
          <span>Shop With Total Confidence</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
