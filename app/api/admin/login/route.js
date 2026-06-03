import { NextResponse } from "next/server";
import { COOKIE_NAME, sessionToken } from "@/lib/auth";

export async function POST(request) {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) {
    return NextResponse.json({ error: "لم يتم ضبط كلمة مرور الإدارة (ADMIN_PASSWORD)." }, { status: 500 });
  }

  const { password } = await request.json().catch(() => ({}));
  if (!password || password !== expected) {
    return NextResponse.json({ error: "كلمة المرور غير صحيحة." }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(COOKIE_NAME, sessionToken(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
  return response;
}
