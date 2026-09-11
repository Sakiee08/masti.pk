'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  ShoppingBag, 
  ShieldCheck, 
  Search, 
  Menu, 
  X, 
  Flame, 
  ExternalLink,
  ChevronRight,
  EyeOff,
  ChevronDown,
  Activity,
  Heart,
  Droplets,
  Sparkles
} from 'lucide-react';
import { useCartStore } from '@/lib/store/cart-store';
import { cn, formatPKR } from '@/lib/utils';
import { SEED_PRODUCTS } from '@/data/seed-catalogue';

export function Navbar() {
  const router = useRouter();
  const { openDrawer, getItemCount } = useCartStore();
  const [itemCount, setItemCount] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Sync count on client after hydration
  useEffect(() => {
    setItemCount(getItemCount());
    const unsubscribe = useCartStore.subscribe((state) => {
      setItemCount(state.items.reduce((acc, i) => acc + i.quantity, 0));
    });
    return () => unsubscribe();
  }, [getItemCount]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Instant Privacy / Panic feature (Keyboard ESC or Click)
  const triggerQuickPrivacy = () => {
    window.location.replace('https://www.google.com/search?q=weather+today');
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        triggerQuickPrivacy();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const searchResults = searchQuery.trim().length >= 2
    ? SEED_PRODUCTS.filter((p) => {
        const q = searchQuery.toLowerCase();
        return (
          p.title.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.tagline.toLowerCase().includes(q)
        );
      }).slice(0, 5)
    : [];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setMobileMenuOpen(false);
      setIsSearchFocused(false);
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Announcement & Guarantee Bar */}
      <div className="bg-[#0B0908] border-b border-[#EAC996]/15 py-2 px-4 text-xs text-[#D5CEBA]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full bg-[#D4AF37]/10 text-[#EAC996] font-medium border border-[#D4AF37]/20">
              <ShieldCheck className="w-3.5 h-3.5 mr-1 text-[#EAC996]" />
              100% Discreet Packaging
            </span>
            <span className="hidden sm:inline text-[#423B33]">•</span>
            <span className="hidden sm:inline text-[#A8A29E]">
              Plain unmarked kraft box • Zero product mention on outer parcel
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[#A8A29E] hidden md:inline">
              🚚 Complimentary Express Delivery on orders over <strong className="text-[#EAC996] font-semibold">Rs. 2,000</strong>
            </span>
            <button
              onClick={triggerQuickPrivacy}
              title="Click or press ESC to instantly switch to Google search for complete privacy"
              className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#241712] hover:bg-[#331C14] text-[#E88A6E] border border-[#C85A32]/30 transition-colors text-[11px] font-medium"
            >
              <EyeOff className="w-3 h-3 text-[#E88A6E]" />
              <span>Quick Exit (ESC)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={cn(
          'w-full transition-all duration-200 border-b',
          isScrolled
            ? 'bg-[#0B0908]/95 backdrop-blur-xl border-[#EAC996]/15 shadow-2xl shadow-black/80 py-3.5'
            : 'bg-[#080706]/85 backdrop-blur-md border-[#EAC996]/10 py-4'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D96B43] via-[#C85A32] to-[#8E6E16] flex items-center justify-center shadow-[0_0_20px_rgba(217,107,67,0.35)] border border-[#EAC996]/30 group-hover:scale-105 transition-transform">
              <Flame className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-2xl font-bold tracking-tight text-[#F5F2EB] flex items-center gap-0.5">
                Masti<span className="font-serif italic font-normal text-[#EAC996]">.pk</span>
              </span>
              <span className="block text-[8.5px] uppercase tracking-[0.22em] text-[#A8A29E] font-medium -mt-1">
                Discreet Intimacy & Wellness
              </span>
            </div>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-4 relative">
            <form onSubmit={handleSearchSubmit} className="w-full relative">
              <input
                type="text"
                placeholder="Search Durex, Josh, Vitabiotics, Nutrifactor, Shilajit..."
                value={searchQuery}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setTimeout(() => setIsSearchFocused(false), 250)}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#181512]/90 text-sm text-[#F5F2EB] placeholder-[#8A8275] rounded-full pl-10 pr-4 py-2 border border-[#EAC996]/15 focus:outline-none focus:border-[#EAC996]/60 focus:ring-1 focus:ring-[#EAC996]/40 transition-all"
              />
              <Search className="w-4 h-4 text-[#8A8275] absolute left-3.5 top-1/2 -translate-y-1/2" />
            </form>

            {/* Instant Search Suggestions Dropdown */}
            {isSearchFocused && searchResults.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-[#110F0D]/98 backdrop-blur-2xl border border-[#EAC996]/20 rounded-2xl shadow-2xl overflow-hidden z-50 divide-y divide-[#302A24]/60 animate-in fade-in-50 duration-150">
                <div className="p-2 text-[10px] font-bold text-[#A8A29E] uppercase tracking-wider px-3">
                  Matching Products ({searchResults.length})
                </div>
                {searchResults.map((item) => (
                  <Link
                    key={item.id}
                    href={`/products/${item.slug}`}
                    onClick={() => {
                      setIsSearchFocused(false);
                      setSearchQuery('');
                    }}
                    className="flex items-center gap-3 p-2.5 hover:bg-[#1A1715] transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#080706] border border-[#EAC996]/15 p-1 flex-shrink-0 flex items-center justify-center overflow-hidden">
                      <img
                        src={item.images[0]?.url}
                        alt={item.title}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-semibold text-[#F5F2EB] truncate group-hover:text-[#EAC996] transition-colors">
                          {item.title}
                        </span>
                        {item.badge && (
                          <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-[#D4AF37]/15 text-[#EAC996] border border-[#D4AF37]/25 flex-shrink-0">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center justify-between text-[11px] text-[#A8A29E] mt-0.5">
                        <span>{item.brand} • {item.category}</span>
                        <span className="font-bold text-[#EAC996]">
                          {formatPKR(item.variants[0].priceInMinorUnits)}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
                <button
                  type="button"
                  onMouseDown={() => {
                    router.push(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
                    setIsSearchFocused(false);
                  }}
                  className="w-full py-2.5 px-3 text-center text-xs font-bold text-[#D96B43] hover:text-[#E88A6E] bg-[#181512] hover:bg-[#221E1A] transition-colors block"
                >
                  View all results for &quot;{searchQuery}&quot; →
                </button>
              </div>
            )}
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-5 text-sm font-medium text-[#D5CEBA]">
            <Link href="/products" className="hover:text-[#F5F2EB] transition-colors">
              All Products
            </Link>
            <Link href="/products?category=Condoms" className="hover:text-[#F5F2EB] transition-colors">
              Condoms
            </Link>
            <Link href="/products?category=Delay+%26+Climax" className="hover:text-[#E88A6E] transition-colors">
              Delay & Climax
            </Link>
            <Link href="/products?category=Lubricants" className="hover:text-[#F5F2EB] transition-colors">
              Lubricants
            </Link>

            {/* Supplements Dropdown */}
            <div className="relative group">
              <Link
                href="/products"
                className="hover:text-[#34D399] transition-colors flex items-center gap-1.5 py-1"
              >
                <span>Supplements</span>
                <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/25">
                  New
                </span>
                <ChevronDown className="w-3.5 h-3.5 text-[#A8A29E] group-hover:text-[#34D399] transition-transform group-hover:rotate-180" />
              </Link>

              {/* Mega Dropdown Menu */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none group-hover:pointer-events-auto z-50">
                <div className="bg-[#110F0D]/98 backdrop-blur-2xl border border-[#EAC996]/20 rounded-2xl shadow-2xl p-2.5 space-y-1">
                  <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#A8A29E] border-b border-[#302A24]">
                    Targeted Health Supplements
                  </div>
                  <Link
                    href="/products?category=Sexual+Health+%26+Vitality"
                    className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-[#1A1715] transition-colors group/item"
                  >
                    <div className="w-7 h-7 rounded-lg bg-[#D96B43]/15 text-[#E88A6E] flex items-center justify-center flex-shrink-0">
                      <Flame className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#F5F2EB] group-hover/item:text-[#E88A6E] transition-colors">
                        Sexual Health & Vitality
                      </div>
                      <div className="text-[10px] text-[#A8A29E]">Wellman, Tryception, Shahi</div>
                    </div>
                  </Link>

                  <Link
                    href="/products?category=Bone+%26+Joint+Health"
                    className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-[#1A1715] transition-colors group/item"
                  >
                    <div className="w-7 h-7 rounded-lg bg-blue-500/15 text-blue-300 flex items-center justify-center flex-shrink-0">
                      <Activity className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#F5F2EB] group-hover/item:text-blue-300 transition-colors">
                        Bone & Joint Health
                      </div>
                      <div className="text-[10px] text-[#A8A29E]">Osteocare, Bonex-D, Jointace</div>
                    </div>
                  </Link>

                  <Link
                    href="/products?category=Liver+Health+%26+Detox"
                    className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-[#1A1715] transition-colors group/item"
                  >
                    <div className="w-7 h-7 rounded-lg bg-emerald-500/15 text-emerald-300 flex items-center justify-center flex-shrink-0">
                      <Heart className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#F5F2EB] group-hover/item:text-emerald-300 transition-colors">
                        Liver Health & Detox
                      </div>
                      <div className="text-[10px] text-[#A8A29E]">Liverovit, Livakseer, Cod Liver</div>
                    </div>
                  </Link>

                  <Link
                    href="/products?category=Kidney+%26+Urinary+Health"
                    className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-[#1A1715] transition-colors group/item"
                  >
                    <div className="w-7 h-7 rounded-lg bg-[#D4AF37]/15 text-[#EAC996] flex items-center justify-center flex-shrink-0">
                      <Droplets className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#F5F2EB] group-hover/item:text-[#EAC996] transition-colors">
                        Kidney & Urinary Care
                      </div>
                      <div className="text-[10px] text-[#A8A29E]">Cranflo PACs, Uri-Care, Uric-Free</div>
                    </div>
                  </Link>

                  <div className="pt-1.5 border-t border-[#302A24]">
                    <Link
                      href="/products"
                      className="block px-3 py-1 text-center text-[11px] font-bold text-[#EAC996] hover:text-[#FFF0D6]"
                    >
                      View All 20+ Supplements →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/products?category=Value+Packs" className="hover:text-[#EAC996] transition-colors flex items-center gap-1">
              <span>Value Combos</span>
              <span className="text-[10px] font-bold bg-[#D4AF37]/15 text-[#EAC996] border border-[#D4AF37]/25 px-1.5 py-0.5 rounded">Save 25%</span>
            </Link>
            <Link href="/discreet-packaging" className="hover:text-[#EAC996] transition-colors text-xs text-[#EAC996]/90 font-medium flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#EAC996]" />
              <span>How We Pack</span>
            </Link>
          </div>

          {/* Right Action Icons */}
          <div className="flex items-center gap-3">
            {/* Cart Button with Count Badge */}
            <button
              onClick={openDrawer}
              aria-label="Open Shopping Cart"
              className="relative p-2.5 rounded-xl bg-[#181512] hover:bg-[#221E1A] text-[#F5F2EB] border border-[#EAC996]/20 transition-all flex items-center gap-2 group shadow-sm hover:border-[#EAC996]/40"
            >
              <div className="relative">
                <ShoppingBag className="w-5 h-5 text-[#EAC996] group-hover:scale-105 transition-transform" />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2.5 bg-[#D96B43] text-white text-[11px] font-bold h-4 w-4 rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(217,107,67,0.6)]">
                    {itemCount}
                  </span>
                )}
              </div>
              <span className="hidden sm:inline text-xs font-semibold text-[#F5F2EB]">
                Cart
              </span>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-[#181512] text-[#F5F2EB] border border-[#EAC996]/15 hover:bg-[#221E1A]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#EAC996]" /> : <Menu className="w-6 h-6 text-[#EAC996]" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#EAC996]/15 bg-[#0B0908] px-4 pt-4 pb-6 space-y-4 animate-in slide-in-from-top-2">
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                placeholder="Search products, brands, lubes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#181512] text-sm text-[#F5F2EB] placeholder-[#8A8275] rounded-lg pl-10 pr-4 py-2.5 border border-[#EAC996]/20 focus:outline-none focus:border-[#EAC996]/60"
              />
              <Search className="w-4 h-4 text-[#8A8275] absolute left-3.5 top-1/2 -translate-y-1/2" />
            </form>

            <div className="grid grid-cols-1 gap-2 text-sm font-medium">
              <Link
                href="/products"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-lg hover:bg-[#181512] text-[#F5F2EB]"
              >
                <span>Browse All Products</span>
                <ChevronRight className="w-4 h-4 text-[#8A8275]" />
              </Link>
              <Link
                href="/products?category=Condoms"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-lg hover:bg-[#181512] text-[#F5F2EB]"
              >
                <span>Condoms (Thin, Dotted, Ribbed)</span>
                <ChevronRight className="w-4 h-4 text-[#8A8275]" />
              </Link>
              <Link
                href="/products?category=Delay+%26+Climax"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-lg hover:bg-[#181512] text-[#E88A6E]"
              >
                <span>Extended Pleasure / Delay</span>
                <ChevronRight className="w-4 h-4 text-[#8A8275]" />
              </Link>
              <Link
                href="/products?category=Lubricants"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-lg hover:bg-[#181512] text-[#F5F2EB]"
              >
                <span>Intimate Lubricants & Gels</span>
                <ChevronRight className="w-4 h-4 text-[#8A8275]" />
              </Link>
              <Link
                href="/products?category=Value+Packs"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-lg hover:bg-[#181512] text-[#EAC996]"
              >
                <span>Value Packs & Couples Kits</span>
                <ChevronRight className="w-4 h-4 text-[#8A8275]" />
              </Link>

              {/* Supplements Mobile Links */}
              <div className="pt-2 pb-1 border-t border-[#302A24] text-[11px] font-bold uppercase tracking-wider text-[#34D399] px-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Health & Supplements</span>
              </div>
              <Link
                href="/products?category=Sexual+Health+%26+Vitality"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-lg hover:bg-[#181512] text-[#E88A6E] pl-4"
              >
                <span>Sexual Health & Vitality</span>
                <ChevronRight className="w-4 h-4 text-[#8A8275]" />
              </Link>
              <Link
                href="/products?category=Bone+%26+Joint+Health"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-lg hover:bg-[#181512] text-blue-300 pl-4"
              >
                <span>Bone & Joint Health</span>
                <ChevronRight className="w-4 h-4 text-[#8A8275]" />
              </Link>
              <Link
                href="/products?category=Liver+Health+%26+Detox"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-lg hover:bg-[#181512] text-emerald-300 pl-4"
              >
                <span>Liver Health & Detox</span>
                <ChevronRight className="w-4 h-4 text-[#8A8275]" />
              </Link>
              <Link
                href="/products?category=Kidney+%26+Urinary+Health"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-lg hover:bg-[#181512] text-[#EAC996] pl-4"
              >
                <span>Kidney & Urinary Health</span>
                <ChevronRight className="w-4 h-4 text-[#8A8275]" />
              </Link>
              <Link
                href="/discreet-packaging"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-lg bg-[#D4AF37]/10 text-[#EAC996] border border-[#D4AF37]/25"
              >
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Discreet Packaging Guarantee</span>
                </div>
                <ChevronRight className="w-4 h-4 text-[#EAC996]" />
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
