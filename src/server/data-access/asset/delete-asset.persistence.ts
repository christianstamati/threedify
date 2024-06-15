import "server-only";
import { db } from "@/server/db";
import { sql } from "drizzle-orm";
import { assets } from "@/server/db/schema/assets";
import { AssetDto } from "@/dto/asset.dto";

export async function deleteAssetPersistence(
  id: string,
): Promise<AssetDto | undefined> {
  return db
    .delete(assets)
    .where(sql`${assets.id} = ${id}`)
    .returning()
    .then((x) => x[0]);
}
