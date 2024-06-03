import "server-only";
import { TodoDto } from "@/dto/todo.dto";
import { db } from "@/server/db";
import { todo } from "@/server/db/schema/todo";
import { sql } from "drizzle-orm";
export async function getTodoById(id: string): Promise<TodoDto | undefined> {
  return db
    .select()
    .from(todo)
    .where(sql`${todo.id} = ${id}`)
    .get();
}
