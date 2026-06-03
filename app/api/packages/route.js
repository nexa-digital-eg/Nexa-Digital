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

export async function GET() {
  const sql = getSql();
  if (!sql) return NextResponse.json({ error: "قاعدة البيانات غير مهيأة." }, { status: 500 });
  const rows = await sql`
    SELECT id, name, tagline, features, sort_order
    FROM packages
    ORDER BY sort_order ASC, id ASC
  `;
  return NextResponse.json(rows);
}

export async function POST(request) {
  if (!(await isAuthenticated())) return NextResponse.json({ error: "غير مصرح." }, { status: 401 });
  const sql = getSql();
  if (!sql) return NextResponse.json({ error: "قاعدة البيانات غير مهيأة." }, { status: 500 });

  const body = await request.json().catch(() => ({}));
  const name = String(body.name ?? "").trim();
  const tagline = String(body.tagline ?? "").trim();
  const features = normalizeFeatures(body.features);
  const sortOrder = Number.isFinite(Number(body.sort_order)) ? Number(body.sort_order) : 0;
  if (!name) return NextResponse.json({ error: "اسم الباقة مطلوب." }, { status: 400 });

  const [row] = await sql`
    INSERT INTO packages (name, tagline, features, sort_order)
    VALUES (${name}, ${tagline}, ${JSON.stringify(features)}::jsonb, ${sortOrder})
    RETURNING id, name, tagline, features, sort_order
  `;
  return NextResponse.json(row, { status: 201 });
}
