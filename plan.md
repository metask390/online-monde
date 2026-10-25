# Online Mandi — Step 2 implementation plan

## Implementation approach

یہ مرحلہ Online Mandi کے public user-facing experience پر مرکوز ہے۔ چونکہ اس مرحلے میں database اور external service credentials connect نہیں کیے جا رہے، code ایک production-ready Next.js App Router foundation دے گا: RTL Urdu shell، route structure، reusable marketplace components، typed domain contracts، Supabase-ready adapters، protected-route boundaries، اور ہر data-dependent جگہ پر واضح Urdu empty/loading/error states۔ اصل database reads/writes، media buckets، RPCs، realtime، اور OAuth credentials اگلے مرحلے میں wired ہوں گے؛ اس مرحلے میں کوئی fake production record نہیں دکھایا جائے گا۔

ہر route کو App Router page کے طور پر رکھا جائے گا تاکہ بعد میں server-side Supabase fetching شامل کی جا سکے۔ Client-only interaction (filters, nav drawer, search affordance, order/listing forms, favorite toggles, voice-recording affordance) محدود چھوٹے components میں رہے گا۔ Shared visual language deep green, warm cream, gold accents، soft rounded cards، اور mobile-first bottom navigation سے آئے گی۔

## Project structure

- `app/` — root layout, home page، marketplace routes، auth/protected-route shells، loading/error/not-found boundaries، اور route metadata۔
- `components/` — HeaderNav، BottomNav، listing/product cards، filters، hero، empty/loading states، forms، drawers اور design primitives۔
- `lib/` — theme helpers، PKR/WhatsApp formatting، route metadata، typed data access contracts، اور Supabase client boundaries۔
- `types/` — listing, product, order, notification, conversation اور user domain types۔
- `public/` — hero visual، route manifest، favicon/brand assets۔
- `plan.md` — approved implementation and design direction۔
- `TODO.md` — source requirements preserved as outcome-oriented delivery items۔

## Design direction

### Candidate styles

- **Desert pastoral editorial** — احتمال 0.07؛ cream paper، green ink، gold rules، اور farm photography کے ساتھ۔
- **Modern mandi utility** — احتمال 0.06؛ مضبوط information hierarchy، واضح filters، اور compact commerce cards۔
- **Heritage farm ledger** — احتمال 0.08؛ stamp-like badges، warm surfaces، اور trust-first copy۔

منتخب direction: **Desert pastoral editorial**۔

### Design movement

مقامی منڈی کی گرمجوشی اور editorial farm catalogue کا امتزاج: ایسا interface جو marketplace کی utility برقرار رکھتے ہوئے Abuzuriaz Cattle Farm کو قابلِ اعتماد، گھریلو، اور صاف محسوس کرے۔

### Core principles

1. **Trust before transaction:** price، availability، location، seller identity اور consent-based contact actions ہمیشہ صاف دکھیں۔
2. **Readable rhythm:** Nastaliq headings کے ساتھ مختصر، سانس لینے والی copy اور واضح CTA hierarchy۔
3. **Mobile-first reach:** bottom navigation، thumb-friendly controls، اور single-column card feed بنیادی تجربہ ہوں گے۔
4. **Quiet richness:** green/cream surfaces، gold accents، subtle grain/line motifs؛ decorative noise نہیں۔

### Color philosophy

Deep green فارم، صحت، اور بھروسے کی علامت ہے؛ warm cream مٹی اور کاغذی catalogue کی نرمی لاتا ہے؛ gold اہم actions، prices، اور heritage quality کو نمایاں کرتا ہے۔ Red صرف status/error کے لیے مختصر مقدار میں استعمال ہوگا۔

### Layout paradigm

صفحہ ایک vertically flowing editorial feed ہوگا، جس میں hero کے بعد overlapping search, horizontal category rail، پھر responsive cards آتے ہیں۔ Desktop پر max-width content column کے ساتھ asymmetrical section headers اور mobile پر bottom nav؛ یہ generic centered dashboard کے بجائے scrolling marketplace کو foreground کرے گا۔

### Signature elements

- Gold-tipped section rules اور چھوٹے farm-seal motifs۔
- Cream cards پر green ink labels اور rounded image windows۔
- Bottom navigation کا raised center rhythm، جس سے چار بنیادی destinations ہر وقت accessible رہیں۔

### Interaction philosophy

ہر interaction فوری visual acknowledgement دے: selected filter میں gold tint، pressed buttons میں subtle scale، drawer open ہونے پر soft scrim، اور destructive actions کے لیے صاف Urdu confirmation۔ Data absent ہو تو خاموش blank screen کے بجائے context-aware empty state دکھائی جائے گی۔

### Animation

Animation مختصر اور functional رہے گی: cards کے لیے 180ms ease-out reveal، bottom nav active pill کے لیے 220ms slide، drawer کے لیے 240ms translate، اور loading کے لیے low-contrast shimmer۔ Decorative motion صرف hero glow اور seal rotation تک محدود ہوگا۔

### Typography system

Primary display/body Urdu family `Noto Nastaliq Urdu` ہے۔ English technical labels اور compact metadata کے لیے system sans fallback استعمال ہوگا۔ Hero headline 32–48px، section headings 22–30px، card title 18–22px، body 15–17px، metadata 12–14px؛ line-height کشادہ رکھی جائے گی تاکہ Nastaliq readable رہے۔

### Brand essence

**Online Mandi — Abuzuriaz Cattle Farm:** مقامی جانور، دودھ، اور معتبر رابطہ ایک ہی بااعتماد جگہ پر۔ شخصیت: **معتبر، دیسی، مددگار**۔

### Brand voice

Headlines گرم مگر واضح ہوں: “اپنے فارم کے لیے بہتر انتخاب” اور “منڈی کا بھروسہ، گھر کی آسانی”۔ CTA مختصر اور action-led ہوں: “مویشی دیکھیں”، “پوسٹ بنائیں”، “ایڈمن سے رابطہ کریں”۔

### Wordmark & logo

Wordmark کے ساتھ ایک سادہ farm-seal mark: گول badge میں horn silhouette اور wheat line، نیچے `ABUZURIAZ CATTLE FARM` کی مختصر uppercase label۔ Code میں یہ mark CSS/SVG سے crisp رہے گا؛ generated hero visual صرف scene کے لیے استعمال ہوگا۔

### Signature brand color

`#1a4d2e` — “Farm Green”؛ تمام primary CTAs، active navigation، اور trust cues میں مستقل استعمال ہوگا۔
