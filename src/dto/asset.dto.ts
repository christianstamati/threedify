export type AssetDto = {
  id: string;
  name: string;
  projectId: string;
  type: string;
  path: string | null;
  createdAt: string;
};

export type CreateAssetDto = {
  name: string;
  projectId: string;
  type: string;
  path: string | null;
};

export type UpdateAssetDto = {
  name?: string;
  type?: string;
  path?: string;
};
