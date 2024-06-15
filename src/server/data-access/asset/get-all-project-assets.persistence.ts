import "server-only";
import { db } from "@/server/db";
import { assets } from "@/server/db/schema/assets";
import { AssetDto } from "@/dto/asset.dto";
import { eq } from "drizzle-orm";
export async function getAllProjectAssetsPersistence(
  projectId: string,
): Promise<AssetDto[] | undefined> {
  return db.select().from(assets).where(eq(assets.projectId, projectId)).all();
}
