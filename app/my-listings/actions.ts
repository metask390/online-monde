'use server';

import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import { createAdminClient } from '@/lib/admin-auth';
import { createClient } from '@/lib/supabase/server';
import { isValidPakistaniNumber } from '@/lib/format';

const idSchema = z.string().uuid();
const listingSchema = z.object({
  listingId: idSchema,
  title: z.string().min(2).max(160),
  category: z.string().min(1).max(40),
  breed: z.string().max(80).optional(),
  age: z.string().max(40).optional(),
  gender: z.string().max(30).optional(),
  color: z.string().max(60).optional(),
  price: z.coerce.number().nonnegative(),
  city: z.string().max(80).optional(),
  description: z.string().max(3000),
  whatsapp: z.string().max(30),
  whatsapp_published: z.boolean(),
  negotiable: z.boolean(),
});

async function currentUser() {
  const client = createClient();
  const { data: { user } } = client ? await client.auth.getUser() : { data: { user: null } };
  return user;
}

function formValue(form: FormData, key: string) {
  const value = form.get(key);
  return typeof value === 'string' ? value : '';
}

export async function updateMyListing(input: FormData | Record<string, unknown>) {
  try {
    const user = await currentUser();
    if (!user) return { success: false, message: 'Please sign in to edit your listing.' };
    const raw = input instanceof FormData ? {
      listingId: formValue(input, 'listingId'), title: formValue(input, 'title'), category: formValue(input, 'category'),
      breed: formValue(input, 'breed'), age: formValue(input, 'age'), gender: formValue(input, 'gender'), color: formValue(input, 'color'),
      price: formValue(input, 'price'), city: formValue(input, 'city'), description: formValue(input, 'description'), whatsapp: formValue(input, 'whatsapp'),
      whatsapp_published: input.get('whatsapp_published') === 'on', negotiable: input.get('negotiable') === 'on',
    } : input;
    const parsed = listingSchema.safeParse(raw);
    if (!parsed.success) return { success: false, message: 'Please complete the listing fields correctly.' };
    if (!isValidPakistaniNumber(parsed.data.whatsapp)) return { success: false, message: 'درست پاکستانی WhatsApp نمبر درج کریں۔' };
    const admin = createAdminClient();
    const client = admin || createClient();
    if (!client) return { success: false, message: 'Supabase configuration is unavailable.' };
    const { listingId, ...fields } = parsed.data;
    const { data, error } = await client.from('listings').update({ ...fields, status: 'pending', rejection_reason: null }).eq('id', listingId).eq('user_id', user.id).select('id').maybeSingle();
    if (error || !data) return { success: false, message: error?.message || 'Listing update نہیں ہو سکی۔' };
    revalidatePath('/my-listings'); revalidatePath('/livestock-market'); revalidatePath('/'); revalidatePath(`/listing/${listingId}`);
    return { success: true, message: 'Post updated and sent for admin approval again.' };
  } catch (error) {
    return { success: false, message: error instanceof Error ? error.message : 'Listing update failed.' };
  }
}

export async function deleteMyListing(input: FormData | { listingId: string }) {
  try {
    const user = await currentUser();
    if (!user) return { success: false, message: 'Please sign in to delete your listing.' };
    const listingId = input instanceof FormData ? formValue(input, 'listingId') : input.listingId;
    if (!idSchema.safeParse(listingId).success) return { success: false, message: 'Invalid listing.' };
    const admin = createAdminClient();
    const client = admin || createClient();
    if (!client) return { success: false, message: 'Supabase configuration is unavailable.' };
    const { data: media } = await client.from('listing_media').select('storage_path').eq('listing_id', listingId);
    if (admin && media?.length) await admin.storage.from('listing-media').remove(media.map(item => item.storage_path));
    await client.from('listing_media').delete().eq('listing_id', listingId);
    const { data, error } = await client.from('listings').delete().eq('id', listingId).eq('user_id', user.id).select('id').maybeSingle();
    if (error || !data) return { success: false, message: error?.message || 'Listing delete نہیں ہو سکی۔' };
    revalidatePath('/my-listings'); revalidatePath('/livestock-market'); revalidatePath('/');
    return { success: true, message: 'Your post has been deleted.' };
  } catch (error) {
    return { success: false, message: error instanceof Error ? error.message : 'Listing delete failed.' };
  }
}
