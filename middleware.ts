import { createServerClient, type SetAllCookies } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const isAdminPath = request.nextUrl.pathname === '/admin' || request.nextUrl.pathname.startsWith('/admin/');
  const isAdminLogin = request.nextUrl.pathname === '/admin/login';
  if (isAdminPath && isAdminLogin) return NextResponse.next();
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return isAdminPath ? NextResponse.redirect(new URL('/admin/login?error=configuration', request.url)) : NextResponse.next();
  let response = NextResponse.next({ request });
  const supabase = createServerClient(url, key, {
    cookies: {
      getAll: () => request.cookies.getAll(),
      setAll(cookiesToSet: Parameters<SetAllCookies>[0]) {
        cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
        response = NextResponse.next({ request });
        cookiesToSet.forEach(({ name, value, options }) => response.cookies.set(name, value, { ...options, sameSite: 'none', secure: true }));
      },
    },
  });
  if (isAdminPath) {
    const { data: { user } } = await supabase.auth.getUser();
    const configuredEmail = process.env.ADMIN_EMAIL;
    const matchesEmail = Boolean(user?.email && configuredEmail && user.email.toLowerCase() === configuredEmail.toLowerCase());
    const confirmed = Boolean(user?.email_confirmed_at);
    const { data: role } = user ? await supabase.from('user_roles').select('role').eq('user_id', user.id).eq('role', 'admin').maybeSingle() : { data: null };
    if (!user || !matchesEmail || !confirmed || !role) {
      await supabase.auth.signOut();
      return NextResponse.redirect(new URL('/admin/login?error=unauthorized', request.url));
    }
  } else {
    await supabase.auth.getUser();
  }
  return response;
}

export const config = { matcher: ['/((?!_next/static|_next/image|favicon.ico|manus-routes.json).*)'] };
