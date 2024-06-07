import "server-only";
import { ProjectDto, UpdateProjectDto } from "@/dto/project.dto";
import { db } from "@/server/db";
import { projects } from "@/server/db/schema/project";
import { sql } from "drizzle-orm";
export async function updateProjectPersistence(
  id: string,
  dto: UpdateProjectDto,
): Promise<ProjectDto | undefined> {
  const [output] = await db
    .update(projects)
    .set(dto)
    .where(sql`${projects.id} = ${id}`)
    .returning();
  return output;
}
