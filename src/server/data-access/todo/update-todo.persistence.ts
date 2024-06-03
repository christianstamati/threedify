import "server-only";
import { TodoDto, UpdateTodoDto } from "@/dto/todo.dto";
import { db } from "@/server/db";
import { todo } from "@/server/db/schema/todo";
import { sql } from "drizzle-orm";
export async function updateTodo(
  id: string,
  updateTodoDto: UpdateTodoDto,
): Promise<TodoDto | undefined> {
  const [output] = await db
    .update(todo)
    .set(updateTodoDto)
    .where(sql`${todo.id} = ${id}`)
    .returning();
  return output;
}
