import { cookies } from "next/headers";
import crypto from "node:crypto";

export const COOKIE_NAME = "nexa_admin";

// Derives the session token from ADMIN_PASSWORD so an exposed cookie can't be
// reversed into the password, and rotating the password invalidates sessions.
export function sessionToken() {
  const pw = process.env.ADMIN_PASSWORD;
  if (!pw) return null;
  return crypto.createHash("sha256").update(`nexa-admin::${pw}`).digest("hex");
}

export async function isAuthenticated() {
  const token = sessionToken();
  if (!token) return false;
  const store = await cookies();
  return store.get(COOKIE_NAME)?.value === token;
}
