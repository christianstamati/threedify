"use server";
import { revalidatePath } from "next/cache";
import { deleteTodo } from "@/server/data-access/todo/delete-todo.persistence";

export async function deleteTodoAction(id: string) {
  await deleteTodo(id);
  revalidatePath("/dashboard");
}
