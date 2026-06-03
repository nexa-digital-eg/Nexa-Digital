import {
  brand,
  faqs,
  navLinks,
  packages as defaultPackages,
  pillars,
  portfolio,
  services as defaultServices,
  systemUseCases,
  testimonials,
  whatsappUrl,
} from "@/data/site";

/* ------------------------------------------------------------------ */
/*  Brand mark + small icon set                                        */
/* ------------------------------------------------------------------ */

function BrandMark({ uid = "m", className = "h-10 w-10" }) {
  return (
    <svg viewBox="0 0 120 124" className={className} fill="none" role="img" aria-label="Nexa Digital">
      <defs>
        <linearGradient id={`${uid}-blue`} x1="20" y1="30" x2="80" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7CC6FF" />
          <stop offset="0.55" stopColor="#2E9BFF" />
          <stop offset="1" stopColor="#1567D6" />
        </linearGradient>
        <linearGradient id={`${uid}-silver`} x1="64" y1="30" x2="112" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F4F8FF" />
          <stop offset="0.5" stopColor="#C6D1E2" />
          <stop offset="1" stopColor="#8B97AA" />
        </linearGradient>
      </defs>
      <path
        fill={`url(#${uid}-silver)`}
        fillRule="evenodd"
        d="M64 34 H88 C104 34 112 48 112 66 C112 84 104 98 88 98 H64 Z M78 49 H86 C95 49 99 56 99 66 C99 76 95 83 86 83 H78 Z"
      />
      <rect x="30" y="34" width="14" height="64" rx="1.5" fill={`url(#${uid}-blue)`} />
      <polygon points="30,34 44,34 78,98 64,98" fill={`url(#${uid}-blue)`} />
      <g fill={`url(#${uid}-blue)`}>
        <rect x="20" y="29" width="9" height="9" rx="1.6" />
        <rect x="9" y="21" width="7" height="7" rx="1.5" opacity="0.78" />
        <rect x="28" y="15" width="6" height="6" rx="1.4" opacity="0.6" />
        <rect x="4" y="33" width="5" height="5" rx="1.3" opacity="0.42" />
      </g>
    </svg>
  );
}

function Wordmark({ className = "" }) {
  return (
    <span className={`display font-extrabold tracking-[0.14em] ${className}`}>
      <span className="text-gradient">NEXA</span>{" "}
      <span className="text-metal">DIGITAL</span>
    </span>
  );
}

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const pillarIcons = {
  websites: (
    <svg {...iconProps} className="h-7 w-7">
      <rect x="2.5" y="4" width="19" height="13" rx="2" />
      <path d="M8 21h8M12 17v4M2.5 8.5h19" />
    </svg>
  ),
  systems: (
    <svg {...iconProps} className="h-7 w-7">
      <path d="M9 8l-4 4 4 4M15 8l4 4-4 4" />
    </svg>
  ),
  automation: (
    <svg {...iconProps} className="h-7 w-7">
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 3v2.2M12 18.8V21M3 12h2.2M18.8 12H21M5.6 5.6l1.6 1.6M16.8 16.8l1.6 1.6M18.4 5.6l-1.6 1.6M7.2 16.8l-1.6 1.6" />
    </svg>
  ),
  ai: (
    <svg {...iconProps} className="h-7 w-7">
      <rect x="6.5" y="6.5" width="11" height="11" rx="2.4" />
      <rect x="10" y="10" width="4" height="4" rx="1" />
      <path d="M9.5 3v2.2M14.5 3v2.2M9.5 18.8V21M14.5 18.8V21M3 9.5h2.2M3 14.5h2.2M18.8 9.5H21M18.8 14.5H21" />
    </svg>
  ),
  cv: (
    <svg {...iconProps} className="h-7 w-7">
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5" />
      <circle cx="12" cy="12.5" r="1.9" />
      <path d="M8.8 18c0-1.8 1.4-3 3.2-3s3.2 1.2 3.2 3" />
    </svg>
  ),
};

function ArrowIcon({ className = "h-4 w-4" }) {
  return (
    <svg {...iconProps} className={`transition-transform group-hover:-translate-x-1 ${className}`}>
      <path d="M19 12H5M11 6l-6 6 6 6" />
    </svg>
  );
}

