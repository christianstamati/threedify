import "server-only";
import { ProjectDto } from "@/dto/project.dto";
import { db } from "@/server/db";
import { projects } from "@/server/db/schema/projects";
import { sql } from "drizzle-orm";
export async function getProjectPersistence(
  id: string,
): Promise<ProjectDto | undefined> {
  return db
    .select()
    .from(projects)
    .where(sql`${projects.id} = ${id}`)
    .get();
}
