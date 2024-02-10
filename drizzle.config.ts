import { defineConfig } from "drizzle-kit";
import { config } from "dotenv";

config({ path: ".env.local" });

if (!process.env.DATABASE_URL) {
    throw new Error("Database URL is not set in environment variables!");
}

export default defineConfig({
    schema: "./src/lib/schema.ts",
    verbose: true,
    strict: true,
    driver: "pg",
    dbCredentials: {
        connectionString: process.env.DATABASE_URL,
    },
});
