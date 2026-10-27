import { createAdminClient } from '@/lib/admin-auth';

export type AdminDashboard = { counts: Record<string, number>; activity: Array<{ id: string; action: string; entity_type: string; details: unknown; created_at: string }> };

async function countRows(client: ReturnType<typeof createAdminClient>, table: string, filters: Array<[string, string, string | number]> = []) {
  if (!client) return 0;
  let query = client.from(table).select('*', { count: 'exact', head: true });
  for (const [column, operator, value] of filters) query = operator === 'eq' ? query.eq(column, value) : query.neq(column, value);
  const { count } = await query;
  return count || 0;
}

export async function getAdminDashboard(): Promise<AdminDashboard> {
  const client = createAdminClient();
  if (!client) return { counts: {}, activity: [] };
  const [users, pending, approved, rejected, inventory, milkProducts, pendingOrders, orders, requests, notifications, reports, pendingFarms] = await Promise.all([
    countRows(client, 'profiles'), countRows(client, 'listings', [['status', 'eq', 'pending']]), countRows(client, 'listings', [['status', 'eq', 'approved']]), countRows(client, 'listings', [['status', 'eq', 'rejected']]), countRows(client, 'listings', [['source', 'eq', 'admin'], ['status', 'eq', 'approved']]), countRows(client, 'milk_products', [['is_active', 'eq', true as unknown as string]]), countRows(client, 'orders', [['status', 'eq', 'pending']]), countRows(client, 'orders'), countRows(client, 'admin_contact_requests', [['status', 'eq', 'pending']]), countRows(client, 'notifications', [['is_read', 'eq', false as unknown as string]]), countRows(client, 'reports', [['status', 'eq', 'open']]), countRows(client, 'dairy_farms', [['status', 'eq', 'pending']]),
  ]);
  const { data: activity } = await client.from('admin_activity').select('id,action,entity_type,details,created_at').order('created_at', { ascending: false }).limit(10);
  return { counts: { users, pendingListings: pending, approvedListings: approved, rejectedListings: rejected, inventory, milkProducts, pendingOrders, orders, pendingRequests: requests, unreadNotifications: notifications, openReports: reports, pendingFarms }, activity: activity || [] };
}
