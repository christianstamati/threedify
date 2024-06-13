import "server-only";
import { db } from "@/server/db";
import { UserDto } from "@/dto/user.dto";
import { users } from "@/server/db/schema/users";
import { sql } from "drizzle-orm";
export async function getUserPersistence(
  id: string,
): Promise<UserDto | undefined> {
  return db
    .select()
    .from(users)
    .where(sql`${users.id} = ${id}`)
    .get();
}
