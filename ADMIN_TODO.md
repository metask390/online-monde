# Step 3 — Admin Panel Acceptance Notes

## Delivered in this commit

- `/admin/login` is the only public admin route; no admin signup route exists.
- `/admin` plus Moderation, Inventory, Milk Products, Orders, Contact Requests, Users, Reports, Notifications, Settings and Activity Log routes are present.
- Middleware and `requireAdmin()` require configured admin email, confirmed email, and `user_roles.role = 'admin'`.
- Admin mutations validate with Zod, use the service-role client only in server code, write `admin_activity`, and revalidate affected paths.
- Admin shell uses the farm green/cream/gold identity and does not render the public HeaderNav, Footer, or four-item BottomNav.
- README contains Vercel environment setup, promotion SQL, auth redirect setup, and smoke-test checklist.

## Requires connected Step 1/Supabase and deployment credentials

- Real table schema, RLS policies, triggers, storage buckets, signed media URLs, and service-role environment values must exist in the target Supabase project.
- Media upload persistence for admin inventory/request/listing forms must be connected to the project storage buckets.
- Vercel project creation, environment-variable entry, Supabase URL allow-listing, and production deploy must be completed by an authorized Vercel/Supabase account. The code is prepared for this but no production credentials are committed.
