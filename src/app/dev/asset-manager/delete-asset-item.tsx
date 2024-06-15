"use client";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { deleteAssetAction } from "@/app/dev/asset-manager/_actions/delete-asset.action";

export function DeleteAssetDropdown({ id }: { id: string }) {
  return (
    <DropdownMenuItem onClick={() => deleteAssetAction(id)}>
      Delete
    </DropdownMenuItem>
  );
}
