"use server";
import { deleteProjectPersistence } from "@/server/data-access/project/delete-project.persistence";
import { revalidatePath } from "next/cache";
import { createServerAction } from "zsa";
import z from "zod";

export const deleteProjectAction = createServerAction()
  .input(z.string())
  .output(z.boolean())
  .handler(async ({ input }) => {
    const deletedProject = await deleteProjectPersistence(input);
    if (!deletedProject) {
      return false;
    }
    revalidatePath("/dashboard/projects");
    return true;
  });
