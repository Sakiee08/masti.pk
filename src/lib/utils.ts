import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Formats integer minor units (paisas) into Pakistani Rupees string.
 * e.g., 45000 -> "Rs. 450"
 */
export function formatPKR(minorUnits: number): string {
  const rupees = Math.floor(minorUnits / 100);
  return `Rs. ${rupees.toLocaleString('en-PK')}`;
}

export function calculateDiscountPercentage(priceMinor: number, compareAtMinor?: number): number | null {
  if (!compareAtMinor || compareAtMinor <= priceMinor) return null;
  const discount = Math.round(((compareAtMinor - priceMinor) / compareAtMinor) * 100);
  return discount > 0 ? discount : null;
}
