# Online Mandi — Step 2 TODO

## 1. Public shell and navigation

- [ ] RTL root layout with Urdu-first typography, Noto Nastaliq Urdu, deep green `#1a4d2e`, warm cream `#f5f0e1`, gold `#c9a961`, mobile-first responsive behavior, PKR formatting, and reusable loading/error/empty states.
- [ ] Fixed bottom navigation with exactly four sections: Dashboard `/`, Available Items `/available-items`, Livestock Market `/livestock-market`, and Contact Admin `/contact-admin`.
- [ ] Top header with Abuzuriaz Cattle Farm logo, search affordance, notification badge, profile/login affordance, secondary menu links for Profile, My Listings, My Orders, Messages, Favorites, Notifications, and Logout when signed in; footer with farm info, contact, and links.

## 2. Dashboard and discovery

- [ ] Homepage `/` with farm hero, Urdu welcome, Abuzuriaz branding, CTAs “مویشی دیکھیں” and “دودھ آرڈر کریں”, search by title/breed/city, featured admin-owned approved items, cow/buffalo milk cards, recently approved user listings, category grid for Cow, Buffalo, Goat, Sheep, Poultry, Camel, Horse, Other, three-step Urdu buying/selling explanation, contact-admin CTA, and footer.
- [ ] Available Items `/available-items` with admin-approved listings, active milk products, category tabs, responsive 1/2/3-column cards, image/name/category/PKR/description/location/availability, detail/order/conditional WhatsApp actions, and Urdu empty state.
- [ ] Livestock Market `/livestock-market` with approved user listings, URL-search-param filters for search/category/breed/color/age/gender/min price/max price/city/sort, create-post login redirect, listing cards with seller/location/WhatsApp/detail/message actions, pagination or infinite-scroll boundary, and Urdu empty state.
- [ ] Listing detail `/listing/[id]` with gallery/video, complete livestock details, PKR price and negotiable badge, seller/city, conditional WhatsApp, message seller, favorite, report, and approved/owner/admin visibility boundary with 404 behavior.

## 3. Requests, products and user listings

- [ ] Protected Contact Admin `/contact-admin` with request type (livestock sale, milk supply, farm product, other), title, description, category, expected price, location, WhatsApp, consent, photo/video media fields, pending request history, and Urdu success/status messages.
- [ ] Milk `/milk` with active cow/buffalo product cards showing image, type, PKR per litre, quantity, delivery areas, description; protected order form with quantity, pickup/delivery, address, phone, notes, place-order boundary, order-number success state, and recent milk orders.
- [ ] Protected Listing Creation `/listings/new` with title/category/breed/age/gender/color/PKR price/negotiable/city/address/description/optional health info/WhatsApp/consent, 1–8 photos, optional video, upload progress boundary, pending insert boundary, Urdu confirmation, and redirect-to-my-listings boundary.
- [ ] Protected My Listings `/my-listings` with Pending/Approved/Rejected/Sold badges, rejection reason, pending edit, pending/rejected delete, approved mark-sold actions, and Urdu empty state.
- [ ] Protected My Orders `/my-orders` with order number/product/quantity/total PKR/status/date and Pending → Confirmed → Processing → Completed/Cancelled timeline.
- [ ] Protected Favorites `/favorites` with favorited listing grid and remove toggle.

## 4. Account, communication and auth

- [ ] Protected Notifications `/notifications` with title/body/link/timestamp/read/unread, mark-read/mark-all-read behavior, and header unread-count boundary.
- [ ] Protected Messages `/messages` and `/messages/[conversationId]` with conversation list, participants, last-message/unread indicators, chat bubbles/timestamps/input, voice-recording UX with MediaRecorder permission/unsupported/retry states, private voice-message upload boundary, signed playback boundary, and optional Realtime boundary.
- [ ] Protected Profile `/profile` with full name/city/bio/avatar upload, phone/WhatsApp editing, read-only username, and Urdu success/error feedback.
- [ ] Auth routes `/auth/login`, `/auth/register`, `/auth/forgot-password`, `/auth/reset-password`, `/auth/callback`, `/auth/verify-email`, and profile-completeness redirect boundary after Google OAuth when phone/WhatsApp is missing.

## 5. Integration boundaries and quality

- [ ] Supabase-ready server/client helpers using `@supabase/ssr`, cookie session middleware boundary, typed domain contracts, and Zod validation seams; do not modify database schema in Step 2.
- [ ] Consent-based WhatsApp URL helper that normalizes Pakistani numbers, includes the required Urdu listing message and short reference ID, and renders only for `whatsapp_published=true` with valid number.
- [ ] SEO metadata per page, Open Graph boundary for listing pages, accessible alt text/aria labels/keyboard navigation, route manifest at `/manus-routes.json`, and responsive layout across mobile/tablet/desktop.
- [ ] Build, typecheck, diagnostics, and route smoke checks pass; commit and push to `metask390/online-monde` with message `Step 2: public user website`.
