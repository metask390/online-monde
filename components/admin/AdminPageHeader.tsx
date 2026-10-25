import type { ReactNode } from 'react';

export function AdminPageHeader({ title, description, action }: { title: string; description?: string; action?: ReactNode }) { return <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div><div className="section-kicker">Admin Console</div><h1 className="font-urdu text-3xl font-bold leading-relaxed text-forest">{title}</h1>{description && <p className="mt-2 max-w-2xl font-urdu text-sm leading-7 text-muted">{description}</p>}</div>{action}</div>; }
