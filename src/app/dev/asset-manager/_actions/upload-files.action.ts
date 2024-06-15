"use server";

import { revalidatePath } from "next/cache";
import { createAssetPersistence } from "@/server/data-access/asset/create-asset.persistence";

export async function uploadFilesAction(form: FormData): Promise<void> {
  const projectId = form.get("projectId") as string;
  const files = form.getAll("files") as File[];

  for (const file of files) {
    await createAssetPersistence({
      projectId,
      name: file.name,
      type: file.type,
      path: null,
    });
  }

  revalidatePath("/dev/asset-manager");
}
