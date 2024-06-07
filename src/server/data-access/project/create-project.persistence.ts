import "server-only";
import { CreateProjectDto, ProjectDto } from "@/dto/project.dto";
import { db } from "@/server/db";
import { randomUUID } from "crypto";
import { projects } from "@/server/db/schema/project";
export async function createProjectPersistence(
  dto: CreateProjectDto,
): Promise<ProjectDto | undefined> {
  const id = randomUUID();
  const [output] = await db
    .insert(projects)
    .values({ id, ...dto })
    .returning();
  return output;
}
