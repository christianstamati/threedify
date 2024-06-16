"use server";
import { revalidatePath } from "next/cache";
import { deleteAssetPersistence } from "@/server/data-access/asset/delete-asset.persistence";

export async function deleteAssetAction(id: string): Promise<void> {
  await deleteAssetPersistence(id);
  revalidatePath("/dev/editor");
}
