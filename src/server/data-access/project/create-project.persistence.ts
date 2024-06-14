import "server-only";
import { CreateProjectDto, ProjectDto } from "@/dto/project.dto";
import { db } from "@/server/db";
import { projects } from "@/server/db/schema/projects";

export async function createProjectPersistence(
  dto: CreateProjectDto,
): Promise<ProjectDto | undefined> {
  return db
    .insert(projects)
    .values(dto)
    .returning()
    .then((x) => x[0]);
}
