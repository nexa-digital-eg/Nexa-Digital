import { getSql } from "./db";
import { services as defaultServices, packages as defaultPackages } from "@/data/site";

// Public content readers. They pull from Neon when available and fall back to
// the bundled defaults so the site keeps rendering even before the DB is set up
// or if a query fails.

export async function getServices() {
  const sql = getSql();
  if (!sql) return defaultServices;
  try {
    const rows = await sql`
      SELECT id, icon, title, description, sort_order
      FROM services
      ORDER BY sort_order ASC, id ASC
    `;
    return rows.length ? rows : defaultServices;
  } catch (error) {
    console.error("getServices failed, using defaults:", error.message);
    return defaultServices;
  }
}

export async function getPackages() {
  const sql = getSql();
  if (!sql) return defaultPackages;
  try {
    const rows = await sql`
      SELECT id, name, tagline, features, sort_order
      FROM packages
      ORDER BY sort_order ASC, id ASC
    `;
    if (!rows.length) return defaultPackages;
    return rows.map((row) => ({ ...row, features: Array.isArray(row.features) ? row.features : [] }));
  } catch (error) {
    console.error("getPackages failed, using defaults:", error.message);
    return defaultPackages;
  }
}
