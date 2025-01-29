import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_c5hyopbMKf4P@ep-restless-sky-a9421d1y-pooler.gwc.azure.neon.tech/neondb?sslmode=require",
  },
});
