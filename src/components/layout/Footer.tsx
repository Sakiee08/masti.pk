import React from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Truck, 
  CreditCard, 
  Lock, 
  Flame, 
  MessageCircle, 
  Clock, 
  Package
} from 'lucide-react';

export function Footer() {
  const cities = [
    'Karachi', 'Lahore', 'Islamabad', 'Rawalpindi', 'Faisalabad', 
    'Multan', 'Peshawar', 'Gujranwala', 'Sialkot', 'Quetta', 'Hyderabad', 'Bahawalpur'
  ];

  return (
    <footer className="w-full bg-dark-950 border-t border-white/10 text-zinc-400 text-xs">
      {/* 4 Pillars of Trust Section */}
      <div className="border-b border-white/5 py-10 bg-dark-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start gap-3.5 p-4 rounded-xl bg-dark-850/60 border border-white/5">
              <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-zinc-100">100% Discreet Packaging</h4>
                <p className="text-zinc-400 mt-1 leading-relaxed">
                  Shipped in plain, unbranded brown boxes or flyers. No logos or product names on the exterior.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-4 rounded-xl bg-dark-850/60 border border-white/5">
              <div className="p-2.5 rounded-lg bg-brand-500/10 text-brand-400">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-zinc-100">Fast Nationwide Shipping</h4>
                <p className="text-zinc-400 mt-1 leading-relaxed">
                  24–48 hour delivery in Karachi, Lahore, and Islamabad. 2–3 days nationwide with live SMS tracking.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-4 rounded-xl bg-dark-850/60 border border-white/5">
              <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-400">
                <CreditCard className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-zinc-100">Cash on Delivery (COD)</h4>
                <p className="text-zinc-400 mt-1 leading-relaxed">
                  Pay securely with cash upon delivery at your doorstep, or pay online with Debit/Credit Card.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-4 rounded-xl bg-dark-850/60 border border-white/5">
              <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-400">
                <Lock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-zinc-100">100% Original Certified</h4>
                <p className="text-zinc-400 mt-1 leading-relaxed">
                  Authentic Durex, Masti, Josh, Moods, and Carex directly from authorized pharmaceutical distributors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Intro & Helpline */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-glow-brand">
                <Flame className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1">
                  Masti<span className="text-brand-500">.pk</span>
                </span>
                <span className="block text-[10px] uppercase tracking-widest text-zinc-400 font-semibold -mt-0.5">
                  Discreet Wellness
                </span>
              </div>
            </Link>
            <p className="text-zinc-400 leading-relaxed max-w-sm">
              Pakistan’s premier confidential intimacy store. We believe in providing premium protection, sensation, and care with uncompromising privacy and respect for our customers.
            </p>

            <div className="pt-2">
              <a
                href="https://wa.me/923001234567?text=Hi%2C%20I%20have%20a%20question%20about%20an%20order"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 font-medium transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Confidential WhatsApp Helpline</span>
              </a>
            </div>
          </div>

          {/* Quick Categories */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-zinc-200 uppercase tracking-wider">
              Top Categories
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/products?category=Condoms" className="hover:text-white transition-colors">
                  Ultra Thin Condoms
                </Link>
              </li>
              <li>
                <Link href="/products?category=Delay+%26+Climax" className="hover:text-white transition-colors">
                  Delay & Long Lasting
                </Link>
              </li>
              <li>
                <Link href="/products?texture=Dotted+%26+Ribbed" className="hover:text-white transition-colors">
                  Dotted & Textured
                </Link>
              </li>
              <li>
                <Link href="/products?category=Sensory+%26+Flavours" className="hover:text-white transition-colors">
                  Flavoured (Strawberry, Chocolate)
                </Link>
              </li>
              <li>
                <Link href="/products?category=Lubricants" className="hover:text-white transition-colors">
                  Intimate Lubricants & Gels
                </Link>
              </li>
              <li>
                <Link href="/products?category=Value+Packs" className="hover:text-white transition-colors">
                  Value Packs & Couples Kits
                </Link>
              </li>
            </ul>
          </div>

          {/* Top Brands */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-zinc-200 uppercase tracking-wider">
              Featured Brands
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/products?brand=Durex" className="hover:text-white transition-colors">
                  Durex Pakistan
                </Link>
              </li>
              <li>
                <Link href="/products?brand=Masti" className="hover:text-white transition-colors">
                  Masti Condoms
                </Link>
              </li>
              <li>
                <Link href="/products?brand=Josh" className="hover:text-white transition-colors">
                  Josh Condoms
                </Link>
              </li>
              <li>
                <Link href="/products?brand=Carex" className="hover:text-white transition-colors">
                  Carex Condoms
                </Link>
              </li>
              <li>
                <Link href="/products?brand=Combo+Kits" className="hover:text-white transition-colors">
                  Special Curated Combos
                </Link>
              </li>
            </ul>
          </div>

          {/* Trust & Discreet Delivery */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-zinc-200 uppercase tracking-wider">
              Customer Care & Privacy
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/discreet-packaging" className="text-emerald-400 font-medium hover:underline flex items-center gap-1">
                  <Package className="w-3.5 h-3.5" />
                  <span>How We Pack Your Order</span>
                </Link>
              </li>
              <li>
                <Link href="/cart" className="hover:text-white transition-colors">
                  View Shopping Cart
                </Link>
              </li>
              <li>
                <Link href="/checkout" className="hover:text-white transition-colors">
                  Fast Checkout (COD)
                </Link>
              </li>
              <li>
                <span className="text-zinc-500 cursor-default">
                  Discreet Support: 7 Days / Week
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Cities Delivery Badge Grid */}
        <div className="mt-10 pt-6 border-t border-white/5">
          <div className="flex items-center gap-2 mb-3 text-zinc-400 font-medium">
            <Clock className="w-4 h-4 text-brand-400" />
            <span>Fast Express Dispatch Serving Major Cities Across Pakistan:</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {cities.map((city) => (
              <span
                key={city}
                className="px-2.5 py-1 rounded-md bg-dark-850 text-zinc-400 text-[11px] border border-white/5"
              >
                {city}
              </span>
            ))}
            <span className="px-2.5 py-1 rounded-md bg-dark-850/50 text-zinc-500 text-[11px]">
              + All other tehsils & districts
            </span>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-500 text-[11px]">
          <p>© 2026 Masti.pk. All rights reserved. Registered D2C Healthcare & Wellness Store.</p>
          <div className="flex items-center gap-4">
            <span>Payment Options: Cash on Delivery (COD) • Visa • Mastercard • UnionPay</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
