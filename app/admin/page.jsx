import { redirect } from "next/navigation";
import { isAuthenticated } from "@/lib/auth";
import { getSql } from "@/lib/db";
import AdminDashboard from "./AdminDashboard";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "لوحة الإدارة",
  robots: { index: false, follow: false },
};

export default async function AdminPage() {
  if (!(await isAuthenticated())) redirect("/admin/login");

  const sql = getSql();
  let services = [];
  let packages = [];
  let dbError = null;

  if (!sql) {
    dbError = "متغير DATABASE_URL غير مضبوط. أضِفه ثم شغّل `npm run db:init`.";
  } else {
    try {
      services = await sql`SELECT id, icon, title, description, sort_order FROM services ORDER BY sort_order ASC, id ASC`;
      packages = await sql`SELECT id, name, tagline, features, sort_order FROM packages ORDER BY sort_order ASC, id ASC`;
    } catch (error) {
      dbError = `تعذّر قراءة الجداول: ${error.message}. شغّل \`npm run db:init\` لإنشائها.`;
    }
  }

  return <AdminDashboard initialServices={services} initialPackages={packages} dbError={dbError} />;
}
