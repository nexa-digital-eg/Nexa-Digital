import { Cairo, Orbitron } from "next/font/google";
import "./globals.css";

const cairo = Cairo({ subsets: ["arabic", "latin"], variable: "--font-cairo", display: "swap" });
const orbitron = Orbitron({ subsets: ["latin"], weight: ["500", "600", "700", "800"], variable: "--font-display", display: "swap" });

export const metadata = {
  metadataBase: new URL("https://nexa-digital.vercel.app"),
  title: {
    default: "Nexa Digital | حلول ذكية ومستقبل رقمي",
    template: "%s | Nexa Digital",
  },
  description:
    "Nexa Digital — Smart Solutions. Digital Future. مواقع إلكترونية حديثة، أنظمة مخصصة، أتمتة أعمال، حلول ذكاء اصطناعي، وتصميم سيرة ذاتية ولينكدإن احترافي للأفراد والشركات.",
  keywords: [
    "Nexa Digital", "حلول رقمية", "تصميم مواقع إلكترونية", "إنشاء سيستم مخصص", "أتمتة الأعمال",
    "حلول ذكاء اصطناعي للأعمال", "كتابة سيرة ذاتية ATS", "تحسين لينكدإن", "التحول الرقمي",
    "تصميم بروفايل شركة", "Portfolio احترافي", "Smart Solutions Digital Future",
  ],
  icons: { icon: "/logo.svg", shortcut: "/logo.svg", apple: "/logo.svg" },
  openGraph: {
    title: "Nexa Digital | Smart Solutions. Digital Future.",
    description: "مواقع، أنظمة مخصصة، أتمتة، ذكاء اصطناعي، وسيرة ذاتية ولينكدإن — حضور رقمي احترافي للأفراد والشركات.",
    url: "https://nexa-digital.vercel.app",
    siteName: "Nexa Digital",
    locale: "ar_EG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexa Digital | Smart Solutions. Digital Future.",
    description: "حلول رقمية متكاملة: مواقع، أنظمة، أتمتة، AI، وCV / LinkedIn.",
  },
  robots: { index: true, follow: true },
};

export const viewport = { themeColor: "#050a17", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${orbitron.variable}`}>
      <body>
        <div className="bg-stage" aria-hidden="true" />
        <div className="bg-grid" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
