import "server-only";
import { ProjectDto } from "@/dto/project.dto";
import { db } from "@/server/db";
import { projects } from "@/server/db/schema/project";
export async function getAllProjectsPersistence(): Promise<ProjectDto[]> {
  return await db.select().from(projects).all();
}
