"use server";
import { deleteProjectPersistence } from "@/server/data-access/project/delete-project.persistence";
import { revalidatePath } from "next/cache";

export async function deleteProjectAction(projectId: string): Promise<boolean> {
  const deletedProject = await deleteProjectPersistence(projectId);
  if (!deletedProject) {
    return false;
  }
  revalidatePath("/dashboard/projects");
  return true;
}
