export type TodoDto = {
  id: string;
  userId: string;
  name: string;
  done: boolean;
  createdAt: string;
};

export type CreateTodoDto = {
  name: string;
  done: boolean;
  userId: string;
};

export type UpdateTodoDto = {
  name?: string;
  done?: boolean;
};
