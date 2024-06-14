export type FolderDto = {
  id: string;
  name: string;
  parentId: string | null;
  projectId: string;
  createdAt: string;
};

export type CreateFolderDto = {
  name: string;
  parentId: string | null;
  projectId: string;
};

export type UpdateFolderDto = {
  name?: string;
  parentId?: string;
};
