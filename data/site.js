export const whatsappNumber = "201068221068";
export const whatsappMessage = "مرحبًا Nexa Digital، أريد الاستفسار عن خدماتكم الرقمية.";
export const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

export const brand = {
  name: "Nexa Digital",
  nameEn: "NEXA DIGITAL",
  tagline: "Smart Solutions. Digital Future.",
  taglineAr: "حلول ذكية. مستقبل رقمي.",
  phoneDisplay: "01068221068",
};

// The five core pillars from the brand identity — English taglines mirror the logo.
export const pillars = [
  { key: "websites", labelEn: "Websites", labelAr: "مواقع إلكترونية", subEn: "Modern. Fast. Responsive.", subAr: "حديثة • سريعة • متجاوبة" },
  { key: "systems", labelEn: "Systems", labelAr: "أنظمة مخصصة", subEn: "Powerful. Scalable. Secure.", subAr: "قوية • قابلة للتوسع • آمنة" },
  { key: "automation", labelEn: "Automation", labelAr: "أتمتة الأعمال", subEn: "Streamline. Optimize. Grow.", subAr: "بسّط • حسّن • انمُ" },
  { key: "ai", labelEn: "AI Solutions", labelAr: "حلول ذكاء اصطناعي", subEn: "Intelligent. Innovative. Impactful.", subAr: "ذكية • مبتكرة • مؤثرة" },
  { key: "cv", labelEn: "CV & LinkedIn", labelAr: "السيرة و LinkedIn", subEn: "Professional. Optimized. Stand Out.", subAr: "احترافية • محسّنة • مميّزة" },
];

export const navLinks = [
  { href: "#services", label: "الخدمات" },
  { href: "#systems", label: "السيستم المخصص" },
  { href: "#work", label: "أعمالنا" },
  { href: "#packages", label: "الباقات" },
  { href: "#faq", label: "الأسئلة" },
  { href: "#contact", label: "تواصل" },
];

export const services = [
  { icon: "ATS", title: "كتابة سيرة ذاتية ATS احترافية", description: "صياغة CV ذكي بالكلمات المفتاحية المناسبة، متوافق مع أنظمة الفرز ATS ومعايير التوظيف الحديثة." },
  { icon: "CV", title: "تصميم CV احترافي Word و PDF", description: "تنسيق واضح ومظهر حديث قابل للتعديل مع تسليم Word وPDF جاهز للتقديم بثقة." },
  { icon: "in", title: "تحسين حساب LinkedIn", description: "Headline وAbout وخبرات ومهارات وكلمات SEO تعزز ظهورك وتضعك كمحترف أمام مسؤولي التوظيف والعملاء." },
  { icon: "PF", title: "تصميم Portfolio احترافي", description: "بورتفوليو منظم للأفراد والمهندسين والمستقلين والمصممين والاستشاريين يعرض خبراتك بصورة مؤثرة." },
  { icon: "BP", title: "تصميم بروفايل شركة / Business Profile", description: "ملف تعريفي للشركات والمقاولين ومقدمي الخدمات يعرض القيمة، الأعمال، والقدرات بشكل يقنع العملاء." },
  { icon: "WEB", title: "تصميم مواقع إلكترونية", description: "مواقع حديثة وسريعة للشركات والخدمات والبراندات الشخصية والصفحات التعريفية مع تجربة مستخدم ممتازة." },
  { icon: "SYS", title: "إنشاء سيستم مخصص حسب مشروعك", description: "نحلل سير عملك ونبني نظامًا مناسبًا له: CRM، مبيعات، حجز، عيادات، مخزون، موافقات، تقارير ولوحات تحكم." },
  { icon: "AUTO", title: "أتمتة الأعمال", description: "تقليل العمل اليدوي عبر إشعارات تلقائية، تقارير، ربط أدوات، وتنظيم العمليات اليومية لرفع الإنتاجية." },
  { icon: "AI", title: "أدوات ذكاء اصطناعي للأعمال", description: "مساعدات ذكية، توليد محتوى، متابعة عملاء، تحليل تقارير، ودعم لسير العمل حسب احتياج فريقك." },
  { icon: "DX", title: "حلول التحول الرقمي للمشروعات الصغيرة", description: "نقل مشروعك من العمل اليدوي إلى حضور رقمي منظم يشمل موقعًا، سيستم، أتمتة، وأدوات قابلة للتطوير." },
];

export const systemUseCases = ["CRM وإدارة العملاء", "سيستم مبيعات ومتابعة", "حجز مواعيد وعيادات", "إدارة مخزون", "تحصيل وموافقات", "Dashboards وتقارير", "Admin Panels", "Automation Workflows"];

