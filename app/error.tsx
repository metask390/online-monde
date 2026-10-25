'use client';

import { RefreshCcw } from 'lucide-react';

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) { return <div className="page-frame flex min-h-[65vh] items-center justify-center"><div className="soft-card max-w-md p-8 text-center"><h1 className="font-urdu text-2xl font-bold text-forest">کچھ دیر کے لیے مسئلہ آ گیا</h1><p className="mt-3 font-urdu text-sm leading-8 text-muted">براہِ کرم دوبارہ کوشش کریں۔ data connection کے بعد errors مزید واضح ہوں گے۔</p><button onClick={() => reset()} className="primary-button mt-6"><RefreshCcw size={16} /> دوبارہ کوشش کریں</button></div></div>; }
