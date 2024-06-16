import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card } from "@/components/ui/card";
import { getAllProjectAssetsPersistence } from "@/server/data-access/asset/get-all-project-assets.persistence";
import { UploadAssetsForm } from "@/app/dev/editor/upload-assets-form";
import { AssetItem } from "@/components/asset-item";

export default async function AssetManagerDev() {
  const projectId = 1 + "";
  const assets = await getAllProjectAssetsPersistence(projectId);

  return (
    <div className="h-screen w-full p-1">
      <Card className="flex flex-col gap-y-2 p-2">
        <div className="flex justify-between">
          <Breadcrumb>
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
    </div>
  );
}
