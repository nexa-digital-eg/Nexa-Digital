"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.error || "تعذّر تسجيل الدخول.");
        return;
      }
      router.replace("/admin");
      router.refresh();
    } catch {
      setError("حدث خطأ في الاتصال.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="grid min-h-screen place-items-center px-5 py-16">
      <form onSubmit={handleSubmit} className="glass-card w-full max-w-md rounded-3xl p-8">
        <h1 className="text-2xl font-black text-white">لوحة إدارة Nexa Digital</h1>
        <p className="mt-2 text-sm leading-7 text-slate-300">أدخل كلمة المرور للوصول إلى إدارة الخدمات والباقات.</p>
        <label className="mt-6 block text-sm font-bold text-slate-200">كلمة المرور</label>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          autoFocus
          className="mt-2 w-full rounded-2xl border border-white/15 bg-white/[.06] px-4 py-3 text-white outline-none focus:border-cyan-300/50"
          placeholder="••••••••"
        />
        {error ? <p className="mt-4 rounded-xl border border-rose-400/30 bg-rose-400/10 px-4 py-3 text-sm font-bold text-rose-200">{error}</p> : null}
        <button
          type="submit"
          disabled={loading}
          className="mt-6 w-full rounded-full bg-gradient-to-l from-cyan-300 to-violet-400 px-6 py-3 font-black text-slate-950 transition hover:-translate-y-0.5 disabled:opacity-60"
        >
          {loading ? "جارٍ الدخول..." : "تسجيل الدخول"}
        </button>
        <a href="/" className="mt-5 block text-center text-sm font-bold text-cyan-200 hover:text-white">→ العودة إلى الموقع</a>
      </form>
    </main>
  );
}
