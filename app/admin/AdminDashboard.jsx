"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const emptyService = { icon: "", title: "", description: "", sort_order: 0 };
const emptyPackage = { name: "", tagline: "", features: "", sort_order: 0 };

function featuresToText(features) {
  return Array.isArray(features) ? features.join("\n") : "";
}

export default function AdminDashboard({ initialServices, initialPackages, dbError }) {
  const router = useRouter();
  const [services, setServices] = useState(initialServices);
  const [packages, setPackages] = useState(initialPackages);
  const [message, setMessage] = useState("");

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.replace("/admin/login");
    router.refresh();
  }

  function flash(text) {
    setMessage(text);
    window.clearTimeout(flash._t);
    flash._t = window.setTimeout(() => setMessage(""), 2500);
  }

  return (
    <main className="mx-auto max-w-5xl px-5 py-10">
      <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-white">لوحة إدارة المحتوى</h1>
          <p className="mt-1 text-sm text-slate-300">إدارة الخدمات والباقات المعروضة على الموقع.</p>
        </div>
        <div className="flex items-center gap-3">
          <a href="/" target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-4 py-2 text-sm font-bold text-white hover:bg-white/10">عرض الموقع ↗</a>
          <button onClick={logout} className="rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-white hover:bg-white/15">تسجيل الخروج</button>
        </div>
      </header>

      {dbError ? (
        <p className="mb-6 rounded-2xl border border-amber-300/30 bg-amber-300/10 px-5 py-4 font-bold text-amber-100">{dbError}</p>
      ) : null}

      {message ? (
        <p className="mb-6 rounded-2xl border border-emerald-300/30 bg-emerald-300/10 px-5 py-3 font-bold text-emerald-100">{message}</p>
      ) : null}

      <ServicesManager services={services} setServices={setServices} flash={flash} />
      <PackagesManager packages={packages} setPackages={setPackages} flash={flash} />
    </main>
  );
}

function Field({ label, ...props }) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-bold text-slate-300">{label}</span>
      <input {...props} className="w-full rounded-xl border border-white/15 bg-white/[.06] px-3 py-2 text-white outline-none focus:border-cyan-300/50" />
    </label>
  );
}

