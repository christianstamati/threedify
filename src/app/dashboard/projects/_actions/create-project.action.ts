"use server";
import { createServerAction } from "zsa";
import z from "zod";
import { createProjectPersistence } from "@/server/data-access/project/create-project.persistence";
import { revalidatePath } from "next/cache";

export const createProjectAction = createServerAction()
  .input(
    z.object({
      name: z.string().min(2),
      status: z.string().min(2),
    }),
  )
  .output(z.boolean())
  .handler(async ({ input }) => {
    const res = await createProjectPersistence(input);

    if (res) {
      revalidatePath("/dashboard/projects");
      return true;
    }

    return false;
  });
