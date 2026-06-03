import { NextResponse } from "next/server";
import { getSql } from "@/lib/db";
import { isAuthenticated } from "@/lib/auth";

function normalizeFeatures(value) {
  if (Array.isArray(value)) return value.map((item) => String(item).trim()).filter(Boolean);
  if (typeof value === "string") {
    return value
      .split("\n")
      .map((item) => item.trim())
      .filter(Boolean);
  }
  return [];
}

export async function PUT(request, { params }) {
  if (!(await isAuthenticated())) return NextResponse.json({ error: "غير مصرح." }, { status: 401 });
  const sql = getSql();
  if (!sql) return NextResponse.json({ error: "قاعدة البيانات غير مهيأة." }, { status: 500 });

  const { id } = await params;
  const body = await request.json().catch(() => ({}));
  const name = String(body.name ?? "").trim();
  const tagline = String(body.tagline ?? "").trim();
  const features = normalizeFeatures(body.features);
  const sortOrder = Number.isFinite(Number(body.sort_order)) ? Number(body.sort_order) : 0;
  if (!name) return NextResponse.json({ error: "اسم الباقة مطلوب." }, { status: 400 });

  const [row] = await sql`
    UPDATE packages
    SET name = ${name}, tagline = ${tagline}, features = ${JSON.stringify(features)}::jsonb, sort_order = ${sortOrder}
    WHERE id = ${id}
    RETURNING id, name, tagline, features, sort_order
  `;
  if (!row) return NextResponse.json({ error: "العنصر غير موجود." }, { status: 404 });
  return NextResponse.json(row);
}

export async function DELETE(request, { params }) {
  if (!(await isAuthenticated())) return NextResponse.json({ error: "غير مصرح." }, { status: 401 });
  const sql = getSql();
  if (!sql) return NextResponse.json({ error: "قاعدة البيانات غير مهيأة." }, { status: 500 });

  const { id } = await params;
  await sql`DELETE FROM packages WHERE id = ${id}`;
  return NextResponse.json({ ok: true });
}