function ServicesManager({ services, setServices, flash }) {
  const [draft, setDraft] = useState(emptyService);
  const [busy, setBusy] = useState(false);

  async function save(service) {
    setBusy(true);
    try {
      const editing = Boolean(service.id);
      const res = await fetch(editing ? `/api/services/${service.id}` : "/api/services", {
        method: editing ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(service),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) return flash(data.error || "تعذّر الحفظ.");
      if (editing) {
        setServices((rows) => rows.map((row) => (row.id === data.id ? data : row)));
        flash("تم تحديث الخدمة.");
      } else {
        setServices((rows) => [...rows, data]);
        setDraft(emptyService);
        flash("تمت إضافة الخدمة.");
      }
    } finally {
      setBusy(false);
    }
  }

  async function remove(id) {
    if (!window.confirm("حذف هذه الخدمة؟")) return;
    const res = await fetch(`/api/services/${id}`, { method: "DELETE" });
    if (res.ok) {
      setServices((rows) => rows.filter((row) => row.id !== id));
      flash("تم حذف الخدمة.");
    } else {
      flash("تعذّر الحذف.");
    }
  }

  return (
    <section className="mb-12">
      <h2 className="mb-4 text-xl font-black text-cyan-200">الخدمات ({services.length})</h2>
      <div className="space-y-3">
        {services.map((service) => (
          <ServiceRow key={service.id} service={service} onSave={save} onDelete={remove} busy={busy} />
        ))}
      </div>

      <div className="mt-5 glass-card rounded-2xl p-5">
        <h3 className="mb-3 font-black text-white">إضافة خدمة جديدة</h3>
        <div className="grid gap-3 sm:grid-cols-2">
          <Field label="أيقونة (نص قصير)" value={draft.icon} onChange={(e) => setDraft({ ...draft, icon: e.target.value })} />
          <Field label="الترتيب" type="number" value={draft.sort_order} onChange={(e) => setDraft({ ...draft, sort_order: e.target.value })} />
          <div className="sm:col-span-2">
            <Field label="العنوان" value={draft.title} onChange={(e) => setDraft({ ...draft, title: e.target.value })} />
          </div>
          <label className="block sm:col-span-2">
            <span className="mb-1 block text-xs font-bold text-slate-300">الوصف</span>
            <textarea rows={2} value={draft.description} onChange={(e) => setDraft({ ...draft, description: e.target.value })} className="w-full rounded-xl border border-white/15 bg-white/[.06] px-3 py-2 text-white outline-none focus:border-cyan-300/50" />
          </label>
        </div>
        <button onClick={() => save(draft)} disabled={busy} className="mt-4 rounded-full bg-gradient-to-l from-cyan-300 to-violet-400 px-6 py-2.5 font-black text-slate-950 disabled:opacity-60">إضافة</button>
      </div>
    </section>
  );
}

function ServiceRow({ service, onSave, onDelete, busy }) {
  const [edit, setEdit] = useState(service);
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[.05] p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <b className="text-white">{service.title}</b>
          <p className="mt-1 text-sm text-slate-300">{service.description}</p>
        </div>
        <div className="flex shrink-0 gap-2">
          <button onClick={() => setOpen((v) => !v)} className="rounded-full border border-white/15 px-3 py-1.5 text-sm font-bold text-white hover:bg-white/10">{open ? "إغلاق" : "تعديل"}</button>
          <button onClick={() => onDelete(service.id)} className="rounded-full border border-rose-400/30 px-3 py-1.5 text-sm font-bold text-rose-200 hover:bg-rose-400/10">حذف</button>
        </div>
      </div>
      {open ? (
        <div className="mt-4 grid gap-3 border-t border-white/10 pt-4 sm:grid-cols-2">
          <Field label="أيقونة" value={edit.icon ?? ""} onChange={(e) => setEdit({ ...edit, icon: e.target.value })} />
          <Field label="الترتيب" type="number" value={edit.sort_order ?? 0} onChange={(e) => setEdit({ ...edit, sort_order: e.target.value })} />
          <div className="sm:col-span-2">
            <Field label="العنوان" value={edit.title ?? ""} onChange={(e) => setEdit({ ...edit, title: e.target.value })} />
          </div>
          <label className="block sm:col-span-2">
            <span className="mb-1 block text-xs font-bold text-slate-300">الوصف</span>
            <textarea rows={2} value={edit.description ?? ""} onChange={(e) => setEdit({ ...edit, description: e.target.value })} className="w-full rounded-xl border border-white/15 bg-white/[.06] px-3 py-2 text-white outline-none focus:border-cyan-300/50" />
          </label>
          <button onClick={() => onSave(edit)} disabled={busy} className="rounded-full bg-white px-5 py-2 font-black text-slate-950 disabled:opacity-60 sm:col-span-2">حفظ التعديلات</button>
        </div>
      ) : null}
    </div>
  );
}

