import type { ReactNode } from 'react';

export function FormPanel({ children, title, description }: { children: ReactNode; title: string; description?: string }) { return <section className="soft-card p-5 sm:p-7"><h2 className="font-urdu text-xl font-bold text-forest">{title}</h2>{description && <p className="mt-2 font-urdu text-sm leading-7 text-muted">{description}</p>}<div className="mt-6">{children}</div></section>; }
