import { type Config } from "drizzle-kit";
import * as dotenv from "dotenv"
import { env } from "~/env";


if (!("DATABASE_URL" in process.env))
  throw new Error("DATABASE_URL not found on .env.development");

export default {
  schema: "./src/server/db/schema.ts",
  out: "./src/db/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: env.POSTGRES_URL,
  },
  tablesFilter: ["riff_*"],
} satisfies Config;
