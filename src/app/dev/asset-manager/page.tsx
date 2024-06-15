import { Ellipsis, File, Folder } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Card } from "@/components/ui/card";
import { getAllProjectAssetsPersistence } from "@/server/data-access/asset/get-all-project-assets.persistence";
import { UploadAssetsForm } from "@/app/dev/asset-manager/upload-assets-form";
import { DeleteAssetDropdown } from "@/app/dev/asset-manager/delete-asset-item";

function AssetItem({
  name,
  type = "file",
  id,
}: {
  name: string;
  type?: string;
  id: string;
}) {
  return (
    <div className="group flex cursor-pointer justify-between rounded-sm p-1 pl-2 hover:bg-primary/10 active:bg-primary/10">
      <div className="flex">
        {type === "folder" ? (
          <Folder size={21} className="mr-2" />
        ) : (
          <File size={21} className="mr-2" />
        )}
        <span className="text-sm">{name}</span>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Ellipsis size={21} className="mr-2 hidden group-hover:block" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DeleteAssetDropdown id={id} />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

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
