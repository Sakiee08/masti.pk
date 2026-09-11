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
      <div className="bg-gradient-to-r from-dark-900 via-dark-850 to-dark-900 border-b border-white/5 py-2 px-4 text-xs text-zinc-300">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center p-1 rounded bg-emerald-500/10 text-emerald-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 mr-1" />
              100% Discreet Packaging
            </span>
            <span className="hidden sm:inline text-zinc-500">|</span>
            <span className="hidden sm:inline text-zinc-400">
              Plain unmarked box • Zero product mention on parcel
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-zinc-400 hidden md:inline">
              🚚 Free Delivery on orders over <strong className="text-zinc-200">Rs. 2,000</strong>
            </span>
            <button
              onClick={triggerQuickPrivacy}
              title="Click or press ESC to instantly switch to Google search for complete privacy"
              className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-500/10 hover:bg-red-500/20 text-rose-300 border border-rose-500/30 transition-colors text-[11px] font-medium"
            >
              <EyeOff className="w-3 h-3 text-rose-400" />
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
            ? 'bg-dark-950/90 backdrop-blur-md border-white/10 shadow-lg shadow-black/40 py-3.5'
            : 'bg-dark-950/70 backdrop-blur-sm border-white/5 py-4'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-glow-brand group-hover:scale-105 transition-transform">
              <Flame className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-2xl font-bold tracking-tight text-white flex items-center gap-1">
                Masti<span className="text-brand-500">.pk</span>
              </span>
              <span className="block text-[10px] uppercase tracking-widest text-zinc-400 font-semibold -mt-1">
                Discreet Wellness
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
                className="w-full bg-dark-850/80 text-sm text-zinc-100 placeholder-zinc-500 rounded-full pl-10 pr-4 py-2 border border-white/10 focus:outline-none focus:border-brand-500/60 focus:ring-1 focus:ring-brand-500/40 transition-all"
              />
              <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            </form>

            {/* Instant Search Suggestions Dropdown */}
            {isSearchFocused && searchResults.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-dark-900/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-50 divide-y divide-white/5 animate-in fade-in-50 duration-150">
                <div className="p-2 text-[10px] font-bold text-zinc-400 uppercase tracking-wider px-3">
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
                    className="flex items-center gap-3 p-2.5 hover:bg-white/5 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-dark-950 border border-white/10 p-1 flex-shrink-0 flex items-center justify-center overflow-hidden">
                      <img
                        src={item.images[0]?.url}
                        alt={item.title}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-semibold text-zinc-200 truncate group-hover:text-brand-400 transition-colors">
                          {item.title}
                        </span>
                        {item.badge && (
                          <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-brand-500/20 text-brand-300 flex-shrink-0">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center justify-between text-[11px] text-zinc-400 mt-0.5">
                        <span>{item.brand} • {item.category}</span>
                        <span className="font-bold text-emerald-400">
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
                  className="w-full py-2.5 px-3 text-center text-xs font-bold text-brand-400 hover:text-brand-300 bg-dark-850/50 hover:bg-dark-800 transition-colors block"
                >
                  View all results for &quot;{searchQuery}&quot; →
                </button>
              </div>
            )}
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-5 text-sm font-medium text-zinc-300">
            <Link href="/products" className="hover:text-white transition-colors">
              All Products
            </Link>
            <Link href="/products?category=Condoms" className="hover:text-white transition-colors">
              Condoms
            </Link>
            <Link href="/products?category=Delay+%26+Climax" className="hover:text-brand-400 transition-colors">
              Delay & Climax
            </Link>
            <Link href="/products?category=Lubricants" className="hover:text-white transition-colors">
              Lubricants
            </Link>

            {/* Supplements Dropdown */}
            <div className="relative group">
              <Link
                href="/products"
                className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 py-1"
              >
                <span>Supplements</span>
                <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  New
                </span>
                <ChevronDown className="w-3.5 h-3.5 text-zinc-400 group-hover:text-emerald-400 transition-transform group-hover:rotate-180" />
              </Link>

              {/* Mega Dropdown Menu */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none group-hover:pointer-events-auto z-50">
                <div className="bg-dark-900/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-2.5 space-y-1">
                  <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-zinc-400 border-b border-white/5">
                    Targeted Health Supplements
                  </div>
                  <Link
                    href="/products?category=Sexual+Health+%26+Vitality"
                    className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-white/5 transition-colors group/item"
                  >
                    <div className="w-7 h-7 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center flex-shrink-0">
                      <Flame className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-zinc-200 group-hover/item:text-purple-400 transition-colors">
                        Sexual Health & Vitality
                      </div>
                      <div className="text-[10px] text-zinc-400">Wellman, Tryception, Shahi</div>
                    </div>
                  </Link>

                  <Link
                    href="/products?category=Bone+%26+Joint+Health"
                    className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-white/5 transition-colors group/item"
                  >
                    <div className="w-7 h-7 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center flex-shrink-0">
                      <Activity className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-zinc-200 group-hover/item:text-blue-400 transition-colors">
                        Bone & Joint Health
                      </div>
                      <div className="text-[10px] text-zinc-400">Osteocare, Bonex-D, Jointace</div>
                    </div>
                  </Link>

                  <Link
                    href="/products?category=Liver+Health+%26+Detox"
                    className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-white/5 transition-colors group/item"
                  >
                    <div className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center flex-shrink-0">
                      <Heart className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-zinc-200 group-hover/item:text-emerald-400 transition-colors">
                        Liver Health & Detox
                      </div>
                      <div className="text-[10px] text-zinc-400">Liverovit, Livakseer, Cod Liver</div>
                    </div>
                  </Link>

                  <Link
                    href="/products?category=Kidney+%26+Urinary+Health"
                    className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-white/5 transition-colors group/item"
                  >
                    <div className="w-7 h-7 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center flex-shrink-0">
                      <Droplets className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-zinc-200 group-hover/item:text-amber-400 transition-colors">
                        Kidney & Urinary Care
                      </div>
                      <div className="text-[10px] text-zinc-400">Cranflo PACs, Uri-Care, Uric-Free</div>
                    </div>
                  </Link>

                  <div className="pt-1.5 border-t border-white/5">
                    <Link
                      href="/products"
                      className="block px-3 py-1 text-center text-[11px] font-bold text-brand-400 hover:text-brand-300"
                    >
                      View All 20+ Supplements →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/products?category=Value+Packs" className="hover:text-gold-400 transition-colors flex items-center gap-1">
              <span>Value Combos</span>
              <span className="text-[10px] font-bold bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded">Save 25%</span>
            </Link>
            <Link href="/discreet-packaging" className="hover:text-emerald-400 transition-colors text-xs text-emerald-400/90 font-medium flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>How We Pack</span>
            </Link>
          </div>

          {/* Right Action Icons */}
          <div className="flex items-center gap-3">
            {/* Cart Button with Count Badge */}
            <button
              onClick={openDrawer}
              aria-label="Open Shopping Cart"
              className="relative p-2.5 rounded-xl bg-dark-800 hover:bg-dark-700 text-zinc-200 hover:text-white border border-white/5 transition-all flex items-center gap-2 group"
            >
              <div className="relative">
                <ShoppingBag className="w-5 h-5 text-zinc-300 group-hover:text-brand-400 transition-colors" />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2.5 bg-brand-600 text-white text-[11px] font-bold h-4 w-4 rounded-full flex items-center justify-center animate-pulse">
                    {itemCount}
                  </span>
                )}
              </div>
              <span className="hidden sm:inline text-xs font-semibold text-zinc-300">
                Cart
              </span>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-dark-800 text-zinc-300 hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-white/10 bg-dark-950 px-4 pt-4 pb-6 space-y-4 animate-in slide-in-from-top-2">
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                placeholder="Search products, brands, lubes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-dark-850 text-sm text-zinc-100 placeholder-zinc-500 rounded-lg pl-10 pr-4 py-2.5 border border-white/10 focus:outline-none focus:border-brand-500"
              />
              <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            </form>

            <div className="grid grid-cols-1 gap-2 text-sm font-medium">
              <Link
                href="/products"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-lg hover:bg-dark-800 text-zinc-200"
              >
                <span>Browse All Products</span>
                <ChevronRight className="w-4 h-4 text-zinc-500" />
              </Link>
              <Link
                href="/products?category=Condoms"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-lg hover:bg-dark-800 text-zinc-200"
              >
                <span>Condoms (Thin, Dotted, Ribbed)</span>
                <ChevronRight className="w-4 h-4 text-zinc-500" />
              </Link>
              <Link
                href="/products?category=Delay+%26+Climax"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-lg hover:bg-dark-800 text-brand-400"
              >
                <span>Extended Pleasure / Delay</span>
                <ChevronRight className="w-4 h-4 text-zinc-500" />
              </Link>
              <Link
                href="/products?category=Lubricants"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-lg hover:bg-dark-800 text-zinc-200"
              >
                <span>Intimate Lubricants & Gels</span>
                <ChevronRight className="w-4 h-4 text-zinc-500" />
              </Link>
              <Link
                href="/products?category=Value+Packs"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-lg hover:bg-dark-800 text-gold-400"
              >
                <span>Value Packs & Couples Kits</span>
                <ChevronRight className="w-4 h-4 text-zinc-500" />
              </Link>

              {/* Supplements Mobile Links */}
              <div className="pt-2 pb-1 border-t border-white/10 text-[11px] font-bold uppercase tracking-wider text-emerald-400 px-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Health & Supplements</span>
              </div>
              <Link
                href="/products?category=Sexual+Health+%26+Vitality"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-lg hover:bg-dark-800 text-purple-300 pl-4"
              >
                <span>Sexual Health & Vitality</span>
                <ChevronRight className="w-4 h-4 text-zinc-500" />
              </Link>
              <Link
                href="/products?category=Bone+%26+Joint+Health"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-lg hover:bg-dark-800 text-blue-300 pl-4"
              >
                <span>Bone & Joint Health</span>
                <ChevronRight className="w-4 h-4 text-zinc-500" />
              </Link>
              <Link
                href="/products?category=Liver+Health+%26+Detox"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-lg hover:bg-dark-800 text-emerald-300 pl-4"
              >
                <span>Liver Health & Detox</span>
                <ChevronRight className="w-4 h-4 text-zinc-500" />
              </Link>
              <Link
                href="/products?category=Kidney+%26+Urinary+Health"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-lg hover:bg-dark-800 text-amber-300 pl-4"
              >
                <span>Kidney & Urinary Health</span>
                <ChevronRight className="w-4 h-4 text-zinc-500" />
              </Link>
              <Link
                href="/discreet-packaging"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
              >
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Discreet Packaging Guarantee</span>
                </div>
                <ChevronRight className="w-4 h-4 text-emerald-400" />
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
