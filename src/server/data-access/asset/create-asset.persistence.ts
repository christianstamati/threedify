import "server-only";
import { db } from "@/server/db";
import { assets } from "@/server/db/schema/assets";
import { AssetDto, CreateAssetDto } from "@/dto/asset.dto";

export async function createAssetPersistence(
  dto: CreateAssetDto,
): Promise<AssetDto | undefined> {
  return db
    .insert(assets)
    .values(dto)
    .returning()
    .then((x) => x[0]);
}
