# Online Mandi — Abuzuriaz Cattle Farm

Step 2 public user-facing website for the Online Mandi marketplace. The app uses Next.js App Router, TypeScript, Tailwind CSS, RTL Urdu typography, reusable marketplace components, and Supabase-ready boundaries.

## Local commands

```bash
pnpm install
pnpm dev
pnpm typecheck
pnpm build
```

## Current scope

This commit builds the public UI and route foundation only. Database schema, real Supabase credentials, storage buckets, RPCs, OAuth providers, realtime subscriptions, and production records are intentionally left for the next integration prompt. The UI uses empty states instead of fake marketplace data until those services are connected.

## Visual direction

Deep farm green, warm cream, and gold accents support an Urdu-first, mobile-first farm marketplace. See `plan.md` for the design system and `TODO.md` for the complete Step 2 acceptance scope.
