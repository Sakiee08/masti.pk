'use client';

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { CartItem } from '@/types/store';

export const FREE_SHIPPING_THRESHOLD_MINOR = 200000; // Rs. 2,000.00
export const STANDARD_SHIPPING_FEE_MINOR = 25000; // Rs. 250.00

interface CartStore {
  items: CartItem[];
  isDrawerOpen: boolean;
  couponCode: string | null;
  discountPercentage: number;
  
  // Actions
  addItem: (item: Omit<CartItem, 'quantity'> & { quantity?: number }) => void;
  removeItem: (variantId: string) => void;
  updateQuantity: (variantId: string, quantity: number) => void;
  clearCart: () => void;
  applyCoupon: (code: string) => boolean;
  removeCoupon: () => void;
  
  // Drawer controls
  openDrawer: () => void;
  closeDrawer: () => void;
  toggleDrawer: () => void;

  // Getters
  getItemCount: () => number;
  getSubtotalMinor: () => number;
  getDiscountAmountMinor: () => number;
  getShippingFeeMinor: () => number;
  getTotalMinor: () => number;
  getFreeShippingProgress: () => number; // 0 to 100%
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isDrawerOpen: false,
      couponCode: null,
      discountPercentage: 0,

      addItem: (newItem) => {
        const qtyToAdd = Math.max(1, Math.min(20, Math.floor(Number(newItem.quantity) || 1)));
        set((state) => {
          const existingIndex = state.items.findIndex((i) => i.variantId === newItem.variantId);
          if (existingIndex > -1) {
            const updatedItems = [...state.items];
            const newQty = Math.min(50, updatedItems[existingIndex].quantity + qtyToAdd);
            updatedItems[existingIndex].quantity = newQty;
            return { items: updatedItems, isDrawerOpen: true };
          }
          return {
            items: [...state.items, { ...newItem, quantity: qtyToAdd }],
            isDrawerOpen: true,
          };
        });
      },

      removeItem: (variantId) => {
        set((state) => ({
          items: state.items.filter((i) => i.variantId !== variantId),
        }));
      },

      updateQuantity: (variantId, quantity) => {
        const parsed = Number(quantity);
        if (isNaN(parsed) || parsed <= 0) {
          get().removeItem(variantId);
          return;
        }
        const boundedQty = Math.max(1, Math.min(50, Math.floor(parsed)));
        set((state) => ({
          items: state.items.map((i) =>
            i.variantId === variantId ? { ...i, quantity: boundedQty } : i
          ),
        }));
      },

      clearCart: () => {
        set({ items: [], couponCode: null, discountPercentage: 0 });
      },

      applyCoupon: (code: string) => {
        const normalized = code.trim().toUpperCase();
        if (normalized === 'MASTI10' || normalized === 'DISCREET10') {
          set({ couponCode: normalized, discountPercentage: 10 });
          return true;
        }
        if (normalized === 'WELCOME15') {
          set({ couponCode: normalized, discountPercentage: 15 });
          return true;
        }
        return false;
      },

      removeCoupon: () => {
        set({ couponCode: null, discountPercentage: 0 });
      },

      openDrawer: () => set({ isDrawerOpen: true }),
      closeDrawer: () => set({ isDrawerOpen: false }),
      toggleDrawer: () => set((s) => ({ isDrawerOpen: !s.isDrawerOpen })),

      getItemCount: () => {
        return get().items.reduce((acc, item) => acc + item.quantity, 0);
      },

      getSubtotalMinor: () => {
        return get().items.reduce(
          (acc, item) => acc + item.unitPriceInMinorUnits * item.quantity,
          0
        );
      },

      getDiscountAmountMinor: () => {
        const subtotal = get().getSubtotalMinor();
        const pct = get().discountPercentage;
        if (pct <= 0) return 0;
        return Math.round((subtotal * pct) / 100);
      },

      getShippingFeeMinor: () => {
        const subtotal = get().getSubtotalMinor();
        if (subtotal === 0) return 0;
        return subtotal >= FREE_SHIPPING_THRESHOLD_MINOR ? 0 : STANDARD_SHIPPING_FEE_MINOR;
      },

      getTotalMinor: () => {
        const subtotal = get().getSubtotalMinor();
        if (subtotal === 0) return 0;
        const discount = get().getDiscountAmountMinor();
        const shipping = get().getShippingFeeMinor();
        return Math.max(0, subtotal - discount + shipping);
      },

      getFreeShippingProgress: () => {
        const subtotal = get().getSubtotalMinor();
        if (subtotal >= FREE_SHIPPING_THRESHOLD_MINOR) return 100;
        return Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD_MINOR) * 100));
      },
    }),
    {
      name: 'masti_cart_state',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        items: state.items,
        couponCode: state.couponCode,
        discountPercentage: state.discountPercentage,
      }),
    }
  )
);
