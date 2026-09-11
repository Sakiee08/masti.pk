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
    <section className="rounded-3xl bg-dark-900/90 border border-white/10 p-6 sm:p-10 space-y-8 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 text-brand-400 text-xs font-bold border border-brand-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Sensation Matcher</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Find Your Ideal Sensation
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-xl">
            Inspired by international direct-to-consumer intimacy studios. Select the feeling you desire to reveal our certified recommendations.
          </p>
        </div>

        <Link
          href="/products"
          className="text-xs font-bold text-zinc-300 hover:text-brand-400 flex items-center gap-1.5 transition-colors group"
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
                  ? `bg-gradient-to-br ${tab.accent} shadow-lg scale-[1.02] border-white/20`
                  : 'bg-dark-850/60 border-white/5 text-zinc-400 hover:border-white/15 hover:bg-dark-800'
              }`}
            >
              <div className="flex items-center justify-between">
                <div
                  className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                    isActive ? 'bg-white/10 text-white' : 'bg-dark-800 text-zinc-400'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                {isActive && (
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                )}
              </div>

              <div>
                <span
                  className={`text-xs font-bold block ${
                    isActive ? 'text-white' : 'text-zinc-200'
                  }`}
                >
                  {tab.label}
                </span>
                <span className="text-[10px] text-zinc-400 block mt-0.5 line-clamp-1">
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
