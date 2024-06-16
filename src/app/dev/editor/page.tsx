import Link from "next/link";
import { Card } from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { UploadAssetsForm } from "@/app/dev/editor/upload-assets-form";
import { getAllProjectAssetsPersistence } from "@/server/data-access/asset/get-all-project-assets.persistence";
import { AssetItem } from "@/components/asset-item";

export default async function EditorPage() {
  const projectId = 1 + "";
  const assets = await getAllProjectAssetsPersistence(projectId);
  return (
    <Card className="fixed bottom-2 left-2 top-2 flex w-[300px] flex-col gap-y-2 rounded-sm p-2">
      <div className="flex justify-between">
        <Breadcrumb className="hidden">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Root</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/components">Components</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div>Assets</div>
        <div className="flex gap-2">
          <UploadAssetsForm projectId={projectId} />
        </div>
      </div>
      <div className="flex h-[300px] flex-col gap-1">
        {assets?.map((x, index) => (
          <AssetItem key={index} id={x.id} name={x.name} />
        ))}
      </div>
    </Card>
  );
}
