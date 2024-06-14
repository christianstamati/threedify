import { getProjectPersistence } from "@/server/data-access/project/get-project.persistence";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export default async function Editor(ctx: { params: { project_id: string } }) {
  const project = await getProjectPersistence(ctx.params.project_id);
  return (
    <main className="h-screen p-4">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel>One</ResizablePanel>
        <ResizableHandle />
        <ResizablePanel>Two</ResizablePanel>
      </ResizablePanelGroup>
    </main>
  );
}
