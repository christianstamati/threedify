"use server";
import { createServerAction } from "zsa";
import z from "zod";
import { createProjectPersistence } from "@/server/data-access/project/create-project.persistence";
import { revalidatePath } from "next/cache";
import { auth } from "@/server/auth";

export const createProjectAction = createServerAction()
  .input(
    z.object({
      name: z.string().min(2),
      status: z.string().min(2),
    }),
  )
  .output(z.boolean())
  .handler(async ({ input }) => {
    const session = await auth();

    if (!session) {
      console.error("not authenticated");
      // not authenticated
      return false;
    }

    const res = await createProjectPersistence({
      userId: session.user?.id!,
      ...input,
    });

    if (res) {
      revalidatePath("/dashboard/projects");
      return true;
    }

    return false;
  });
