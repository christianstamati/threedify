export type ProjectDto = {
  id: string;
  userId: string;
  name: string;
  status: string;
  createdAt: string;
};

export type CreateProjectDto = {
  name: string;
  status: string;
  userId: string;
};

export type UpdateProjectDto = {
  name?: string;
  status?: string;
};
