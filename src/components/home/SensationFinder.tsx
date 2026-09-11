'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Sparkles, 
  Flame, 
  Layers, 
  Heart, 
  Gift, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { SEED_PRODUCTS } from '@/data/seed-catalogue';
import { ProductCard } from '@/components/product/ProductCard';

type SensationKey = 'all' | 'delay' | 'thin' | 'textured' | 'lube' | 'bundle';

export function SensationFinder() {
  const [activeSensation, setActiveSensation] = useState<SensationKey>('delay');

  const sensationTabs: Array<{
    id: SensationKey;
    label: string;
    sublabel: string;
    icon: React.ElementType;
    accent: string;
  }> = [
    {
      id: 'delay',
      label: 'Climax Control & Delay',
      sublabel: 'Last longer and balance intimacy',
      icon: Flame,
      accent: 'from-purple-500/20 to-brand-500/10 border-purple-500/30 text-purple-400',
    },
    {
      id: 'thin',
      label: 'Barely-There Skin Feel',
      sublabel: 'Maximum warmth and sensitivity',
      icon: Sparkles,
      accent: 'from-blue-500/20 to-cyan-500/10 border-blue-500/30 text-blue-400',
    },
    {
      id: 'textured',
      label: 'Intense Texture & Friction',
      sublabel: 'Raised dots and circular ribs',
      icon: Layers,
      accent: 'from-brand-500/20 to-rose-500/10 border-brand-500/30 text-brand-400',
    },
    {
      id: 'lube',
      label: 'Sensual Massage & Glides',
      sublabel: 'Water-soluble hydration & foreplay',
      icon: Heart,
      accent: 'from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-400',
    },
    {
      id: 'bundle',
      label: 'Couples Exploration Sets',
      sublabel: 'Curated complete variety boxes',
      icon: Gift,
      accent: 'from-amber-500/20 to-yellow-500/10 border-amber-500/30 text-amber-400',
    },
  ];

  const matchedProducts = SEED_PRODUCTS.filter((p) => {
    if (activeSensation === 'delay') return p.category === 'Delay & Climax' || p.badge === 'Max Delay';
    if (activeSensation === 'thin') return p.texture === 'Ultra Thin' || p.badge === 'Ultra Thin';
    if (activeSensation === 'textured') return p.texture === 'Dotted & Ribbed' || p.texture === 'Dotted';
    if (activeSensation === 'lube') return p.category === 'Lubricants';
    if (activeSensation === 'bundle') return p.category === 'Value Packs';
    return true;
  }).slice(0, 4);

  return (
    <section className="rounded-3xl bg-gradient-to-b from-[#141210] via-[#100E0C] to-[#0A0908] border border-[#EAC996]/20 p-6 sm:p-10 space-y-8 relative overflow-hidden shadow-2xl">
      {/* Background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D96B43]/08 rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 text-[#EAC996] text-xs font-semibold border border-[#D4AF37]/25">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Sensation Matcher</span>
          </div>
          <h2 className="editorial-title text-2xl sm:text-4xl font-normal text-[#F5F2EB]">
            Find Your Ideal <span className="font-serif italic text-[#EAC996]">Sensation</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#A8A29E] max-w-xl font-light">
            Inspired by international intimate design studios. Select the feeling you desire to reveal our certified recommendations.
          </p>
        </div>

        <Link
          href="/products"
          className="text-xs font-bold text-[#EAC996] hover:text-[#FFF0D6] flex items-center gap-1.5 transition-colors group"
        >
          <span>Explore All {SEED_PRODUCTS.length} Products</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Sensation Filter Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {sensationTabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeSensation === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveSensation(tab.id)}
              className={`p-4 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between space-y-3 ${
                isActive
                  ? 'bg-[#1C1814] border-[#EAC996]/40 text-[#F5F2EB] shadow-[0_8px_25px_-5px_rgba(217,107,67,0.25)] scale-[1.02]'
                  : 'bg-[#13110E] border-[#EAC996]/10 text-[#A8A29E] hover:border-[#EAC996]/25 hover:bg-[#181512]'
              }`}
            >
              <div className="flex items-center justify-between">
                <div
                  className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                    isActive ? 'bg-[#D96B43]/20 text-[#E88A6E] border border-[#D96B43]/30' : 'bg-[#181512] text-[#8A8275]'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                {isActive && (
                  <span className="w-2 h-2 rounded-full bg-[#EAC996] shadow-[0_0_8px_rgba(234,201,150,0.8)]" />
                )}
              </div>

              <div>
                <span
                  className={`text-xs font-semibold block ${
                    isActive ? 'text-[#F5F2EB]' : 'text-[#D5CEBA]'
                  }`}
                >
                  {tab.label}
                </span>
                <span className="text-[10px] text-[#8A8275] block mt-0.5 line-clamp-1 font-light">
                  {tab.sublabel}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Matching Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
        {matchedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
