import "server-only";
import { ProjectDto } from "@/dto/project.dto";
import { db } from "@/server/db";
import { projects } from "@/server/db/schema/project";
import { sql } from "drizzle-orm";
export async function deleteProjectPersistence(
  id: string,
): Promise<ProjectDto | undefined> {
  const [output] = await db
    .delete(projects)
    .where(sql`${projects.id} = ${id}`)
    .returning();
  return output;
}
