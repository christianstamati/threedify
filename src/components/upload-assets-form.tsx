"use client";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { uploadFilesAction } from "@/app/dev/editor/_actions/upload-files.action";

export function UploadAssetsForm({ projectId }: { projectId: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="h-fit w-fit gap-1 p-1 text-sm"
        >
          <Plus size={18} />
          <span className="sr-only">Add File</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Upload Files</DialogTitle>
          <DialogDescription>
            Upload files to the project here. Click upload when you finished.
          </DialogDescription>
        </DialogHeader>
        <form className="flex flex-col gap-2" action={uploadFilesAction}>
          <Input name="projectId" defaultValue={projectId} readOnly></Input>
          <Input name="files" type="file" multiple />
          <DialogFooter>
            <DialogClose>
              <Button type="submit">Upload</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
