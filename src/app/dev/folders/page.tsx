import { Ellipsis, Folder } from "lucide-react";
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

function FolderItem({ name }: { name: string }) {
  return (
    <div className="group flex cursor-pointer justify-between rounded-sm p-1 pl-2 hover:bg-primary/10 active:bg-primary/10">
      <div className="flex">
        <Folder size={21} className="mr-2" />
        <span className="text-sm">{name}</span>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Ellipsis size={21} className="hidden group-hover:block" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Delete</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default function FoldersDev() {
  return (
    <div className="h-screen w-full">
      <div className="mb-1 flex justify-between p-2">
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
        <Button size={"icon"} className="h-6 w-6">
          +
        </Button>
      </div>
      <div className="flex h-[300px] flex-col gap-1">
        <FolderItem name={"My Folder"} />
        <FolderItem name={"Assets"} />
        <FolderItem name={"My Folder"} />
      </div>
    </div>
  );
}
