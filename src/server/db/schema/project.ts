import { text, sqliteTable } from "drizzle-orm/sqlite-core";
import { users } from "@/server/db/schema/user";
import { sql } from "drizzle-orm";

export const projects = sqliteTable("project", {
  id: text("id").notNull().primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id),
  name: text("name").notNull(),
  createdAt: text("created_at")
    .notNull()
    .default(sql`(CURRENT_TIMESTAMP)`),
});
