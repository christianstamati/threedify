import "server-only";
import { db } from "@/server/db";
import { CreateFolderDto, FolderDto } from "@/dto/folder.dto";
import { folders } from "@/server/db/schema/folders";
export async function createFolderPersistence(
  dto: CreateFolderDto,
): Promise<FolderDto | undefined> {
  return db
    .insert(folders)
    .values(dto)
    .returning()
    .then((x) => x[0]);
}
