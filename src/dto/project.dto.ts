export type ProjectDto = {
  id: string;
  userId: string;
  name: string;
  createdAt: string;
};

export type CreateProjectDto = {
  name: string;
  done: boolean;
  userId: string;
};

export type UpdateProjectDto = {
  name?: string;
  done?: boolean;
};
