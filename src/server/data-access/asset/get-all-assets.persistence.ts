import "server-only";
import { db } from "@/server/db";
import { assets } from "@/server/db/schema/assets";
import { AssetDto } from "@/dto/asset.dto";
export async function getAllAssetsPersistence(): Promise<
  AssetDto[] | undefined
> {
  return db.select().from(assets).all();
}
