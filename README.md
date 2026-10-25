# Online Mandi — Abuzuriaz Cattle Farm

Online Mandi is an Urdu-first, RTL marketplace for Abuzuriaz Cattle Farm. The project contains the public user website from Step 2 and the protected admin console from Step 3, built with Next.js App Router, TypeScript, Tailwind CSS and Supabase-ready server boundaries.

## Local development

```bash
pnpm install
pnpm dev
pnpm typecheck
pnpm build
```

Set the values in `.env.local` from `.env.example`. Never commit `.env.local`, service-role keys, or any credential.

## Admin security model

Only `/admin/login` is public. There is no admin signup route. Every protected admin page is guarded by middleware and the server-side `requireAdmin()` helper. Access requires all of the following:

1. `user.email` matches `ADMIN_EMAIL`.
2. `email_confirmed_at` is set.
3. The user has `role = 'admin'` in `public.user_roles`.

Admin mutations call `requireAdmin()`, validate inputs with Zod, use the service-role client only on the server, write an `admin_activity` audit entry, and revalidate affected paths. The service-role key is never imported by a client component.

## Promote the first admin

Create the user through the normal public registration flow or the Supabase Auth dashboard, verify the email, then add the role from a secure SQL editor:

```sql
insert into public.user_roles (user_id, role)
values ('<verified-user-uuid>', 'admin')
on conflict do nothing;
```

Set `ADMIN_EMAIL` to the same verified email and sign in at `/admin/login`. Admin WhatsApp is configured from `/admin/settings` and is used by the public site only when consent is present.

## Vercel deployment

1. Connect the GitHub repository `metask390/online-monde` to a Vercel project.
2. Select **Next.js**. Build command: `next build`. Install command: `pnpm install`.
3. Add these environment variables in Vercel:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `NEXT_PUBLIC_SITE_URL` (the deployed URL)
   - `ADMIN_EMAIL=muhammaddanyal4545@gmail.com`
4. In Supabase Auth settings, set Site URL to the deployed URL and add:
   - `https://<vercel-domain>/auth/callback`
   - `http://localhost:3000/auth/callback`
5. Configure Google OAuth redirect URLs if Google sign-in is enabled.
6. Deploy, then verify the public pages and `/admin/login` in the deployed environment.

The current repository contains the deployment-ready code and configuration documentation. Actual Vercel/Supabase production credentials and deployment ownership remain external environment operations and must not be committed to Git.

## Security smoke-test checklist

- Visitor sees only approved public listings.
- Register → verify → login → post → admin approves → listing becomes public.
- Login → order milk → order number is generated → admin confirms → user sees status.
- Chat text and private voice message use participant checks and signed URLs only.
- Non-admin visiting `/admin` is redirected to `/admin/login`.
- Admin email without an `admin` role is denied and signed out.
- Direct attempts to approve a user listing are denied by the server helper/RLS policy.
- Private voice-message objects are not publicly readable.
- Rejected listings stay hidden from public users and show the rejection reason to their owner.
- Service-role credentials are absent from client bundles and Git history.
