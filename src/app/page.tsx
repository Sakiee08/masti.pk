import React from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Truck, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Flame, 
  Lock, 
  Layers, 
  Heart,
  HelpCircle,
  Star,
  Quote,
  Zap,
  Gift
} from 'lucide-react';
import { SEED_PRODUCTS } from '@/data/seed-catalogue';
import { ProductCard } from '@/components/product/ProductCard';
import { SensationFinder } from '@/components/home/SensationFinder';
import { SupplementsSection } from '@/components/home/SupplementsSection';

export default function HomePage() {
  const bestSellers = SEED_PRODUCTS.slice(0, 4);
  const featuredDelayAndThin = SEED_PRODUCTS.filter(
    (p) => p.category === 'Delay & Climax' || p.texture === 'Ultra Thin'
  ).slice(0, 4);

  const testimonials = [
    {
      name: 'Usman K.',
      location: 'DHA Phase 6, Lahore',
      rating: 5,
      comment: 'Ordered Durex Extended Pleasure and the 2-in-1 Aloe Gel. Parcel arrived in less than 24 hours in a completely unmarked brown box. Even the courier rider had no idea. 100% genuine products.',
      verified: 'Verified Buyer',
    },
    {
      name: 'Hamza S.',
      location: 'Clifton, Karachi',
      rating: 5,
      comment: 'Finally a reliable store in Pakistan where you don’t have to feel awkward buying condoms at local pharmacies. Cash on delivery was seamless, and the packaging was completely confidential.',
      verified: 'Verified Buyer',
    },
    {
      name: 'Ali & Sarah',
      location: 'Sector F-7, Islamabad',
      rating: 5,
      comment: 'The Couples Variety Bundle is great value. Authentic Durex Fetherlite and original Aloe Vera massage gel. High quality packaging and excellent customer service on WhatsApp.',
      verified: 'Verified Buyer',
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      {/* 1. HERO SECTION - International Editorial Luxury */}
      <section className="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-32 border-b border-[#EAC996]/15">
        {/* Ambient background glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#D96B43]/12 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-[450px] h-[350px] bg-[#D4AF37]/08 rounded-full blur-[110px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            {/* Pill Header */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#181512]/90 border border-[#EAC996]/20 text-xs font-semibold text-[#D5CEBA] backdrop-blur-md shadow-lg">
              <ShieldCheck className="w-4 h-4 text-[#EAC996]" />
              <span>100% Discreet Packaging</span>
              <span className="text-[#594E42]">•</span>
              <span className="text-[#34D399] font-bold">Cash on Delivery Nationwide</span>
            </div>

            {/* Main Headline */}
            <h1 className="editorial-title text-4xl sm:text-6xl lg:text-7xl font-light text-[#F5F2EB] tracking-tight">
              Intimacy,{' '}
              <span className="font-serif italic font-normal text-[#EAC996]">
                Elevated.
              </span>
              <span className="block velvet-gradient-text font-sans font-extrabold tracking-tight mt-1 text-3xl sm:text-5xl lg:text-6xl">
                Delivered 100% Discreetly.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#C7C0B0] max-w-2xl mx-auto leading-relaxed font-normal">
              Authentic Durex, Masti &amp; Josh condoms, long-lasting delay formulas, and intimate lubricants. Shipped across Pakistan in unmarked plain kraft boxes with zero exterior product labels.
            </p>

            {/* CTA Buttons */}
            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/products"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-[#D96B43] to-[#C85A32] hover:from-[#C85A32] hover:to-[#B54D28] text-white font-bold text-sm shadow-[0_10px_30px_-8px_rgba(217,107,67,0.5)] border border-[#EAC996]/30 flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
              >
                <span>Shop All Products</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/discreet-packaging"
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-[#181512] hover:bg-[#221E1A] text-[#F5F2EB] font-semibold text-sm border border-[#EAC996]/20 flex items-center justify-center gap-2 transition-all"
              >
                <ShieldCheck className="w-4 h-4 text-[#EAC996]" />
                <span>Our Privacy Guarantee</span>
              </Link>
            </div>

            {/* Trust Badges Row */}
            <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
              <div className="p-3.5 rounded-2xl bg-[#141210] border border-[#EAC996]/15 hover:border-[#EAC996]/30 transition-colors flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#E88A6E] flex-shrink-0" />
                <span className="text-xs font-semibold text-[#D5CEBA]">100% Original Certified</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#141210] border border-[#EAC996]/15 hover:border-[#EAC996]/30 transition-colors flex items-center gap-2.5">
                <Lock className="w-4 h-4 text-[#EAC996] flex-shrink-0" />
                <span className="text-xs font-semibold text-[#D5CEBA]">Unbranded Kraft Box</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#141210] border border-[#EAC996]/15 hover:border-[#EAC996]/30 transition-colors flex items-center gap-2.5">
                <Truck className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span className="text-xs font-semibold text-[#D5CEBA]">24-48h Fast Dispatch</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#141210] border border-[#EAC996]/15 hover:border-[#EAC996]/30 transition-colors flex items-center gap-2.5">
                <Star className="w-4 h-4 text-[#EAC996] flex-shrink-0 fill-[#EAC996]" />
                <span className="text-xs font-semibold text-[#D5CEBA]">4.9/5 Rating (12k+ Orders)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE SENSATION FINDER (International Feature) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SensationFinder />
      </section>

      {/* 3. BEST SELLERS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="editorial-caps text-[#EAC996] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Most Ordered
            </span>
            <h2 className="editorial-title text-2xl sm:text-4xl font-normal text-[#F5F2EB] mt-1">
              Best Sellers in <span className="font-serif italic text-[#EAC996]">Pakistan</span>
            </h2>
          </div>
          <Link
            href="/products"
            className="text-xs font-bold text-[#EAC996] hover:text-[#FFF0D6] flex items-center gap-1 transition-colors"
          >
            <span>View Full Range</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 4. TARGETED SUPPLEMENTS & VITALITY (Bone, Sexual, Liver & Kidney Health) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SupplementsSection />
      </section>

      {/* 5. DISCREET PACKAGING UNBOXING EXPERIENCE (World-Class Standard) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-b from-[#161310] via-[#110F0D] to-[#0A0908] border border-[#EAC996]/20 p-8 sm:p-12 overflow-hidden relative shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/10 text-[#EAC996] text-xs font-semibold border border-[#D4AF37]/25">
                <ShieldCheck className="w-4 h-4 text-[#EAC996]" />
                <span>Our Unbreakable Privacy Pledge</span>
              </div>

              <h2 className="editorial-title text-3xl sm:text-5xl font-normal text-[#F5F2EB] leading-tight">
                How Your Order Arrives <span className="font-serif italic text-[#EAC996]">at Your Doorstep</span>
              </h2>

              <p className="text-sm sm:text-base text-[#C7C0B0] leading-relaxed font-light">
                We understand that privacy is paramount. When you order from Masti.pk, no courier delivery person, family member, or neighbour will ever know what is inside.
              </p>

              <div className="space-y-3.5">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#D4AF37]/15 text-[#EAC996] flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#F5F2EB]">Plain, Unbranded Outer Box</h4>
                    <p className="text-xs text-[#A8A29E]">Standard brown cardboard carton or black opaque flyer with zero logos.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#D4AF37]/15 text-[#EAC996] flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#F5F2EB]">Neutral Courier Waybill</h4>
                    <p className="text-xs text-[#A8A29E]">Sender is listed as &quot;Logistics Fulfillment Hub&quot;. Product description says &quot;Health Supplies&quot; or is blank.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#D4AF37]/15 text-[#EAC996] flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#F5F2EB]">Tamper-Evident Security Seal</h4>
                    <p className="text-xs text-[#A8A29E]">Reinforced adhesive tape guarantees your parcel cannot be opened and resealed in transit.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/discreet-packaging"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#EAC996] hover:text-[#FFF0D6]"
                >
                  <span>Learn more about our packaging standards</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Visual Comparison: Outside vs Inside */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-[#0E0C0A] border border-[#EAC996]/15 space-y-3 text-center">
                <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/15 text-[#EAC996] mx-auto flex items-center justify-center">
                  <Lock className="w-5 h-5" />
                </div>
                <span className="editorial-caps text-[#A8A29E] block">
                  Outside (What Courier Sees)
                </span>
                <div className="h-28 rounded-xl bg-[#201A14] border-2 border-dashed border-[#8E6E16]/50 flex flex-col items-center justify-center p-3 text-[10px] font-mono text-[#D5CEBA]">
                  <span className="tracking-widest">UNMARKED KRAFT BOX</span>
                  <span className="text-[9px] text-[#8A8275] mt-1">Waybill: Logistics Hub</span>
                  <span className="text-[9px] text-[#8A8275]">Desc: Health Goods</span>
                </div>
                <p className="text-[11px] text-[#A8A29E]">Zero brand or product mentions.</p>
              </div>

              <div className="p-6 rounded-2xl bg-[#0E0C0A] border border-[#EAC996]/15 space-y-3 text-center">
                <div className="w-10 h-10 rounded-xl bg-[#D96B43]/15 text-[#E88A6E] mx-auto flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <span className="editorial-caps text-[#A8A29E] block">
                  Inside (For You Alone)
                </span>
                <div className="h-28 rounded-xl bg-[#181512] border border-[#EAC996]/20 flex flex-col items-center justify-center p-3 text-[10px] text-[#F5F2EB]">
                  <span className="font-bold text-[#34D399]">100% Genuine Certified</span>
                  <span className="text-[9px] text-[#A8A29E] mt-1">Fresh 2-4 Yr Expiry</span>
                  <span className="text-[9px] text-[#A8A29E]">Discreet Private Receipt</span>
                </div>
                <p className="text-[11px] text-[#A8A29E]">Tamper-evident sealed security.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TOP RATED DELAY & SKIN-ON-SKIN COLLECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="editorial-caps text-[#E88A6E] flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5" />
              Sensation Favorites
            </span>
            <h2 className="editorial-title text-2xl sm:text-4xl font-normal text-[#F5F2EB] mt-1">
              Performance &amp; <span className="font-serif italic text-[#EAC996]">Sensitivity</span> Specials
            </h2>
          </div>
          <Link
            href="/products?category=Delay+%26+Climax"
            className="text-xs font-bold text-[#EAC996] hover:text-[#FFF0D6] flex items-center gap-1 transition-colors"
          >
            <span>View Delay Products</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredDelayAndThin.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 6. VERIFIED CUSTOMER REVIEWS (International Social Proof) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-10">
          <span className="editorial-caps text-[#EAC996]">
            Real Experiences
          </span>
          <h2 className="editorial-title text-2xl sm:text-4xl font-normal text-[#F5F2EB]">
            Trusted by <span className="font-serif italic text-[#EAC996]">12,000+ Couples</span> Across Pakistan
          </h2>
          <p className="text-xs sm:text-sm text-[#A8A29E]">
            Rated 4.9 out of 5 stars based on verified buyer satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-[#13110F] border border-[#EAC996]/15 hover:border-[#EAC996]/30 transition-all duration-300 space-y-4 flex flex-col justify-between shadow-xl"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex text-[#D4AF37]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-[#EAC996] bg-[#D4AF37]/15 px-2.5 py-0.5 rounded-full border border-[#D4AF37]/25">
                    {t.verified}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#D5CEBA] leading-relaxed italic font-serif">
                  &quot;{t.comment}&quot;
                </p>
              </div>

              <div className="pt-3 border-t border-[#302A24] flex items-center justify-between text-xs">
                <span className="font-bold text-[#F5F2EB]">{t.name}</span>
                <span className="text-[#8A8275] text-[11px]">{t.location}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. COMMON QUESTIONS (FAQ) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-10">
          <span className="editorial-caps text-[#EAC996] flex items-center justify-center gap-1.5">
            <HelpCircle className="w-4 h-4" />
            Got Questions?
          </span>
          <h2 className="editorial-title text-2xl sm:text-4xl font-normal text-[#F5F2EB]">
            Frequently Asked <span className="font-serif italic text-[#EAC996]">Questions</span>
          </h2>
        </div>

        <div className="space-y-4">
          <div className="p-5 rounded-2xl bg-[#13110F] border border-[#EAC996]/15 space-y-2">
            <h4 className="text-sm font-semibold text-[#F5F2EB]">
              Will the courier rider know what is inside my parcel?
            </h4>
            <p className="text-xs text-[#A8A29E] leading-relaxed">
              No, absolutely not. All shipments are packed in heavy-gauge plain brown cartons or solid black flyers. The airway bill only mentions &quot;General Health Supplies&quot; and our registered fulfillment entity name. The rider has zero knowledge of the contents.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#13110F] border border-[#EAC996]/15 space-y-2">
            <h4 className="text-sm font-semibold text-[#F5F2EB]">
              How does Cash on Delivery (COD) work?
            </h4>
            <p className="text-xs text-[#A8A29E] leading-relaxed">
              You place your order online without entering any credit card details. When the courier arrives at your address, you hand over the exact cash amount in Pakistani Rupees and receive your sealed parcel.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#13110F] border border-[#EAC996]/15 space-y-2">
            <h4 className="text-sm font-semibold text-[#F5F2EB]">
              How fast is delivery in Karachi, Lahore, and Islamabad?
            </h4>
            <p className="text-xs text-[#A8A29E] leading-relaxed">
              Orders placed before 3:00 PM are dispatched the same day. Deliveries in Lahore, Karachi, Rawalpindi, and Islamabad generally arrive in 24–48 hours. Other cities across Pakistan take 2–3 business days.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#13110F] border border-[#EAC996]/15 space-y-2">
            <h4 className="text-sm font-semibold text-[#F5F2EB]">
              Are your products original and unexpired?
            </h4>
            <p className="text-xs text-[#A8A29E] leading-relaxed">
              100% yes. We source our condoms directly from certified pharmaceutical distributors of Reckitt Benckiser (Durex), DKT Pakistan, and Karex. Every pack features verified batch numbers and at least 2–4 years of remaining shelf life.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