function PackagesManager({ packages, setPackages, flash }) {
  const [draft, setDraft] = useState(emptyPackage);
  const [busy, setBusy] = useState(false);

  async function save(pkg) {
    setBusy(true);
    try {
      const editing = Boolean(pkg.id);
      const res = await fetch(editing ? `/api/packages/${pkg.id}` : "/api/packages", {
        method: editing ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(pkg),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) return flash(data.error || "تعذّر الحفظ.");
      if (editing) {
        setPackages((rows) => rows.map((row) => (row.id === data.id ? data : row)));
        flash("تم تحديث الباقة.");
      } else {
        setPackages((rows) => [...rows, data]);
        setDraft(emptyPackage);
        flash("تمت إضافة الباقة.");
      }
    } finally {
      setBusy(false);
    }
  }

  async function remove(id) {
    if (!window.confirm("حذف هذه الباقة؟")) return;
    const res = await fetch(`/api/packages/${id}`, { method: "DELETE" });
    if (res.ok) {
      setPackages((rows) => rows.filter((row) => row.id !== id));
      flash("تم حذف الباقة.");
    } else {
      flash("تعذّر الحذف.");
    }
  }

  return (
    <section className="mb-12">
      <h2 className="mb-4 text-xl font-black text-violet-200">الباقات ({packages.length})</h2>
      <div className="space-y-3">
        {packages.map((pkg) => (
          <PackageRow key={pkg.id} pkg={pkg} onSave={save} onDelete={remove} busy={busy} />
        ))}
      </div>

      <div className="mt-5 glass-card rounded-2xl p-5">
        <h3 className="mb-3 font-black text-white">إضافة باقة جديدة</h3>
        <div className="grid gap-3 sm:grid-cols-2">
          <Field label="الاسم" value={draft.name} onChange={(e) => setDraft({ ...draft, name: e.target.value })} />
          <Field label="الترتيب" type="number" value={draft.sort_order} onChange={(e) => setDraft({ ...draft, sort_order: e.target.value })} />
          <div className="sm:col-span-2">
            <Field label="الوصف المختصر (Tagline)" value={draft.tagline} onChange={(e) => setDraft({ ...draft, tagline: e.target.value })} />
          </div>
          <label className="block sm:col-span-2">
            <span className="mb-1 block text-xs font-bold text-slate-300">المميزات (ميزة في كل سطر)</span>
            <textarea rows={4} value={draft.features} onChange={(e) => setDraft({ ...draft, features: e.target.value })} className="w-full rounded-xl border border-white/15 bg-white/[.06] px-3 py-2 text-white outline-none focus:border-cyan-300/50" />
          </label>
        </div>
        <button onClick={() => save(draft)} disabled={busy} className="mt-4 rounded-full bg-gradient-to-l from-cyan-300 to-violet-400 px-6 py-2.5 font-black text-slate-950 disabled:opacity-60">إضافة</button>
      </div>
    </section>
  );
}

function PackageRow({ pkg, onSave, onDelete, busy }) {
  const [edit, setEdit] = useState({ ...pkg, features: featuresToText(pkg.features) });
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[.05] p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <b className="text-white">{pkg.name}</b>
          <p className="mt-1 text-sm text-cyan-200">{pkg.tagline}</p>
          <ul className="mt-2 list-disc space-y-1 pr-5 text-sm text-slate-300">
            {(Array.isArray(pkg.features) ? pkg.features : []).map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        <div className="flex shrink-0 gap-2">
          <button onClick={() => setOpen((v) => !v)} className="rounded-full border border-white/15 px-3 py-1.5 text-sm font-bold text-white hover:bg-white/10">{open ? "إغلاق" : "تعديل"}</button>
          <button onClick={() => onDelete(pkg.id)} className="rounded-full border border-rose-400/30 px-3 py-1.5 text-sm font-bold text-rose-200 hover:bg-rose-400/10">حذف</button>
        </div>
      </div>
      {open ? (
        <div className="mt-4 grid gap-3 border-t border-white/10 pt-4 sm:grid-cols-2">
          <Field label="الاسم" value={edit.name ?? ""} onChange={(e) => setEdit({ ...edit, name: e.target.value })} />
          <Field label="الترتيب" type="number" value={edit.sort_order ?? 0} onChange={(e) => setEdit({ ...edit, sort_order: e.target.value })} />
          <div className="sm:col-span-2">
            <Field label="الوصف المختصر" value={edit.tagline ?? ""} onChange={(e) => setEdit({ ...edit, tagline: e.target.value })} />
          </div>
          <label className="block sm:col-span-2">
            <span className="mb-1 block text-xs font-bold text-slate-300">المميزات (ميزة في كل سطر)</span>
            <textarea rows={4} value={edit.features} onChange={(e) => setEdit({ ...edit, features: e.target.value })} className="w-full rounded-xl border border-white/15 bg-white/[.06] px-3 py-2 text-white outline-none focus:border-cyan-300/50" />
          </label>
          <button onClick={() => onSave(edit)} disabled={busy} className="rounded-full bg-white px-5 py-2 font-black text-slate-950 disabled:opacity-60 sm:col-span-2">حفظ التعديلات</button>
        </div>
      ) : null}
    </div>
  );
}
