import { faqs, navLinks, packages, portfolio, services, systemUseCases, testimonials, whatsappUrl } from "@/data/site";

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center reveal">
      <span className="rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-100">{eyebrow}</span>
      <h2 className="mt-5 text-3xl font-black leading-tight text-white md:text-5xl">{title}</h2>
      <p className="mt-4 text-base leading-8 text-slate-300 md:text-lg">{description}</p>
    </div>
  );
}

function ArrowIcon() {
  return <span aria-hidden="true" className="transition-transform group-hover:-translate-x-1">←</span>;
}

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#070b18]/75 backdrop-blur-2xl">
      <nav className="container-shell flex h-20 items-center justify-between" aria-label="التنقل الرئيسي">
        <a href="#top" className="group flex items-center gap-3" aria-label="Nexa Digital الرئيسية">
          <span className="grid size-11 place-items-center rounded-2xl bg-gradient-to-br from-cyan-300 to-violet-500 font-black text-slate-950 shadow-lg shadow-cyan-500/20 transition-transform group-hover:scale-105">ND</span>
          <span className="text-xl font-black tracking-tight text-white">Nexa Digital</span>
        </a>
        <div className="hidden items-center gap-7 text-sm font-bold text-slate-300 lg:flex">
          {navLinks.map((link) => <a key={link.href} href={link.href} className="transition hover:text-cyan-200">{link.label}</a>)}
        </div>
        <a href={whatsappUrl} target="_blank" rel="noreferrer" className="rounded-full bg-white px-5 py-3 text-sm font-black text-slate-950 shadow-xl shadow-cyan-500/20 transition hover:-translate-y-1 hover:bg-cyan-100">ابدأ عبر واتساب</a>
      </nav>
    </header>
  );
}

