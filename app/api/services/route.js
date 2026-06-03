import { NextResponse } from "next/server";
import { getSql } from "@/lib/db";
import { isAuthenticated } from "@/lib/auth";

export async function GET() {
  const sql = getSql();
  if (!sql) return NextResponse.json({ error: "قاعدة البيانات غير مهيأة." }, { status: 500 });
  const rows = await sql`
    SELECT id, icon, title, description, sort_order
    FROM services
    ORDER BY sort_order ASC, id ASC
  `;
  return NextResponse.json(rows);
}

export async function POST(request) {
  if (!(await isAuthenticated())) return NextResponse.json({ error: "غير مصرح." }, { status: 401 });
  const sql = getSql();
  if (!sql) return NextResponse.json({ error: "قاعدة البيانات غير مهيأة." }, { status: 500 });

  const body = await request.json().catch(() => ({}));
  const icon = String(body.icon ?? "").trim();
  const title = String(body.title ?? "").trim();
  const description = String(body.description ?? "").trim();
  const sortOrder = Number.isFinite(Number(body.sort_order)) ? Number(body.sort_order) : 0;
  if (!title) return NextResponse.json({ error: "العنوان مطلوب." }, { status: 400 });

  const [row] = await sql`
    INSERT INTO services (icon, title, description, sort_order)
    VALUES (${icon}, ${title}, ${description}, ${sortOrder})
    RETURNING id, icon, title, description, sort_order
  `;
  return NextResponse.json(row, { status: 201 });
}
