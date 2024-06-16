"use client";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { deleteAssetAction } from "@/app/dev/editor/_actions/delete-asset.action";

export function DeleteAssetDropdown({ id }: { id: string }) {
  return (
    <DropdownMenuItem onClick={() => deleteAssetAction(id)}>
      Delete
    </DropdownMenuItem>
  );
}
