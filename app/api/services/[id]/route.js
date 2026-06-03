import { NextResponse } from "next/server";
import { getSql } from "@/lib/db";
import { isAuthenticated } from "@/lib/auth";

export async function PUT(request, { params }) {
  if (!(await isAuthenticated())) return NextResponse.json({ error: "غير مصرح." }, { status: 401 });
  const sql = getSql();
  if (!sql) return NextResponse.json({ error: "قاعدة البيانات غير مهيأة." }, { status: 500 });

  const { id } = await params;
  const body = await request.json().catch(() => ({}));
  const icon = String(body.icon ?? "").trim();
  const title = String(body.title ?? "").trim();
  const description = String(body.description ?? "").trim();
  const sortOrder = Number.isFinite(Number(body.sort_order)) ? Number(body.sort_order) : 0;
  if (!title) return NextResponse.json({ error: "العنوان مطلوب." }, { status: 400 });

  const [row] = await sql`
    UPDATE services
    SET icon = ${icon}, title = ${title}, description = ${description}, sort_order = ${sortOrder}
    WHERE id = ${id}
    RETURNING id, icon, title, description, sort_order
  `;
  if (!row) return NextResponse.json({ error: "العنصر غير موجود." }, { status: 404 });
  return NextResponse.json(row);
}

export async function DELETE(request, { params }) {
  if (!(await isAuthenticated())) return NextResponse.json({ error: "غير مصرح." }, { status: 401 });
  const sql = getSql();
  if (!sql) return NextResponse.json({ error: "قاعدة البيانات غير مهيأة." }, { status: 500 });

  const { id } = await params;
  await sql`DELETE FROM services WHERE id = ${id}`;
  return NextResponse.json({ ok: true });
}
