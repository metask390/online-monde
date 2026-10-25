import { createClient as createServerClient } from '@/lib/supabase/server';
import { createClient as createSupabaseAdminClient } from '@supabase/supabase-js';
import { redirect } from 'next/navigation';
const ADMIN_EMAIL = 'muhammaddanyal4545@gmail.com';
export function createAdminClient() { const url = process.env.NEXT_PUBLIC_SUPABASE_URL; const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY; if (!url || !serviceKey) return null; return createSupabaseAdminClient(url, serviceKey, { auth: { autoRefreshToken: false, persistSession: false } }); }
export async function requireAdmin() { const client = createServerClient(); if (!client) redirect('/admin/login?error=configuration'); const { data: { user } } = await client.auth.getUser(); if (!user || user.email?.toLowerCase() !== ADMIN_EMAIL) { await client.auth.signOut(); redirect('/admin/login?error=unauthorized'); } return { user, adminClient: createAdminClient() }; }
export function adminLoginError(code?: string) { if (code === 'configuration') return 'Admin configuration is incomplete. Check the environment variables.'; if (code === 'unauthorized') return 'This account is not authorized for admin access.'; if (code === 'invalid') return 'The email or password is incorrect.'; return undefined; }
