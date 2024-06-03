import "server-only";
import { TodoDto } from "@/dto/todo.dto";
import { db } from "@/server/db";
import { todo } from "@/server/db/schema/todo";
export async function getTodos(): Promise<TodoDto[]> {
  return await db.select().from(todo).all();
}