export function HeroSection() {
  const chips = ["ATS CV", "LinkedIn", "Portfolio", "Websites", "Custom Systems", "Automation", "AI Tools"];
  return (
    <section id="top" className="relative isolate min-h-screen overflow-hidden pb-16 pt-32 md:pt-40">
      <div className="soft-grid pointer-events-none absolute inset-0 -z-10 opacity-60" />
      <div className="container-shell grid items-center gap-12 lg:grid-cols-[1.04fr_.96fr]">
        <div className="reveal">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold text-cyan-100 shadow-xl shadow-cyan-950/20">
            <span className="size-2 rounded-full bg-emerald-400 pulse-glow" /> خدمات رقمية احترافية للأفراد والشركات
          </div>
          <h1 className="gradient-text text-4xl font-black leading-[1.15] md:text-6xl lg:text-7xl">حوّل فكرتك أو خدمتك إلى حضور رقمي احترافي</h1>
          <p className="mt-6 max-w-2xl text-lg leading-9 text-slate-300 md:text-xl">من السيرة الذاتية وLinkedIn إلى المواقع والسيستم والأتمتة — Nexa Digital تساعدك تظهر باحتراف وتشتغل بذكاء.</p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="group rounded-full bg-gradient-to-l from-cyan-300 to-violet-400 px-7 py-4 text-center font-black text-slate-950 shadow-2xl shadow-cyan-500/25 transition hover:-translate-y-1">اطلب خدمتك الآن <ArrowIcon /></a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="rounded-full border border-white/15 bg-white/10 px-7 py-4 text-center font-black text-white transition hover:-translate-y-1 hover:bg-white/15">تواصل عبر واتساب</a>
            <a href="#services" className="rounded-full px-7 py-4 text-center font-black text-cyan-100 transition hover:text-white">شاهد خدماتنا</a>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {chips.map((chip) => <span key={chip} className="rounded-full border border-white/10 bg-white/[.06] px-4 py-2 text-sm font-bold text-slate-300">{chip}</span>)}
          </div>
        </div>
        <div className="relative reveal lg:min-h-[620px]">
          <div className="glass-card float-slow rounded-[2rem] p-5 md:p-7">
            <div className="rounded-[1.5rem] bg-slate-950/80 p-5 ring-1 ring-white/10">
              <div className="mb-5 flex items-center justify-between"><span className="font-black text-white">Nexa Workflow</span><span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-black text-emerald-200">Live</span></div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-4"><b className="text-cyan-100">ATS Score</b><div className="mt-3 h-2 rounded-full bg-white/10"><div className="h-2 w-[88%] rounded-full bg-cyan-300" /></div><p className="mt-3 text-sm text-slate-300">كلمات مفتاحية + وصف وظيفي + قابلية قراءة</p></div>
                <div className="rounded-2xl border border-violet-300/20 bg-violet-300/10 p-4"><b className="text-violet-100">LinkedIn SEO</b><p className="mt-3 text-sm leading-6 text-slate-300">تموضع مهني يظهر للمجندين والعملاء.</p></div>
                <div className="rounded-2xl border border-emerald-300/20 bg-emerald-300/10 p-4"><b className="text-emerald-100">Custom System</b><p className="mt-3 text-sm leading-6 text-slate-300">CRM • Booking • Inventory • Dashboards</p></div>
                <div className="rounded-2xl border border-amber-300/20 bg-amber-300/10 p-4"><b className="text-amber-100">Automation + AI</b><p className="mt-3 text-sm leading-6 text-slate-300">إشعارات، تقارير، مساعد ذكي، متابعة عملاء.</p></div>
              </div>
            </div>
          </div>
          <div className="float-delay absolute -bottom-6 left-0 hidden w-56 rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl md:block"><p className="text-sm font-bold text-slate-200">تحويل العمل اليدوي إلى سيستم منظم قابل للقياس والتطوير.</p></div>
        </div>
      </div>
    </section>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className="section-padding">
      <div className="container-shell">
        <SectionTitle eyebrow="خدمات Nexa Digital" title="كل ما تحتاجه لبناء حضور رقمي قوي وتشغيل أذكى" description="خدمات مترابطة تبدأ من الهوية المهنية للأفراد وتصل إلى مواقع الشركات، الأنظمة المخصصة، الأتمتة، وأدوات الذكاء الاصطناعي للأعمال." />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => <article key={service.title} className="glass-card group rounded-3xl p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-300/35" style={{ animationDelay: `${index * 45}ms` }}><div className="mb-5 grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-cyan-300/90 to-violet-400/90 text-sm font-black text-slate-950 shadow-lg shadow-cyan-500/20">{service.icon}</div><h3 className="text-xl font-black text-white">{service.title}</h3><p className="mt-3 min-h-24 text-sm leading-7 text-slate-300">{service.description}</p><a href={whatsappUrl} target="_blank" rel="noreferrer" className="group mt-5 inline-flex items-center gap-2 font-black text-cyan-200">استفسر عن الخدمة <ArrowIcon /></a></article>)}
        </div>
      </div>
    </section>
  );
}

export function WhyChooseUsSection() {
  const reasons = ["تصميم احترافي يعكس ثقة العلامة", "حلول مخصصة حسب احتياج العميل", "محتوى عربي احترافي ومقنع", "اهتمام بالـ SEO وتجربة المستخدم", "تسليم منظم وقابل للتعديل", "دعم للأفراد والشركات", "قابلية للتطوير مستقبلًا"];
  return <section className="section-padding bg-white/[.03]"><div className="container-shell grid gap-10 lg:grid-cols-[.9fr_1.1fr]"><div><SectionTitle eyebrow="لماذا نحن؟" title="خبرة تجمع بين التصميم، المحتوى، والتشغيل الرقمي" description="نركز على النتيجة التجارية: ثقة أعلى، عرض أوضح، طلبات أكثر، ونظام عمل قابل للنمو." /></div><div className="grid gap-4 sm:grid-cols-2">{reasons.map((reason) => <div key={reason} className="rounded-3xl border border-white/10 bg-white/[.06] p-5 transition hover:bg-white/[.09]"><span className="mb-4 grid size-9 place-items-center rounded-full bg-emerald-400/15 text-emerald-200">✓</span><h3 className="font-black text-white">{reason}</h3></div>)}</div></div></section>;
}

