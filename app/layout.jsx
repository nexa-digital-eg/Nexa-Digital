import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({ subsets: ["arabic", "latin"], variable: "--font-cairo", display: "swap" });

export const metadata = {
  metadataBase: new URL("https://nexa-digital.vercel.app"),
  title: {
    default: "Nexa Digital | خدمات رقمية احترافية للأفراد والشركات",
    template: "%s | Nexa Digital",
  },
  description: "Nexa Digital تقدم كتابة سيرة ذاتية ATS، تصميم CV احترافي، تحسين لينكدإن، تصميم مواقع إلكترونية، إنشاء سيستم مخصص، أتمتة الأعمال، وأدوات ذكاء اصطناعي للأعمال.",
  keywords: [
    "كتابة سيرة ذاتية ATS", "تصميم CV احترافي", "تحسين لينكدإن", "تصميم بورتفوليو احترافي", "تصميم بروفايل شركة", "تصميم مواقع إلكترونية", "إنشاء سيستم مخصص", "سيستم حسب مشروعك", "أتمتة الأعمال", "حلول رقمية", "التحول الرقمي للمشروعات الصغيرة", "خدمات رقمية احترافية", "تصميم مواقع للشركات", "تطوير أنظمة أعمال", "أدوات ذكاء اصطناعي للأعمال"
  ],
  openGraph: {
    title: "Nexa Digital | حضور رقمي احترافي وسيستم مخصص وأتمتة أعمال",
    description: "من السيرة الذاتية وLinkedIn إلى المواقع والسيستم والأتمتة — Nexa Digital تساعدك تظهر باحتراف وتشتغل بذكاء.",
    url: "https://nexa-digital.vercel.app",
    siteName: "Nexa Digital",
    locale: "ar_EG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexa Digital | خدمات رقمية احترافية",
    description: "حلول رقمية للأفراد والشركات: CV، LinkedIn، مواقع، أنظمة مخصصة، أتمتة وAI.",
  },
  robots: { index: true, follow: true },
};

export const viewport = { themeColor: "#070b18", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body>{children}</body>
    </html>
  );
}
