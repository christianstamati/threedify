import "server-only";
import { ProjectDto } from "@/dto/project.dto";
import { db } from "@/server/db";
import { projects } from "@/server/db/schema/projects";

export async function getAllProjectsPersistence(): Promise<ProjectDto[]> {
  return db.select().from(projects).all();
}
