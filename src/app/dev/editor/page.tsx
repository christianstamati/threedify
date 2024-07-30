"use client";
import { Card } from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { UploadAssetsForm } from "@/components/upload-assets-form";
import { Scene } from "@/components/scene";
import { folder, useControls } from "leva";
import { useBearStore } from "@/stores/bear-store";

export default function EditorPage() {
  const store = useBearStore();

  const { name, aNumber } = useControls({ name: "World", aNumber: 0 });

  return (
    <div className="flex h-svh flex-col">
      <Scene />
      <div>{name}</div>
    </div>
  );
}

function EditorPageOld() {
  const projectId = 1 + "";
  //const assets = await getAllProjectAssetsPersistence(projectId);
  return (
    <Card className="fixed bottom-2 left-2 top-2 flex hidden w-[300px] flex-col gap-y-2 rounded-sm p-2">
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
        {/*{assets?.map((x, index) => (*/}
        {/*  <AssetItem key={index} id={x.id} name={x.name} />*/}
        {/*))}*/}
      </div>
    </Card>
  );
}
