import { getTodos } from "@/server/data-access/todo/get-todos.persistence";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { createTodoAction } from "@/app/dashboard/_actions/create-todo.action";
import TodoCard from "@/app/dashboard/todo-card";
import { auth } from "@/server/auth";
import Link from "next/link";

export default async function Dashboard() {
  const session = await auth();

  if (!session) {
    return <div>Not authenticated</div>;
  }

  const todos = await getTodos();
  return (
    <div className="flex flex-col gap-y-3 p-4">
      <h1 className="text-3xl">Dashboard</h1>
      <div className="flex flex-col gap-y-2">
        {todos.map((item, index) => (
          <TodoCard key={index} todo={item}></TodoCard>
        ))}
      </div>
      <form action={createTodoAction} className="flex gap-x-2">
        <Input name={"name"} />
        <Button type={"submit"}>ADD</Button>
      </form>
      <Link href={"/api/auth/signout?callbackUrl=/"}>SIGN OUT</Link>
    </div>
  );
}
