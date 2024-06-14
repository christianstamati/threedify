import "server-only";
import { db } from "@/server/db";
import { UserDto } from "@/dto/user.dto";
import { users } from "@/server/db/schema/users";
export async function getAllUsersPersistence(): Promise<UserDto[]> {
  return db.select().from(users).all();
}
