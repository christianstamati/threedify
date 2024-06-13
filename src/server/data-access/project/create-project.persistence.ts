import "server-only";
import { CreateProjectDto, ProjectDto } from "@/dto/project.dto";
import { db } from "@/server/db";
import { randomUUID } from "crypto";
import { projects } from "@/server/db/schema/projects";
import { getUserPersistence } from "@/server/data-access/user/get-user.persistence";
import { getAllUsersPersistence } from "@/server/data-access/user/get-all-users.persistence";
export async function createProjectPersistence(
  dto: CreateProjectDto,
): Promise<ProjectDto | undefined> {
  const id = randomUUID();
  const uid = await getAllUsersPersistence();
  const [output] = await db
    .insert(projects)
    .values({ id, ...dto, userId: uid[0]?.id! })
    .returning();
  return output;
}
