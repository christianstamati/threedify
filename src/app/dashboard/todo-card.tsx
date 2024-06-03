"use client";
import React, { useState } from "react";
import { TodoDto } from "@/dto/todo.dto";
import { deleteTodoAction } from "@/app/dashboard/_actions/delete-todo.action";
import { Card } from "@/components/ui/card";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { updateTodoAction } from "@/app/dashboard/_actions/update-todo.action";

function TodoCard({ todo }: { todo: TodoDto }) {
  const [done, setDone] = useState(todo.done);

  return (
    <Card className="flex w-full items-center p-2 px-4">
      <div className="flex w-full items-center gap-x-4">
        <Checkbox
          checked={done}
          onClick={async () => {
            const check = !done;
            setDone(check);
            await updateTodoAction(todo.id, { done: check });
          }}
        />
        <p>{todo.name}</p>
      </div>
      <Button
        className="h-fit p-2"
        variant={"ghost"}
        onClick={async () => {
          await deleteTodoAction(todo.id);
        }}
      >
        <X />
      </Button>
    </Card>
  );
}

export default TodoCard;
