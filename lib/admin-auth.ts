import { createClient as createServerClient } from '@/lib/supabase/server';
import { createClient as createSupabaseAdminClient } from '@supabase/supabase-js';
import { redirect } from 'next/navigation';

export function createAdminClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !serviceKey) return null;
  return createSupabaseAdminClient(url, serviceKey, { auth: { autoRefreshToken: false, persistSession: false } });
}

export async function requireAdmin() {
  const client = createServerClient();
  const configuredEmail = process.env.ADMIN_EMAIL;
  if (!client || !configuredEmail) redirect('/admin/login?error=configuration');
  const { data: { user } } = await client.auth.getUser();
  const emailMatches = Boolean(user?.email && user.email.toLowerCase() === configuredEmail.toLowerCase());
  const confirmed = Boolean(user?.email_confirmed_at);
  if (!user || !emailMatches || !confirmed) {
    await client.auth.signOut();
    redirect('/admin/login?error=unauthorized');
  }
  const { data: role, error } = await client.from('user_roles').select('role').eq('user_id', user.id).eq('role', 'admin').maybeSingle();
  if (error || !role) {
    await client.auth.signOut();
    redirect('/admin/login?error=unauthorized');
  }
  return { user, adminClient: createAdminClient() };
}

export function adminLoginError(code?: string) {
  if (code === 'configuration') return 'Admin configuration مکمل نہیں؛ environment variables چیک کریں۔';
  if (code === 'unauthorized') return 'یہ account admin access کے لیے authorized نہیں ہے۔';
  if (code === 'invalid') return 'ای میل یا پاس ورڈ درست نہیں۔';
  return undefined;
}
