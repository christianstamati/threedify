import "server-only";
import { db } from "@/server/db";
import { sql } from "drizzle-orm";
import { folders } from "@/server/db/schema/folders";
import { FolderDto } from "@/dto/folder.dto";

export async function deleteFolderPersistence(
  id: string,
): Promise<FolderDto | undefined> {
  return db
    .delete(folders)
    .where(sql`${folders.id} = ${id}`)
    .returning()
    .then((x) => x[0]);
}
