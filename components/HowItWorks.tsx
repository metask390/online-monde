const steps = [['01', 'تلاش کریں', 'اپنی ضرورت کے مطابق مویشی، دودھ یا فارم پروڈکٹ تلاش کریں۔'], ['02', 'معلومات دیکھیں', 'قیمت، شہر، دستیابی اور دیگر تفصیل اطمینان سے پڑھیں۔'], ['03', 'رابطہ کریں', 'WhatsApp، پیغام یا ایڈمن رابطے کے ذریعے اگلا قدم اٹھائیں۔']];

export function HowItWorks() {
  return <section className="rounded-[2rem] border border-gold/25 bg-[linear-gradient(135deg,rgba(255,255,255,.65),rgba(235,225,201,.7))] p-6 sm:p-8"><div className="mb-8 max-w-lg"><div className="section-kicker">آسان طریقہ</div><h2 className="section-title">آپ کی منڈی، تین آسان قدم</h2></div><div className="grid gap-4 md:grid-cols-3">{steps.map(([number, title, description]) => <div key={number} className="relative rounded-2xl bg-white/60 p-5"><span className="font-sans text-4xl font-black text-gold/45">{number}</span><h3 className="mt-2 font-urdu text-xl font-bold text-forest">{title}</h3><p className="mt-2 font-urdu text-sm leading-8 text-muted">{description}</p></div>)}</div></section>;
}