function WhatsAppIcon({ className = "h-6 w-6" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Shared section heading                                             */
/* ------------------------------------------------------------------ */

function SectionHeading({ eyebrow, title, description, center = true }) {
  return (
    <div className={`reveal ${center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-4 text-3xl font-black leading-tight md:text-[2.7rem]">{title}</h2>
      {description ? <p className="mt-4 text-base leading-8 text-slate-300/90 md:text-lg">{description}</p> : null}
      {center ? <div className="divider-x mx-auto mt-6" /> : <div className="divider-x mt-6" />}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Header                                                             */
/* ------------------------------------------------------------------ */

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-[#050a17]/80 backdrop-blur-xl">
      <nav className="shell flex h-[4.6rem] items-center justify-between" aria-label="التنقل الرئيسي">
        <a href="#top" className="flex items-center gap-3" aria-label="Nexa Digital الرئيسية">
          <BrandMark uid="hd" className="h-9 w-9" />
          <Wordmark className="text-lg" />
        </a>
        <div className="hidden items-center gap-8 text-sm font-bold text-slate-300 lg:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-white">{link.label}</a>
          ))}
        </div>
        <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-primary text-sm">
          <WhatsAppIcon className="h-4 w-4" /> تواصل معنا
        </a>
      </nav>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero                                                               */
/* ------------------------------------------------------------------ */

export function HeroSection() {
  return (
    <section id="top" className="relative isolate overflow-hidden pb-20 pt-32 md:pb-28 md:pt-40">
      <div className="shell">
        <div className="reveal mx-auto max-w-4xl text-center">
          <div className="mb-8 flex justify-center">
            <BrandMark uid="hero" className="float h-24 w-24 drop-shadow-[0_18px_40px_rgba(46,155,255,0.4)] md:h-28 md:w-28" />
          </div>
          <Wordmark className="text-3xl md:text-5xl" />
          <p className="display mt-4 text-sm tracking-[0.32em] text-slate-400 md:text-base">SMART SOLUTIONS · DIGITAL FUTURE</p>

          <h1 className="mt-9 text-balance text-4xl font-black leading-[1.15] md:text-6xl">
            <span className="text-gradient">حوّل فكرتك إلى</span>{" "}
            <span className="text-metal">حضور رقمي يصنع الفرق</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-9 text-slate-300/90 md:text-xl">
            من الموقع والنظام المخصص إلى الأتمتة والذكاء الاصطناعي والسيرة الذاتية — نبني لك منظومة رقمية متكاملة تظهر باحتراف وتشتغل بذكاء.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-primary w-full sm:w-auto">
              <WhatsAppIcon className="h-5 w-5" /> ابدأ مشروعك الآن
            </a>
            <a href="#services" className="btn-ghost w-full sm:w-auto">
              استكشف الخدمات <ArrowIcon />
            </a>
          </div>
        </div>

        {/* Pillar strip — mirrors the brand identity */}
        <div className="reveal mt-16 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {pillars.map((pillar) => (
            <div key={pillar.key} className="card card-hover flex flex-col items-center gap-3 px-4 py-6 text-center">
              <span className="ico-chip h-12 w-12">{pillarIcons[pillar.key]}</span>
              <div>
                <p className="display text-xs font-bold tracking-[0.15em] text-white">{pillar.labelEn}</p>
                <p className="mt-1 text-[0.78rem] text-slate-400">{pillar.labelAr}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Pillars (detailed)                                                 */
/* ------------------------------------------------------------------ */

export function PillarsSection() {
  return (
    <section className="section">
      <div className="shell">
        <SectionHeading
          eyebrow="Core Capabilities"
          title="خمسة محاور تبني عليها علامتك الرقمية"
          description="كل محور مصمّم ليعمل بمفرده أو ضمن منظومة متكاملة تنمو مع مشروعك."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, index) => (
            <article
              key={pillar.key}
              className="card card-hover reveal p-7"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <span className="ico-chip">{pillarIcons[pillar.key]}</span>
              <h3 className="mt-5 text-xl font-black text-white">{pillar.labelAr}</h3>
              <p className="display mt-1 text-xs font-semibold tracking-[0.18em] text-cyan-200/80">{pillar.labelEn}</p>
              <div className="hairline my-5" />
              <p className="text-sm leading-7 text-slate-300/90">{pillar.subAr}</p>
              <p className="display mt-2 text-xs tracking-wide text-slate-500">{pillar.subEn}</p>
            </article>
          ))}
          <article className="card card-hover reveal flex flex-col justify-between p-7" style={{ animationDelay: "300ms" }}>
            <div>
              <h3 className="text-xl font-black text-white">مش لاقي اللي بتدور عليه؟</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300/90">نصمّم حلولًا رقمية مخصصة بالكامل حسب طبيعة مشروعك وأهدافك.</p>
            </div>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="group mt-6 inline-flex items-center gap-2 font-black text-cyan-200">
              اطلب استشارة مجانية <ArrowIcon />
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Services (DB-backed)                                               */
/* ------------------------------------------------------------------ */

export function ServicesSection({ services = defaultServices }) {
  return (
    <section id="services" className="section">
      <div className="shell">
        <SectionHeading
          eyebrow="Our Services"
          title="كل ما تحتاجه لحضور رقمي قوي وتشغيل أذكى"
          description="خدمات مترابطة تبدأ من الهوية المهنية للأفراد وتصل إلى مواقع الشركات والأنظمة المخصصة والأتمتة وأدوات الذكاء الاصطناعي."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.id ?? service.title}
              className="card card-hover reveal group flex flex-col p-6"
              style={{ animationDelay: `${index * 45}ms` }}
            >
              <div className="display grid size-12 place-items-center rounded-xl bg-gradient-to-br from-cyan-300/90 to-blue-500/90 text-sm font-extrabold text-slate-950 shadow-lg shadow-cyan-500/25">
                {service.icon}
              </div>
              <h3 className="mt-5 text-lg font-black text-white">{service.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-slate-300/90">{service.description}</p>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="group mt-5 inline-flex items-center gap-2 text-sm font-black text-cyan-200">
                استفسر عن الخدمة <ArrowIcon />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Why us                                                             */
/* ------------------------------------------------------------------ */

export function WhyChooseUsSection() {
  const reasons = [
    { t: "تصميم يعكس ثقة العلامة", d: "هوية بصرية راقية تترك انطباعًا احترافيًا من أول نظرة." },
    { t: "حلول مخصصة لكل عميل", d: "نبني حسب احتياجك الحقيقي، لا قوالب جاهزة." },
    { t: "محتوى عربي مقنع", d: "صياغة تسويقية تتكلم بلغة عميلك وتدفعه للتواصل." },
    { t: "أداء وSEO وتجربة مستخدم", d: "سرعة، ظهور في البحث، وتجربة سلسة على كل الأجهزة." },
    { t: "تسليم منظم وقابل للتعديل", d: "خطوات واضحة وملفات جاهزة قابلة للتحديث لاحقًا." },
    { t: "قابلية للتطوير والنمو", d: "أساس تقني يكبر مع مشروعك بدون إعادة بناء." },
  ];
  return (
    <section className="section">
      <div className="shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading
          eyebrow="Why Nexa"
          center={false}
          title="خبرة تجمع التصميم والمحتوى والتشغيل الرقمي"
          description="نركّز على النتيجة التجارية: ثقة أعلى، عرض أوضح، طلبات أكثر، ونظام عمل قابل للنمو."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {reasons.map((reason, index) => (
            <div key={reason.t} className="card card-hover reveal p-5" style={{ animationDelay: `${index * 50}ms` }}>
              <span className="grid size-9 place-items-center rounded-full bg-emerald-400/15 text-emerald-200">
                <svg {...iconProps} className="h-4 w-4"><path d="M20 6 9 17l-5-5" /></svg>
              </span>
              <h3 className="mt-4 font-black text-white">{reason.t}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-400">{reason.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Custom systems focus                                               */
/* ------------------------------------------------------------------ */

export function CustomSystemsSection() {
  return (
    <section id="systems" className="section">
      <div className="shell">
        <div className="card reveal grid gap-10 overflow-hidden p-8 md:p-12 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <span className="eyebrow">For Businesses</span>
            <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
              <span className="text-metal">سيستم مخصص</span> مبني على طريقة عملك — لا قالب جاهز
            </h2>
            <p className="mt-5 text-lg leading-9 text-slate-300/90">
              نبدأ من سير عملك الحقيقي: كيف يدخل العميل؟ من يوافق؟ أين تتوقف العملية؟ ما التقارير المطلوبة؟ ثم نصمم نظامًا يساعد فريقك على البيع والمتابعة والتحصيل والحجز وإدارة المخزون وإصدار التقارير من لوحة واحدة.
            </p>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-primary mt-8">
              ناقش فكرة السيستم <ArrowIcon />
            </a>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {systemUseCases.map((item) => (
              <div key={item} className="rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.07] p-4 text-sm font-bold text-cyan-50">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  How it works                                                       */
/* ------------------------------------------------------------------ */

export function HowItWorksSection() {
  const steps = [
    { t: "استشارة وفهم الاحتياج", d: "نسمع هدفك ونحدد النطاق المناسب." },
    { t: "جمع البيانات والمحتوى", d: "نجهّز كل ما يلزم للتنفيذ." },
    { t: "التصميم أو التطوير", d: "ننفّذ بجودة عالية وتفاصيل دقيقة." },
    { t: "المراجعة والتحسين", d: "نضبط التفاصيل حتى الرضا التام." },
    { t: "التسليم والدعم", d: "نسلّم منظّمًا وندعمك بعد الإطلاق." },
  ];
  return (
    <section className="section">
      <div className="shell">
        <SectionHeading eyebrow="Process" title="عملية واضحة من أول رسالة حتى التسليم" description="تواصل منظّم يجعلك تعرف ما الذي سيُنفّذ، ولماذا، ومتى." />
        <div className="mt-12 grid gap-5 md:grid-cols-5">
          {steps.map((step, index) => (
            <div key={step.t} className="card card-hover reveal p-5" style={{ animationDelay: `${index * 60}ms` }}>
              <span className="display block text-3xl font-black text-cyan-200/90">0{index + 1}</span>
              <h3 className="mt-4 font-black text-white">{step.t}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">{step.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Portfolio                                                          */
/* ------------------------------------------------------------------ */

export function PortfolioSection() {
  return (
    <section id="work" className="section">
      <div className="shell">
        <SectionHeading eyebrow="Selected Work" title="مساحة جاهزة لعرض أعمالنا الحقيقية" description="بطاقات منظّمة حسب نوع الخدمة، قابلة للاستبدال بأعمال Nexa Digital الفعلية." />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {portfolio.map((item, index) => (
            <article key={item.title} className="card card-hover reveal overflow-hidden" style={{ animationDelay: `${index * 50}ms` }}>
              <div className="relative h-44 bg-gradient-to-br from-cyan-400/25 via-blue-500/20 to-slate-950 p-5">
                <span className="display rounded-full bg-slate-950/55 px-3 py-1 text-[0.7rem] font-bold tracking-wide text-cyan-100">{item.category}</span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300/90">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Packages (DB-backed)                                               */
/* ------------------------------------------------------------------ */

export function PackagesSection({ packages = defaultPackages }) {
  return (
    <section id="packages" className="section">
      <div className="shell">
        <SectionHeading eyebrow="Packages" title="باقات مرنة قابلة للتعديل حسب حجم الخدمة" description="اختر اتجاه الخدمة، ثم نحدد المتطلبات والنطاق والتكلفة بعد فهم هدفك بدقة." />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg, index) => (
            <article key={pkg.id ?? pkg.name} className="card card-hover reveal flex flex-col p-6" style={{ animationDelay: `${index * 55}ms` }}>
              <h3 className="text-lg font-black text-white">{pkg.name}</h3>
              <p className="mt-1 text-sm font-bold text-cyan-200">{pkg.tagline}</p>
              <div className="hairline my-5" />
              <ul className="flex-1 space-y-3 text-sm leading-6 text-slate-300/90">
                {(pkg.features ?? []).map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <span className="mt-0.5 text-emerald-300">
                      <svg {...iconProps} className="h-4 w-4"><path d="M20 6 9 17l-5-5" /></svg>
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-ghost mt-6 text-sm">اطلب عرض سعر</a>
            </article>
          ))}
        </div>
        <p className="reveal mt-8 rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.07] px-5 py-4 text-center text-sm font-bold text-cyan-100">
          الأسعار تختلف حسب حجم الخدمة ومتطلبات المشروع — تواصل معنا لعرض سعر دقيق.
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Testimonials                                                       */
/* ------------------------------------------------------------------ */

export function TestimonialsSection() {
  return (
    <section className="section">
      <div className="shell">
        <SectionHeading eyebrow="Testimonials" title="نماذج شهادات قابلة للتحديث" description="آراء واقعية يمكن استبدالها بتقييمات العملاء الفعلية بعد الإطلاق." />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <figure key={item.name} className="card card-hover reveal p-6" style={{ animationDelay: `${index * 60}ms` }}>
              <div className="display text-4xl leading-none text-cyan-300/40">”</div>
              <blockquote className="mt-2 leading-8 text-slate-200">{item.quote}</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="display grid size-10 place-items-center rounded-full bg-gradient-to-br from-cyan-300 to-blue-500 text-sm font-black text-slate-950">
                  {item.name.charAt(0)}
                </span>
                <span>
                  <b className="block text-white">{item.name}</b>
                  <span className="text-sm text-cyan-200">{item.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  FAQ                                                                */
/* ------------------------------------------------------------------ */

export function FAQSection() {
  return (
    <section id="faq" className="section">
      <div className="shell">
        <SectionHeading eyebrow="FAQ" title="إجابات واضحة قبل بدء التعاون" description="لو عندك سؤال محدد عن خدمة أو سيستم، تواصل معنا عبر واتساب." />
        <div className="mx-auto mt-12 max-w-3xl space-y-4">
          {faqs.map((faq, index) => (
            <details key={faq.q} className="card group reveal p-5" style={{ animationDelay: `${index * 40}ms` }}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-black text-white marker:hidden">
                {faq.q}
                <span className="display shrink-0 text-cyan-200 transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 leading-8 text-slate-300/90">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Contact CTA                                                        */
/* ------------------------------------------------------------------ */

export function ContactSection() {
  return (
    <section id="contact" className="section">
      <div className="shell">
        <div className="card reveal relative overflow-hidden p-10 text-center md:p-16">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cyan-400/15 via-blue-500/10 to-transparent" />
          <BrandMark uid="cta" className="mx-auto h-14 w-14" />
          <h2 className="mt-6 text-3xl font-black leading-tight md:text-5xl">
            <span className="text-gradient">جاهز تبدأ</span> <span className="text-metal">حضورك الرقمي؟</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-9 text-slate-300/90">
            أرسل لنا نوع الخدمة التي تحتاجها، وسنساعدك بخطوة واضحة تناسب هدفك وميزانيتك ومتطلباتك.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-primary w-full sm:w-auto">
              <WhatsAppIcon className="h-5 w-5" /> واتساب: {brand.phoneDisplay}
            </a>
            <a href="#services" className="btn-ghost w-full sm:w-auto">راجع الخدمات</a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Footer + floating WhatsApp                                         */
/* ------------------------------------------------------------------ */

export function Footer() {
  return (
    <footer className="border-t border-white/[0.07] py-12">
      <div className="shell grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <BrandMark uid="ft" className="h-9 w-9" />
            <Wordmark className="text-lg" />
          </div>
          <p className="mt-4 max-w-md leading-8 text-slate-400">
            علامة خدمات رقمية تساعد الأفراد والشركات على بناء حضور احترافي: مواقع حديثة، أنظمة مخصصة، أتمتة، وحلول ذكاء اصطناعي قابلة للنمو.
          </p>
        </div>
        <div>
          <h3 className="display text-sm font-bold tracking-wider text-white">روابط</h3>
          <div className="mt-4 grid gap-2.5 text-sm text-slate-400">
            {navLinks.slice(0, 5).map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-cyan-200">{link.label}</a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="display text-sm font-bold tracking-wider text-white">التواصل</h3>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm text-cyan-200 hover:text-white">
            <WhatsAppIcon className="h-4 w-4" /> {brand.phoneDisplay}
          </a>
          <p className="mt-6 text-sm text-slate-500">© {new Date().getFullYear()} Nexa Digital. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}

export function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="تواصل مع Nexa Digital عبر واتساب"
      className="fixed bottom-5 left-5 z-50 grid size-14 place-items-center rounded-full bg-emerald-500 text-white shadow-2xl shadow-emerald-500/30 transition hover:scale-110"
    >
      <span className="absolute inset-0 rounded-full bg-emerald-400/50 pulse" aria-hidden="true" />
      <WhatsAppIcon className="relative h-7 w-7" />
    </a>
  );
}
