import { getProjectPersistence } from "@/server/data-access/project/get-project.persistence";

export default async function Editor(ctx: { params: { project_id: string } }) {
  const project = await getProjectPersistence(ctx.params.project_id);
  return (
    <main>
      <pre>{JSON.stringify(project, null, 2)}</pre>
    </main>
  );
}
