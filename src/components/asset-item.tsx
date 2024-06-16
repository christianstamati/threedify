import { Ellipsis, File, Folder } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DeleteAssetDropdown } from "@/app/dev/asset-manager/delete-asset-item";

export function AssetItem({
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