export function CustomSystemsSection() {
  return <section id="systems" className="section-padding"><div className="container-shell"><div className="glass-card grid gap-8 rounded-[2.2rem] p-7 md:p-10 lg:grid-cols-[1fr_.95fr]"><div><span className="rounded-full bg-violet-400/15 px-4 py-2 text-sm font-black text-violet-100">الأهم للمشروعات والشركات</span><h2 className="mt-5 text-3xl font-black leading-tight md:text-5xl">إنشاء سيستم مخصص حسب مشروعك — ليس قالبًا جاهزًا</h2><p className="mt-5 text-lg leading-9 text-slate-300">نبدأ من طريقة عملك الحقيقية: كيف يدخل العميل؟ من يوافق؟ أين تتوقف العملية؟ ما التقارير المطلوبة؟ ثم نصمم ونطور نظامًا يساعد فريقك على البيع، المتابعة، التحصيل، الحجز، إدارة المخزون، وإصدار التقارير من لوحة واحدة.</p><a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-7 inline-flex rounded-full bg-white px-7 py-4 font-black text-slate-950 transition hover:-translate-y-1">ناقش فكرة السيستم الآن</a></div><div className="grid gap-3 sm:grid-cols-2">{systemUseCases.map((item) => <div key={item} className="rounded-2xl border border-cyan-300/15 bg-cyan-300/10 p-4 font-bold text-cyan-50">{item}</div>)}</div></div></div></section>;
}

export function HowItWorksSection() {
  const steps = ["استشارة وفهم الاحتياج", "جمع البيانات والمحتوى", "التصميم أو التطوير", "المراجعة والتحسين", "التسليم والدعم"];
  return <section className="section-padding"><div className="container-shell"><SectionTitle eyebrow="طريقة العمل" title="عملية واضحة من أول رسالة حتى التسليم" description="نحافظ على التواصل المنظم حتى تعرف ما الذي سيتم تنفيذه، ولماذا، ومتى يتم تسليمه." /><div className="grid gap-5 md:grid-cols-5">{steps.map((step, index) => <div key={step} className="relative rounded-3xl border border-white/10 bg-white/[.06] p-5"><span className="mb-8 block text-4xl font-black text-cyan-200">0{index + 1}</span><h3 className="font-black text-white">{step}</h3></div>)}</div></div></section>;
}

