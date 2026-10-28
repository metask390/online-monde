'use server';

import { createAdminClient } from '@/lib/admin-auth';
import { createClient } from '@/lib/supabase/server';

export async function createFarm(formData: FormData): Promise<{ success: boolean; error?: string }> {
  try {
    const client = createClient();
    const { data: { user } } = client ? await client.auth.getUser() : { data: { user: null } };
    const admin = createAdminClient();
    if (!user) return { success: false, error: 'Please sign in before creating a farm.' };
    if (!admin) return { success: false, error: 'Supabase admin service is not configured.' };

    const name = String(formData.get('name') || '').trim();
    const city = String(formData.get('city') || '').trim();
    const address = String(formData.get('address') || '').trim();
    const whatsapp = String(formData.get('whatsapp') || '').trim();
    const description = String(formData.get('description') || '').trim();
    if (!name || !city || !address || !whatsapp || !description) return { success: false, error: 'Please complete all required farm fields.' };

    let logo_url: string | null = null;
    const file = formData.get('logo');
    if (file instanceof File && file.size > 0) {
      const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, '-');
      const path = `${user.id}/farms/${crypto.randomUUID()}-${safeName}`;
      const upload = await admin.storage.from('farm-media').upload(path, file, { contentType: file.type, upsert: false });
      if (upload.error) return { success: false, error: `Logo upload failed: ${upload.error.message}` };
      logo_url = admin.storage.from('farm-media').getPublicUrl(path).data.publicUrl;
    }

    const { error } = await admin.from('dairy_farms').insert({ owner_id: user.id, name, city, address, whatsapp, description, logo_url, status: 'pending' });
    if (error) return { success: false, error: error.message };
    return { success: true };
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : 'Farm creation failed unexpectedly.' };
  }
}
