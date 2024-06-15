import { text, sqliteTable } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";
import { projects } from "@/server/db/schema/projects";

export const assets = sqliteTable("asset", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  projectId: text("project_id")
    .notNull()
    .references(() => projects.id),
  name: text("name").notNull(),
  type: text("type").notNull(),
  path: text("path"),
  createdAt: text("created_at")
    .notNull()
    .default(sql`(CURRENT_TIMESTAMP)`),
});
