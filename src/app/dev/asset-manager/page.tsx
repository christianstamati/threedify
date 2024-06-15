import { Ellipsis, File, Folder, Plus } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Card } from "@/components/ui/card";

function AssetItem({ name, type = "file" }: { name: string; type?: string }) {
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
          <DropdownMenuItem>Delete</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default function AssetManagerDev() {
  // project ID

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
            <Button
              variant="outline"
              size="sm"
              className="h-fit w-fit gap-1 p-1 text-sm"
            >
              <Plus size={18} />
              <span className="sr-only">Add File</span>
            </Button>
          </div>
        </div>
        <div className="flex h-[300px] flex-col gap-1">
          <AssetItem name={"stuff.fbx"} />
        </div>
      </Card>
    </div>
  );
}
