'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { 
  Filter, 
  SlidersHorizontal, 
  X, 
  Search, 
  ChevronDown,
  RotateCcw
} from 'lucide-react';
import { Product } from '@/types/store';
import { ProductCard } from '@/components/product/ProductCard';

interface ProductCatalogClientProps {
  initialProducts: Product[];
}

export function ProductCatalogClient({ initialProducts }: ProductCatalogClientProps) {
  const searchParams = useSearchParams();

  // Filter States
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [selectedTexture, setSelectedTexture] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<string>('all');
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<string>('featured');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState<boolean>(false);

  // Read URL params on initial load
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    const brandParam = searchParams.get('brand');
    const searchParam = searchParams.get('search');
    const textureParam = searchParams.get('texture');

    if (categoryParam) setSelectedCategory(categoryParam);
    if (brandParam) setSelectedBrand(brandParam);
    if (searchParam) setSearchQuery(searchParam);
    if (textureParam) setSelectedTexture(textureParam);
  }, [searchParams]);

  // Extract unique facets dynamically from initialProducts
  const categories = useMemo(() => ['all', ...Array.from(new Set(initialProducts.map((p) => p.category)))], [initialProducts]);
  const brands = useMemo(() => ['all', ...Array.from(new Set(initialProducts.map((p) => p.brand)))], [initialProducts]);
  const textures = useMemo(() => ['all', ...Array.from(new Set(initialProducts.map((p) => p.texture)))], [initialProducts]);

  // Filter logic
  const filteredProducts = useMemo(() => {
    return initialProducts.filter((product) => {
      // Category filter
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }

      // Brand filter
      if (selectedBrand !== 'all' && product.brand !== selectedBrand) {
        return false;
      }

      // Texture filter
      if (selectedTexture !== 'all' && product.texture !== selectedTexture) {
        return false;
      }

      // In stock
      if (inStockOnly) {
        const hasStock = product.variants.some((v) => v.inStock);
        if (!hasStock) return false;
      }

      // Price range
      if (priceRange !== 'all') {
        const lowestPriceMinor = Math.min(...product.variants.map((v) => v.priceInMinorUnits));
        if (priceRange === 'under-500' && lowestPriceMinor >= 50000) return false;
        if (priceRange === '500-1500' && (lowestPriceMinor < 50000 || lowestPriceMinor > 150000)) return false;
        if (priceRange === 'above-1500' && lowestPriceMinor <= 150000) return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitle = product.title.toLowerCase().includes(q);
        const matchBrand = product.brand.toLowerCase().includes(q);
        const matchTagline = product.tagline.toLowerCase().includes(q);
        if (!matchTitle && !matchBrand && !matchTagline) return false;
      }

      return true;
    }).sort((a, b) => {
      const aMinPrice = Math.min(...a.variants.map((v) => v.priceInMinorUnits));
      const bMinPrice = Math.min(...b.variants.map((v) => v.priceInMinorUnits));

      if (sortBy === 'price_asc') return aMinPrice - bMinPrice;
      if (sortBy === 'price_desc') return bMinPrice - aMinPrice;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0; // featured default
    });
  }, [initialProducts, selectedCategory, selectedBrand, selectedTexture, inStockOnly, priceRange, searchQuery, sortBy]);

  const handleResetFilters = () => {
    setSelectedCategory('all');
    setSelectedBrand('all');
    setSelectedTexture('all');
    setPriceRange('all');
    setInStockOnly(false);
    setSearchQuery('');
    setSortBy('featured');
  };

  const hasActiveFilters =
    selectedCategory !== 'all' ||
    selectedBrand !== 'all' ||
    selectedTexture !== 'all' ||
    priceRange !== 'all' ||
    inStockOnly ||
    searchQuery.length > 0;

  return (
    <div className="space-y-6">
      {/* Top Header & Sort Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white">
            Sexual Wellness Catalogue
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            Showing <strong className="text-zinc-200">{filteredProducts.length}</strong> certified products with discreet packaging
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="lg:hidden flex items-center gap-2 px-3.5 py-2 rounded-xl bg-dark-850 text-zinc-200 text-xs font-semibold border border-white/10"
          >
            <Filter className="w-4 h-4 text-brand-400" />
            <span>Filters ({hasActiveFilters ? 'Active' : 'All'})</span>
          </button>

          {/* Sort Dropdown */}
          <div className="relative flex items-center">
            <span className="text-xs text-zinc-400 mr-2 hidden sm:inline">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-dark-850 text-xs text-zinc-200 border border-white/10 rounded-xl px-3 py-2 focus:outline-none focus:border-brand-500 font-medium cursor-pointer"
            >
              <option value="featured">Featured / Best Sellers</option>
              <option value="price_asc">Price: Low to High</option>
              <option value="price_desc">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        {/* DESKTOP SIDEBAR FILTERS */}
        <div className="hidden lg:block space-y-6 p-6 rounded-2xl bg-dark-900 border border-white/5 sticky top-28">
          <div className="flex items-center justify-between pb-4 border-b border-white/5">
            <span className="text-sm font-bold text-white flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-brand-400" />
              Filter Products
            </span>
            {hasActiveFilters && (
              <button
                onClick={handleResetFilters}
                className="text-xs text-brand-400 hover:text-brand-300 flex items-center gap-1 font-medium"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            )}
          </div>

          {/* Category Facet */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-zinc-300 uppercase tracking-wider block">
              Category
            </label>
            <div className="space-y-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`w-full text-left text-xs px-2.5 py-1.5 rounded-lg transition-colors flex items-center justify-between ${
                    selectedCategory === cat
                      ? 'bg-brand-500/20 text-brand-300 font-semibold border border-brand-500/30'
                      : 'text-zinc-400 hover:text-zinc-200 hover:bg-dark-800'
                  }`}
                >
                  <span>{cat === 'all' ? 'All Categories' : cat}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Brand Facet */}
          <div className="space-y-2 pt-3 border-t border-white/5">
            <label className="text-xs font-semibold text-zinc-300 uppercase tracking-wider block">
              Brand
            </label>
            <div className="space-y-1">
              {brands.map((b) => (
                <button
                  key={b}
                  onClick={() => setSelectedBrand(b)}
                  className={`w-full text-left text-xs px-2.5 py-1.5 rounded-lg transition-colors flex items-center justify-between ${
                    selectedBrand === b
                      ? 'bg-brand-500/20 text-brand-300 font-semibold border border-brand-500/30'
                      : 'text-zinc-400 hover:text-zinc-200 hover:bg-dark-800'
                  }`}
                >
                  <span>{b === 'all' ? 'All Brands' : b}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Texture / Sensation Facet */}
          <div className="space-y-2 pt-3 border-t border-white/5">
            <label className="text-xs font-semibold text-zinc-300 uppercase tracking-wider block">
              Texture & Feel
            </label>
            <div className="space-y-1">
              {textures.map((t) => (
                <button
                  key={t}
                  onClick={() => setSelectedTexture(t)}
                  className={`w-full text-left text-xs px-2.5 py-1.5 rounded-lg transition-colors flex items-center justify-between ${
                    selectedTexture === t
                      ? 'bg-brand-500/20 text-brand-300 font-semibold border border-brand-500/30'
                      : 'text-zinc-400 hover:text-zinc-200 hover:bg-dark-800'
                  }`}
                >
                  <span>{t === 'all' ? 'All Textures' : t}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div className="space-y-2 pt-3 border-t border-white/5">
            <label className="text-xs font-semibold text-zinc-300 uppercase tracking-wider block">
              Price (PKR)
            </label>
            <div className="space-y-1 text-xs">
              {[
                { id: 'all', label: 'All Prices' },
                { id: 'under-500', label: 'Under Rs. 500' },
                { id: '500-1500', label: 'Rs. 500 – Rs. 1,500' },
                { id: 'above-1500', label: 'Rs. 1,500+' },
              ].map((p) => (
                <button
                  key={p.id}
                  onClick={() => setPriceRange(p.id)}
                  className={`w-full text-left px-2.5 py-1.5 rounded-lg transition-colors ${
                    priceRange === p.id
                      ? 'bg-brand-500/20 text-brand-300 font-semibold border border-brand-500/30'
                      : 'text-zinc-400 hover:text-zinc-200 hover:bg-dark-800'
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          {/* In Stock Toggle */}
          <div className="pt-3 border-t border-white/5 flex items-center justify-between">
            <span className="text-xs font-medium text-zinc-300">In-Stock Only</span>
            <input
              type="checkbox"
              checked={inStockOnly}
              onChange={(e) => setInStockOnly(e.target.checked)}
              className="w-4 h-4 rounded text-brand-500 focus:ring-brand-400 bg-dark-800 border-white/10 cursor-pointer"
            />
          </div>
        </div>

        {/* PRODUCTS GRID */}
        <div className="lg:col-span-3 space-y-6">
          {/* Active Filter Chips */}
          {hasActiveFilters && (
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-zinc-500">Active filters:</span>
              {selectedCategory !== 'all' && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-dark-800 text-xs text-zinc-200 border border-white/10">
                  {selectedCategory}
                  <button onClick={() => setSelectedCategory('all')}>
                    <X className="w-3 h-3 text-zinc-400 hover:text-white" />
                  </button>
                </span>
              )}
              {selectedBrand !== 'all' && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-dark-800 text-xs text-zinc-200 border border-white/10">
                  Brand: {selectedBrand}
                  <button onClick={() => setSelectedBrand('all')}>
                    <X className="w-3 h-3 text-zinc-400 hover:text-white" />
                  </button>
                </span>
              )}
              {selectedTexture !== 'all' && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-dark-800 text-xs text-zinc-200 border border-white/10">
                  {selectedTexture}
                  <button onClick={() => setSelectedTexture('all')}>
                    <X className="w-3 h-3 text-zinc-400 hover:text-white" />
                  </button>
                </span>
              )}
              {priceRange !== 'all' && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-dark-800 text-xs text-zinc-200 border border-white/10">
                  Price: {priceRange}
                  <button onClick={() => setPriceRange('all')}>
                    <X className="w-3 h-3 text-zinc-400 hover:text-white" />
                  </button>
                </span>
              )}
              {searchQuery && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-dark-800 text-xs text-zinc-200 border border-white/10">
                  Search: &quot;{searchQuery}&quot;
                  <button onClick={() => setSearchQuery('')}>
                    <X className="w-3 h-3 text-zinc-400 hover:text-white" />
                  </button>
                </span>
              )}
              <button
                onClick={handleResetFilters}
                className="text-xs text-brand-400 hover:underline ml-1"
              >
                Clear all
              </button>
            </div>
          )}

          {/* Product Items */}
          {filteredProducts.length === 0 ? (
            <div className="py-16 text-center rounded-2xl bg-dark-900 border border-white/5 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-dark-800 mx-auto flex items-center justify-center text-zinc-500">
                <Search className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-zinc-200">No matching products found</h3>
                <p className="text-xs text-zinc-400 mt-1 max-w-sm mx-auto">
                  Try clearing some filters or searching for terms like &quot;Durex&quot;, &quot;Ultra Thin&quot;, or &quot;Delay&quot;.
                </p>
              </div>
              <button
                onClick={handleResetFilters}
                className="px-4 py-2 rounded-xl bg-dark-800 hover:bg-dark-700 text-xs font-semibold text-zinc-200 border border-white/10"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* MOBILE FILTER MODAL */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden overflow-hidden">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute inset-y-0 right-0 max-w-xs w-full bg-dark-900 border-l border-white/10 p-6 flex flex-col justify-between overflow-y-auto">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="text-base font-bold text-white">Filters</span>
                <button
                  onClick={() => setMobileFiltersOpen(false)}
                  className="p-1 rounded-lg text-zinc-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Categories */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-zinc-300 uppercase">Category</label>
                <div className="space-y-1">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => {
                        setSelectedCategory(cat);
                        setMobileFiltersOpen(false);
                      }}
                      className={`w-full text-left text-xs p-2 rounded-lg ${
                        selectedCategory === cat ? 'bg-brand-500 text-white font-bold' : 'text-zinc-400'
                      }`}
                    >
                      {cat === 'all' ? 'All Categories' : cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Brands */}
              <div className="space-y-2 pt-2 border-t border-white/5">
                <label className="text-xs font-semibold text-zinc-300 uppercase">Brand</label>
                <div className="space-y-1">
                  {brands.map((b) => (
                    <button
                      key={b}
                      onClick={() => {
                        setSelectedBrand(b);
                        setMobileFiltersOpen(false);
                      }}
                      className={`w-full text-left text-xs p-2 rounded-lg ${
                        selectedBrand === b ? 'bg-brand-500 text-white font-bold' : 'text-zinc-400'
                      }`}
                    >
                      {b === 'all' ? 'All Brands' : b}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 space-y-2">
              <button
                onClick={() => {
                  handleResetFilters();
                  setMobileFiltersOpen(false);
                }}
                className="w-full py-2.5 rounded-xl bg-dark-800 text-xs font-semibold text-zinc-300"
              >
                Clear All
              </button>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="w-full py-2.5 rounded-xl bg-brand-600 text-xs font-bold text-white"
              >
                View {filteredProducts.length} Results
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
