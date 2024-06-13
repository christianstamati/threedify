import { text, sqliteTable, AnySQLiteColumn } from "drizzle-orm/sqlite-core";
import { relations, sql } from "drizzle-orm";
import { projects } from "@/server/db/schema/projects";

export const folders = sqliteTable("folder", {
  id: text("id").notNull().primaryKey(),
  parentId: text("parent_id").references((): AnySQLiteColumn => folders.id),
  projectId: text("project_id")
    .notNull()
    .references(() => projects.id),
  name: text("name").notNull(),
  createdAt: text("created_at")
    .notNull()
    .default(sql`(CURRENT_TIMESTAMP)`),
});

export const foldersRelations = relations(folders, ({ one }) => ({
  parent: one(folders, {
    fields: [folders.parentId],
    references: [folders.id],
  }),
}));
