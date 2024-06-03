import "server-only";
import { db } from "@/server/db";
import { UserDto } from "@/dto/user.dto";
import { users } from "@/server/db/schema/user";
import { sql } from "drizzle-orm";
export async function getUserById(id: string): Promise<UserDto | undefined> {
  return db
    .select()
    .from(users)
    .where(sql`${users.id} = ${id}`)
    .get();
}
