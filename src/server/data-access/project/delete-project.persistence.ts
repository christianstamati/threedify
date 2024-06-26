import "server-only";
import { ProjectDto } from "@/dto/project.dto";
import { db } from "@/server/db";
import { projects } from "@/server/db/schema/projects";
import { sql } from "drizzle-orm";

export async function deleteProjectPersistence(
  id: string,
): Promise<ProjectDto | undefined> {
  return db
    .delete(projects)
    .where(sql`${projects.id} = ${id}`)
    .returning()
    .then((x) => x[0]);
}
