"use server";
import { UpdateTodoDto } from "@/dto/todo.dto";
import { updateTodo } from "@/server/data-access/todo/update-todo.persistence";
import { revalidatePath } from "next/cache";

export async function updateTodoAction(
  id: string,
  updateTodoDto: UpdateTodoDto,
) {
  await updateTodo(id, updateTodoDto);
  revalidatePath("/dashboard");
}
