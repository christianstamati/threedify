"use server";

import { revalidatePath } from "next/cache";
import { createTodo } from "@/server/data-access/todo/create-todo.persistence";

export async function createTodoAction(formData: FormData) {
  const createTodoData = {
    userId: "EC",
    name: formData.get("name") as string,
    done: false,
  };
  await createTodo(createTodoData);
  revalidatePath("/dashboard");
}
