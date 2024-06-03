import "server-only";
import { TodoDto } from "@/dto/todo.dto";
import { db } from "@/server/db";
import { todo } from "@/server/db/schema/todo";
import { sql } from "drizzle-orm";
export async function deleteTodo(id: string): Promise<TodoDto | undefined> {
  const [output] = await db
    .delete(todo)
    .where(sql`${todo.id} = ${id}`)
    .returning();
  return output;
}
