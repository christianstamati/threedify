import "server-only";
import { CreateTodoDto, TodoDto } from "@/dto/todo.dto";
import { db } from "@/server/db";
import { randomUUID } from "crypto";
import { todo } from "@/server/db/schema/todo";
export async function createTodo(
  createTodoDto: CreateTodoDto,
): Promise<TodoDto | undefined> {
  const id = randomUUID();
  const [output] = await db
    .insert(todo)
    .values({ id, ...createTodoDto })
    .returning();
  return output;
}
