import { text, sqliteTable } from "drizzle-orm/sqlite-core";
import { users } from "@/server/db/schema/users";
import { sql } from "drizzle-orm";

export const projects = sqliteTable("project", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  userId: text("user_id")
    .notNull()
    .references(() => users.id),
  name: text("name").notNull(),
  status: text("status").notNull(),
  createdAt: text("created_at")
    .notNull()
    .default(sql`(CURRENT_TIMESTAMP)`),
});