export function PortfolioSection() {
  return <section id="work" className="section-padding bg-white/[.03]"><div className="container-shell"><SectionTitle eyebrow="أعمال سابقة" title="مساحة جاهزة لإضافة المشاريع الحقيقية لاحقًا" description="بطاقات عرض احترافية منظمة حسب نوع الخدمة، ويمكن استبدالها بسهولة بأعمال Nexa Digital الفعلية." /><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{portfolio.map((item) => <article key={item.title} className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[.06]"><div className="h-44 bg-gradient-to-br from-cyan-300/30 via-violet-400/25 to-slate-950 p-5"><span className="rounded-full bg-slate-950/55 px-3 py-1 text-xs font-black text-cyan-100">{item.category}</span></div><div className="p-6"><h3 className="text-xl font-black text-white">{item.title}</h3><p className="mt-3 leading-7 text-slate-300">{item.description}</p></div></article>)}</div></div></section>;
}

export function PackagesSection() {
  return <section id="packages" className="section-padding"><div className="container-shell"><SectionTitle eyebrow="الباقات" title="باقات مرنة قابلة للتعديل حسب حجم الخدمة" description="اختر اتجاه الخدمة، ثم نحدد المتطلبات والنطاق والتكلفة بعد فهم الهدف بدقة." /><div className="grid gap-5 lg:grid-cols-5">{packages.map((pkg) => <article key={pkg.name} className="rounded-3xl border border-white/10 bg-white/[.06] p-6 transition hover:-translate-y-2 hover:border-violet-300/35"><h3 className="text-xl font-black text-white">{pkg.name}</h3><p className="mt-2 text-sm font-bold text-cyan-200">{pkg.tagline}</p><ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">{pkg.features.map((feature) => <li key={feature} className="flex gap-2"><span className="text-emerald-300">✓</span>{feature}</li>)}</ul><a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-6 inline-block rounded-full border border-white/15 px-5 py-3 text-sm font-black text-white transition hover:bg-white/10">اطلب عرض سعر</a></article>)}</div><p className="mt-8 rounded-2xl border border-amber-300/20 bg-amber-300/10 p-4 text-center font-bold text-amber-100">الأسعار تختلف حسب حجم الخدمة ومتطلبات المشروع.</p></div></section>;
}

export function TestimonialsSection() {
  return <section className="section-padding bg-white/[.03]"><div className="container-shell"><SectionTitle eyebrow="آراء العملاء" title="نماذج شهادات قابلة للتحديث" description="Placeholders واقعية يمكن استبدالها بتقييمات العملاء الفعلية بعد الإطلاق." /><div className="grid gap-5 md:grid-cols-3">{testimonials.map((item) => <figure key={item.name} className="rounded-3xl border border-white/10 bg-white/[.06] p-6"><blockquote className="leading-8 text-slate-200">“{item.quote}”</blockquote><figcaption className="mt-6"><b className="text-white">{item.name}</b><span className="block text-sm text-cyan-200">{item.role}</span></figcaption></figure>)}</div></div></section>;
}

export function FAQSection() {
  return <section id="faq" className="section-padding"><div className="container-shell"><SectionTitle eyebrow="الأسئلة الشائعة" title="إجابات واضحة قبل بدء التعاون" description="إذا كان لديك سؤال محدد عن خدمة أو سيستم، تواصل معنا عبر واتساب وسنوضح الخطوات." /><div className="mx-auto max-w-4xl space-y-4">{faqs.map((faq) => <details key={faq.q} className="group rounded-3xl border border-white/10 bg-white/[.06] p-5"><summary className="cursor-pointer list-none font-black text-white marker:hidden">{faq.q}<span className="float-left text-cyan-200 transition group-open:rotate-45">＋</span></summary><p className="mt-4 leading-8 text-slate-300">{faq.a}</p></details>)}</div></div></section>;
}

export function ContactSection() {
  return <section id="contact" className="section-padding"><div className="container-shell"><div className="relative overflow-hidden rounded-[2.2rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-300/15 via-violet-400/15 to-white/[.06] p-8 text-center md:p-12"><h2 className="text-3xl font-black md:text-5xl">جاهز تبدأ حضورك الرقمي أو سيستم مشروعك؟</h2><p className="mx-auto mt-4 max-w-2xl text-lg leading-9 text-slate-300">أرسل لنا نوع الخدمة التي تحتاجها، وسنساعدك بخطوة واضحة تناسب هدفك وميزانيتك ومتطلباتك.</p><div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row"><a href={whatsappUrl} target="_blank" rel="noreferrer" className="rounded-full bg-emerald-400 px-8 py-4 font-black text-slate-950 shadow-2xl shadow-emerald-500/20 transition hover:-translate-y-1">تواصل عبر واتساب: 01068221068</a><a href="#services" className="rounded-full border border-white/15 px-8 py-4 font-black text-white transition hover:bg-white/10">راجع الخدمات</a></div></div></div></section>;
}

export function WhatsAppButton() {
  return <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="تواصل مع Nexa Digital عبر واتساب" className="fixed bottom-5 left-5 z-50 grid size-16 place-items-center rounded-full bg-emerald-400 text-3xl shadow-2xl shadow-emerald-500/30 transition hover:scale-110 pulse-glow">☏</a>;
}

export function Footer() {
  return <footer className="border-t border-white/10 py-10"><div className="container-shell grid gap-8 md:grid-cols-[1.3fr_1fr_1fr]"><div><h2 className="text-2xl font-black text-white">Nexa Digital</h2><p className="mt-3 max-w-md leading-8 text-slate-300">علامة خدمات رقمية تساعد الأفراد والشركات على بناء حضور احترافي، مواقع حديثة، أنظمة مخصصة، أتمتة، وحلول تحول رقمي قابلة للنمو.</p></div><div><h3 className="font-black text-white">روابط الخدمات</h3><div className="mt-4 grid gap-2 text-slate-300">{navLinks.slice(0, 5).map((link) => <a key={link.href} href={link.href} className="hover:text-cyan-200">{link.label}</a>)}</div></div><div><h3 className="font-black text-white">التواصل</h3><a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-4 inline-block text-cyan-200">WhatsApp: 01068221068</a><p className="mt-6 text-sm text-slate-400">© {new Date().getFullYear()} Nexa Digital. جميع الحقوق محفوظة.</p></div></div></footer>;
}
