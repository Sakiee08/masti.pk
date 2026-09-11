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
    <footer className="w-full bg-[#080706] border-t border-[#EAC996]/15 text-[#A8A29E] text-xs">
      {/* 4 Pillars of Trust Section */}
      <div className="border-b border-[#EAC996]/10 py-10 bg-[#0D0B0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#141210] border border-[#EAC996]/15">
              <div className="p-2.5 rounded-lg bg-[#D4AF37]/10 text-[#EAC996]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#F5F2EB]">100% Discreet Packaging</h4>
                <p className="text-[#A8A29E] mt-1 leading-relaxed">
                  Shipped in plain, unbranded kraft cartons or opaque flyers. No logos or product names on exterior.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#141210] border border-[#EAC996]/15">
              <div className="p-2.5 rounded-lg bg-[#D96B43]/10 text-[#E88A6E]">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#F5F2EB]">Fast Nationwide Dispatch</h4>
                <p className="text-[#A8A29E] mt-1 leading-relaxed">
                  24–48 hour delivery in Karachi, Lahore, and Islamabad. 2–3 days nationwide with live SMS tracking.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#141210] border border-[#EAC996]/15">
              <div className="p-2.5 rounded-lg bg-[#D4AF37]/10 text-[#EAC996]">
                <CreditCard className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#F5F2EB]">Cash on Delivery (COD)</h4>
                <p className="text-[#A8A29E] mt-1 leading-relaxed">
                  Pay with physical cash upon delivery at your doorstep, or pay online with Debit/Credit Card.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#141210] border border-[#EAC996]/15">
              <div className="p-2.5 rounded-lg bg-[#34D399]/10 text-[#34D399]">
                <Lock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#F5F2EB]">100% Original Certified</h4>
                <p className="text-[#A8A29E] mt-1 leading-relaxed">
                  Authentic Durex, Masti, Josh, Vitabiotics, and Nutrifactor directly from authorized distributors.
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
            <Link href="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#D96B43] via-[#C85A32] to-[#8E6E16] flex items-center justify-center shadow-[0_0_15px_rgba(217,107,67,0.3)] border border-[#EAC996]/30">
                <Flame className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-[#F5F2EB] flex items-center gap-0.5">
                  Masti<span className="font-serif italic font-normal text-[#EAC996]">.pk</span>
                </span>
                <span className="block text-[8.5px] uppercase tracking-[0.22em] text-[#A8A29E] font-medium -mt-0.5">
                  Discreet Intimacy &amp; Wellness
                </span>
              </div>
            </Link>
            <p className="text-[#A8A29E] leading-relaxed max-w-sm font-light">
              Pakistan’s premier confidential intimacy &amp; vitality store. We believe in providing world-class protection, sensation, and care with uncompromising privacy and respect.
            </p>

            <div className="pt-2">
              <a
                href="https://wa.me/923001234567?text=Hi%2C%20I%20have%20a%20question%20about%20an%20order"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#16291C] hover:bg-[#1E3B27] text-[#34D399] border border-[#34D399]/30 font-medium transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#34D399]" />
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
        <div className="mt-10 pt-6 border-t border-[#EAC996]/15">
          <div className="flex items-center gap-2 mb-3 text-[#D5CEBA] font-medium">
            <Clock className="w-4 h-4 text-[#D96B43]" />
            <span>Fast Express Dispatch Serving Major Cities Across Pakistan:</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {cities.map((city) => (
              <span
                key={city}
                className="px-2.5 py-1 rounded-md bg-[#141210] text-[#A8A29E] text-[11px] border border-[#EAC996]/15 hover:border-[#EAC996]/30 hover:text-[#F5F2EB] transition-colors"
              >
                {city}
              </span>
            ))}
            <span className="px-2.5 py-1 rounded-md bg-[#100E0C] text-[#8A8275] text-[11px] border border-[#302A24]">
              + All other tehsils &amp; districts
            </span>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-8 pt-6 border-t border-[#302A24] flex flex-col sm:flex-row items-center justify-between gap-4 text-[#8A8275] text-[11px]">
          <p>© 2026 Masti.pk. All rights reserved. Discreet Intimacy &amp; Wellness Store.</p>
          <div className="flex items-center gap-4">
            <span>Payment Options: Cash on Delivery (COD) • Visa • Mastercard • UnionPay</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
