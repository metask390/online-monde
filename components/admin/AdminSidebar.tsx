import Link from 'next/link';
import { Activity, Bell, ClipboardList, FileText, Home, Milk, Package, Settings, ShoppingCart, ShieldAlert, Users, Warehouse } from 'lucide-react';

const links = [
  ['Dashboard', '/admin', Home], ['Moderation', '/admin/listings', ClipboardList], ['Inventory', '/admin/inventory', Warehouse], ['Milk Products', '/admin/milk-products', Milk], ['Orders', '/admin/orders', ShoppingCart], ['Contact Requests', '/admin/requests', FileText], ['Users', '/admin/users', Users], ['Reports', '/admin/reports', ShieldAlert], ['Notifications', '/admin/notifications', Bell], ['Settings', '/admin/settings', Settings], ['Activity Log', '/admin/activity', Activity],
] as const;

export function AdminSidebar() { return <aside className="hidden min-h-screen w-72 shrink-0 border-l border-forest/10 bg-forest p-5 text-white lg:block"><Link href="/admin" className="mb-9 flex items-center gap-3 border-b border-white/10 pb-6"><span className="grid h-11 w-11 place-items-center rounded-2xl bg-gold text-xl text-forest">♞</span><span><strong className="block font-urdu text-lg text-white">ابوزریاز فارم</strong><small className="text-[10px] uppercase tracking-[.24em] text-gold">Admin Console</small></span></Link><nav className="space-y-1">{links.map(([label, href, Icon]) => <Link key={href} href={href} className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-white/70 transition hover:bg-white/10 hover:text-white"><Icon size={17} /> <span>{label}</span></Link>)}</nav></aside>; }