export const portfolio = [
  { category: "CV & LinkedIn", title: "هوية مهنية متوافقة مع ATS", description: "نماذج قابلة للتخصيص لعرض نتائج خدمات السيرة الذاتية ولينكدإن." },
  { category: "Portfolio", title: "بورتفوليو شخصي فاخر", description: "مساحة مستقبلية لعرض بورتفوليو مهني لمستشار أو مهندس أو مستقل." },
  { category: "Company Profile", title: "بروفايل شركة خدمات", description: "Placeholder قابل للتبديل بملف شركة حقيقي بعد إضافة الأعمال السابقة." },
  { category: "Websites", title: "موقع خدمات للشركات", description: "تصميم Landing Page سريع ومهيأ للتحويل وطلب الخدمة." },
  { category: "Business Systems", title: "لوحة تحكم تشغيلية", description: "تصور لنظام مخصص يتضمن بيانات، صلاحيات، تقارير، وحالات متابعة." },
  { category: "Automation", title: "تدفق أتمتة للإشعارات", description: "مثال قابل للتحديث لربط النماذج والتنبيهات والتقارير الدورية." },
];

export const packages = [
  { name: "خدمات الأفراد", tagline: "CV، LinkedIn، Portfolio", features: ["استشارة قبل التنفيذ", "محتوى عربي احترافي", "تصميم قابل للتعديل", "تسليم Word / PDF عند الحاجة"] },
  { name: "خدمات الشركات", tagline: "Business Profile وحضور رقمي", features: ["بروفايل شركة احترافي", "صياغة قيمة وخدمات", "تصميم مناسب للعرض", "قابل للتحديث لاحقًا"] },
  { name: "تصميم المواقع", tagline: "مواقع حديثة قابلة للتوسع", features: ["تصميم responsive", "SEO أساسي", "ربط واتساب وCTA", "جاهزية للنشر على Vercel"] },
  { name: "إنشاء سيستم مخصص", tagline: "حل مبني على سير عملك", features: ["تحليل العمليات", "قاعدة بيانات ولوحة إدارة", "صلاحيات وتقارير", "قابلية للتطوير"] },
  { name: "الأتمتة والتحول الرقمي", tagline: "تشغيل أذكى بجهد أقل", features: ["ربط أدوات", "إشعارات وتقارير", "AI للأعمال", "تطوير تدريجي حسب الأولوية"] },
];

export const testimonials = [
  { name: "عميل أفراد", role: "باحث عن فرصة عمل", quote: "النتيجة كانت منظمة واحترافية، وفهموا المطلوب من السيرة الذاتية وLinkedIn بدون تعقيد." },
  { name: "شركة خدمات", role: "إدارة تشغيل", quote: "Nexa Digital رتبت لنا فكرة النظام بشكل واضح وحولت سير العمل إلى تصور قابل للتنفيذ." },
  { name: "صاحب مشروع صغير", role: "تجارة وخدمات", quote: "الموقع والرسائل التسويقية ساعدونا نظهر بصورة أكثر ثقة أمام العملاء." },
];

export const faqs = [
  { q: "هل يتم تصميم CV متوافق مع ATS؟", a: "نعم، نكتب وننظم السيرة الذاتية بما يناسب أنظمة ATS من حيث الكلمات المفتاحية، وضوح الأقسام، وتوافق المحتوى مع الوصف الوظيفي." },
  { q: "هل يمكن إنشاء سيستم حسب طبيعة مشروعي؟", a: "نعم، نبدأ بفهم سير العمل الحقيقي ثم نصمم نظامًا مناسبًا مثل CRM، حجز، عيادات، مخزون، مبيعات، موافقات، تقارير أو لوحة إدارة." },
  { q: "هل الموقع مناسب للموبايل؟", a: "نعم، يتم بناء التصميم Mobile-first ليعمل بكفاءة على الموبايل والتابلت والديسكتوب." },
  { q: "هل يمكن ربط السيستم بقاعدة بيانات؟", a: "نعم، يمكن بناء حلول مرتبطة بقاعدة بيانات مع صلاحيات، لوحات تحكم، تقارير، ونماذج إدخال حسب متطلبات المشروع." },
  { q: "هل تقدمون خدمات LinkedIn؟", a: "نعم، تشمل الخدمة تحسين العنوان المهني، About، الخبرات، المهارات، الكلمات المفتاحية، والتموضع المهني." },
  { q: "هل يمكن تطوير الخدمة لاحقًا؟", a: "نعم، ننفذ العمل بطريقة قابلة للتوسع بحيث يمكن إضافة صفحات، نماذج، أنظمة، أتمتة أو تكاملات مستقبلًا." },
  { q: "كيف أبدأ الطلب؟", a: "اضغط على زر واتساب وأرسل لنا نوع الخدمة المطلوبة، وسنبدأ باستشارة سريعة لفهم هدفك ومتطلباتك." },
];
