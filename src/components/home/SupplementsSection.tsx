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
    <section className="rounded-3xl bg-gradient-to-b from-[#141210] via-[#100E0C] to-[#0A0908] border border-[#EAC996]/20 p-6 sm:p-10 space-y-8 relative overflow-hidden shadow-2xl">
      {/* Subtle background glow */}
      <div className="absolute -top-24 right-10 w-96 h-96 bg-[#D96B43]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/10 text-[#EAC996] text-xs font-semibold border border-[#D4AF37]/25">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Clinical Nutrition &amp; Longevity</span>
          </div>
          <h2 className="editorial-title text-2xl sm:text-4xl font-normal text-[#F5F2EB] tracking-tight">
            Targeted Health &amp; <span className="font-serif italic text-[#EAC996]">Vitality Supplements</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#A8A29E] max-w-2xl leading-relaxed font-light">
            Sourced directly from certified pharmaceutical laboratories and distributors in Pakistan: 
            <strong className="text-[#F5F2EB] font-medium"> Nutrifactor</strong>, <strong className="text-[#F5F2EB] font-medium">Vitabiotics</strong>, <strong className="text-[#F5F2EB] font-medium">Qarshi</strong>, <strong className="text-[#F5F2EB] font-medium">Nature&apos;s Bounty</strong> &amp; <strong className="text-[#F5F2EB] font-medium">Seven Seas</strong>.
          </p>
        </div>

        <Link
          href={`/products?category=${encodeURIComponent(currentTargetMeta.category)}`}
          className="text-xs font-bold text-[#EAC996] hover:text-[#FFF0D6] flex items-center gap-1.5 transition-colors group flex-shrink-0"
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
              className={`p-4 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between space-y-3 ${
                isActive
                  ? 'bg-[#1C1814] border-[#EAC996]/40 text-[#F5F2EB] shadow-[0_8px_25px_-5px_rgba(217,107,67,0.25)] scale-[1.01]'
                  : 'bg-[#13110E] border-[#EAC996]/10 text-[#A8A29E] hover:border-[#EAC996]/25 hover:bg-[#181512]'
              }`}
            >
              <div className="flex items-center justify-between">
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                    isActive ? 'bg-[#D96B43]/20 text-[#E88A6E] border border-[#D96B43]/30' : 'bg-[#181512] text-[#8A8275]'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                {isActive && (
                  <span className="w-2 h-2 rounded-full bg-[#34D399] shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                )}
              </div>

              <div>
                <span
                  className={`text-xs sm:text-sm font-semibold block ${
                    isActive ? 'text-[#F5F2EB]' : 'text-[#D5CEBA]'
                  }`}
                >
                  {t.label}
                </span>
                <span className="text-[11px] text-[#8A8275] block mt-0.5 font-light">
                  {t.sublabel}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Target Highlight Banner */}
      <div className="p-4 sm:p-5 rounded-2xl bg-[#161311] border border-[#EAC996]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div className="space-y-1">
          <span className="text-[#D5CEBA] font-normal block leading-relaxed">
            {currentTargetMeta.description}
          </span>
          <span className="text-[11px] text-[#8A8275] block">
            Featured Pakistani Brands: <span className="text-[#EAC996] font-medium">{currentTargetMeta.brands}</span>
          </span>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0 text-[11px] text-[#34D399] font-medium">
          <ShieldCheck className="w-4 h-4" />
          <span>DRAP / cGMP Certified</span>
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
