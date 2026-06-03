import { readFileSync } from "node:fs";
import { neon } from "@neondatabase/serverless";
import { services, packages } from "../data/site.js";

// Load DATABASE_URL from .env.local when it isn't already in the environment,
// so `npm run db:init` works locally without extra tooling.
if (!process.env.DATABASE_URL) {
  try {
    const env = readFileSync(new URL("../.env.local", import.meta.url), "utf8");
    for (const line of env.split("\n")) {
      const match = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
      if (match && !process.env[match[1]]) {
        process.env[match[1]] = match[2].replace(/^["']|["']$/g, "");
      }
    }
  } catch {
    // no .env.local — rely on the real environment
  }
}

const url = process.env.DATABASE_URL;
if (!url) {
  console.error("DATABASE_URL is required (set it in .env.local or the environment).");
  process.exit(1);
}

const sql = neon(url);

async function main() {
  await sql`
    CREATE TABLE IF NOT EXISTS services (
      id SERIAL PRIMARY KEY,
      icon TEXT NOT NULL DEFAULT '',
      title TEXT NOT NULL,
      description TEXT NOT NULL,
      sort_order INTEGER NOT NULL DEFAULT 0,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now()
    )
  `;
  await sql`
    CREATE TABLE IF NOT EXISTS packages (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      tagline TEXT NOT NULL DEFAULT '',
      features JSONB NOT NULL DEFAULT '[]',
      sort_order INTEGER NOT NULL DEFAULT 0,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now()
    )
  `;
  console.log("✓ Tables ready (services, packages)");

  const [{ count: serviceCount }] = await sql`SELECT COUNT(*)::int AS count FROM services`;
  if (serviceCount === 0) {
    let order = 0;
    for (const service of services) {
      await sql`
        INSERT INTO services (icon, title, description, sort_order)
        VALUES (${service.icon}, ${service.title}, ${service.description}, ${order})
      `;
      order += 1;
    }
    console.log(`✓ Seeded ${services.length} services`);
  } else {
    console.log(`• services already has ${serviceCount} rows — skipping seed`);
  }

  const [{ count: packageCount }] = await sql`SELECT COUNT(*)::int AS count FROM packages`;
  if (packageCount === 0) {
    let order = 0;
    for (const pkg of packages) {
      await sql`
        INSERT INTO packages (name, tagline, features, sort_order)
        VALUES (${pkg.name}, ${pkg.tagline}, ${JSON.stringify(pkg.features)}::jsonb, ${order})
      `;
      order += 1;
    }
    console.log(`✓ Seeded ${packages.length} packages`);
  } else {
    console.log(`• packages already has ${packageCount} rows — skipping seed`);
  }

  console.log("Done.");
}

main().catch((error) => {
  console.error("init-db failed:", error);
  process.exit(1);
});
