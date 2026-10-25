import type { Metadata } from 'next';
import { PageIntro } from '@/components/PageIntro';
import { ProtectedNotice } from '@/components/ProtectedNotice';
import { ConversationChat } from '@/components/PublicAccount';
export const metadata: Metadata = { title: 'Conversation', description: 'Private message conversation' };
export default function ConversationPage({ params }: { params: { conversationId: string } }) { return <div className="page-frame"><PageIntro kicker="private chat" title="Conversation" description="Listing seller کے ساتھ محفوظ پیغام رسانی۔" backHref="/messages" /><div className="grid gap-7 lg:grid-cols-[.7fr_1.3fr]"><ProtectedNotice redirect="/messages" /><ConversationChat conversationId={params.conversationId} /></div></div>; }
