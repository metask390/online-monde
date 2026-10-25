import type { Listing, ListingCategory, MilkProduct } from '@/types/domain';

export const categories: ListingCategory[] = ['cow', 'buffalo', 'goat', 'sheep', 'poultry', 'camel', 'horse', 'other'];

export type PublicSnapshot = {
  featuredListings: Listing[];
  recentListings: Listing[];
  milkProducts: MilkProduct[];
};

/**
 * Step 2 keeps the data boundary explicit while credentials/schema are connected in the next step.
 * Returning empty collections is intentional: the public UI never ships fake marketplace records.
 */
export async function getPublicSnapshot(): Promise<PublicSnapshot> {
  return { featuredListings: [], recentListings: [], milkProducts: [] };
}

export async function getApprovedListing(id: string): Promise<Listing | null> {
  void id;
  return null;
}
