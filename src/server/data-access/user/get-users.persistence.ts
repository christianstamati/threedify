import "server-only";
import { db } from "@/server/db";
import { UserDto } from "@/dto/user.dto";
import { users } from "@/server/db/schema/user";
export async function getUsers(): Promise<UserDto[]> {
  return await db.select().from(users).all();
}
