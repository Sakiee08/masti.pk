'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Activity, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Flame, 
  Heart,
  Droplets,
  CheckCircle2
} from 'lucide-react';
import { SEED_PRODUCTS } from '@/data/seed-catalogue';
import { ProductCard } from '@/components/product/ProductCard';

type HealthTarget = 'all' | 'bone' | 'sexual' | 'liver' | 'kidney';

export function SupplementsSection() {
  const [activeTarget, setActiveTarget] = useState<HealthTarget>('sexual');

  const targets = [
    {
      id: 'sexual' as const,
      label: 'Sexual Health & Vitality',
      sublabel: 'Testosterone, Virility & Stamina',
      icon: Flame,
      category: 'Sexual Health & Vitality',
      accent: 'from-purple-500/20 to-brand-500/10 border-purple-500/30 text-purple-400',
      description: 'Clinically formulated with Zinc, Maca, Ginseng, L-Arginine, and pure Himalayan Shilajit to stimulate nitric oxide, boost testosterone, and elevate masculine endurance.',
      brands: 'Vitabiotics Wellman • Nutrifactor Tryception & Duron • Qarshi Gen-Xing & Shahi'
    },
    {
      id: 'bone' as const,
      label: 'Bone & Joint Health',
      sublabel: 'Calcium, Vitamin D3 & Cartilage',
      icon: Activity,
      category: 'Bone & Joint Health',
      accent: 'from-blue-500/20 to-cyan-500/10 border-blue-500/30 text-blue-400',
      description: 'High-potency Calcium Carbonate, Cholecalciferol (D3), Glucosamine, and Chondroitin designed to replenish bone density, cushion knees, and prevent joint wear.',
      brands: 'Vitabiotics Osteocare & Jointace • Nutrifactor Bonex-D & Jointin-D • Nature\'s Bounty'
    },
    {
      id: 'liver' as const,
      label: 'Liver Health & Detox',
      sublabel: 'Silymarin, Milk Thistle & Glutathione',
      icon: Heart,
      category: 'Liver Health & Detox',
      accent: 'from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-400',
      description: 'Standardized 80% Silymarin, Reduced L-Glutathione 500mg, and pure Arctic Cod Liver Oil to accelerate hepatocyte cell repair, optimize liver enzymes, and clear toxins.',
      brands: 'Nutrifactor Liverovit & Glutazon • Qarshi Livakseer • Seven Seas Cod Liver Oil'
    },
    {
      id: 'kidney' as const,
      label: 'Kidney & Urinary Health',
      sublabel: 'Cranberry PACs, Uric Acid & Prostate',
      icon: Droplets,
      category: 'Kidney & Urinary Health',
      accent: 'from-amber-500/20 to-yellow-500/10 border-amber-500/30 text-amber-400',
      description: 'Standardized Cranberry Proanthocyanidins (PACs), Tart Cherry uric acid flush, Saw Palmetto, and classical Unani Zarooni for renal filtration and bladder comfort.',
      brands: 'Nutrifactor Cranflo, Norik & Prostamen • Qarshi Jawarish Zarooni'
    },
  ];

  const currentTargetMeta = targets.find((t) => t.id === activeTarget) || targets[0];

  const filteredSupplements = SEED_PRODUCTS.filter((p) => {
    return p.category === currentTargetMeta.category;
  }).slice(0, 4);

  return (
    <section className="rounded-3xl bg-gradient-to-b from-dark-900/90 to-dark-950 border border-white/10 p-6 sm:p-10 space-y-8 relative overflow-hidden shadow-2xl">
      {/* Subtle background glow */}
      <div className="absolute -top-24 right-10 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Clinical Nutrition & Longevity</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Targeted Health & Vitality Supplements
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl leading-relaxed">
            Sourced directly from certified pharmaceutical laboratories and distributors in Pakistan: 
            <strong className="text-zinc-200"> Nutrifactor</strong>, <strong className="text-zinc-200">Vitabiotics</strong>, <strong className="text-zinc-200">Qarshi</strong>, <strong className="text-zinc-200">Nature&apos;s Bounty</strong> & <strong className="text-zinc-200">Seven Seas</strong>.
          </p>
        </div>

        <Link
          href={`/products?category=${encodeURIComponent(currentTargetMeta.category)}`}
          className="text-xs font-bold text-zinc-300 hover:text-brand-400 flex items-center gap-1.5 transition-colors group flex-shrink-0"
        >
          <span>View All in {currentTargetMeta.label}</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Section Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {targets.map((t) => {
          const Icon = t.icon;
          const isActive = activeTarget === t.id;
          return (
            <button
              key={t.id}
              onClick={() => setActiveTarget(t.id)}
              className={`p-4 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between space-y-3 ${
                isActive
                  ? `bg-gradient-to-br ${t.accent} shadow-lg scale-[1.01] border-white/25`
                  : 'bg-dark-850/60 border-white/5 text-zinc-400 hover:border-white/15 hover:bg-dark-800'
              }`}
            >
              <div className="flex items-center justify-between">
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                    isActive ? 'bg-white/15 text-white' : 'bg-dark-800 text-zinc-400'
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
                  className={`text-xs sm:text-sm font-bold block ${
                    isActive ? 'text-white' : 'text-zinc-200'
                  }`}
                >
                  {t.label}
                </span>
                <span className="text-[11px] text-zinc-400 block mt-0.5">
                  {t.sublabel}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Target Highlight Banner */}
      <div className="p-4 sm:p-5 rounded-2xl bg-dark-850/70 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div className="space-y-1">
          <span className="text-zinc-300 font-semibold block">
            {currentTargetMeta.description}
          </span>
          <span className="text-[11px] text-zinc-500 block">
            Featured Pakistani Brands: <span className="text-brand-400 font-medium">{currentTargetMeta.brands}</span>
          </span>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0 text-[11px] text-emerald-400 font-medium">
          <ShieldCheck className="w-4 h-4" />
          <span>DRAP / cGMP Laboratory Certified</span>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredSupplements.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
