import { neon } from "@neondatabase/serverless";

let cachedSql;

// Returns a Neon SQL client, or null when DATABASE_URL isn't configured.
// Returning null lets the app fall back to static defaults instead of crashing.
export function getSql() {
  if (cachedSql) return cachedSql;
  const url = process.env.DATABASE_URL;
  if (!url) return null;
  cachedSql = neon(url);
  return cachedSql;
}
