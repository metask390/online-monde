import type { Metadata } from 'next';
import Link from 'next/link';
export const metadata: Metadata = { title: 'Account ready', description: 'No email verification is required.' };
export default function VerifyEmailPage() { return <div className="page-frame flex min-h-[65vh] items-center justify-center"><div className="soft-card max-w-md p-8 text-center"><h1 className="text-2xl font-bold text-forest">No email verification required</h1><p className="mt-3 text-sm leading-7 text-muted">Your account can be used immediately after sign up. Continue to the marketplace.</p><Link href="/" className="primary-button mt-6">Go to marketplace</Link></div></div>; }
