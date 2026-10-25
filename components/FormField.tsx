import type { ReactNode } from 'react';

export function FormField({ label, hint, children, required = false }: { label: string; hint?: string; children: ReactNode; required?: boolean }) {
  return <label className="block"><span className="mb-2 flex items-center justify-between gap-2 font-urdu text-sm font-bold text-forest">{label}{required && <b className="text-gold">*</b>}</span>{children}{hint && <span className="mt-1 block text-[11px] text-muted">{hint}</span>}</label>;
}
