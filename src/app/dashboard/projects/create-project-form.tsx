"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useFormField,
} from "@/components/ui/form";
import { Input, InputProps } from "@/components/ui/input";
import LoadingButton from "@/components/loading-button";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useState } from "react";
import { createProjectAction } from "@/app/dashboard/projects/_actions/create-project.action";

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  status: z.string().min(2),
});

function FormInput({ className, ...rest }: InputProps) {
  const { error } = useFormField();
  return (
    <Input className={cn({ "border-red-400": error }, className)} {...rest} />
  );
}

export function CreateProjectForm() {
  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      status: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    await createProjectAction(data);
    setOpen(false);
  }

  return (
    <Sheet
      open={open}
      onOpenChange={(value) => {
        form.reset();
        setOpen(value);
      }}
    >
      <SheetTrigger asChild>
        <Button size="sm" className="h-8 gap-1">
          <PlusCircle className="h-3.5 w-3.5" />
          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
            Add Project
          </span>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Add project</SheetTitle>
          <SheetDescription>Add a new project</SheetDescription>
        </SheetHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mb-6 mt-4 w-full space-y-3"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field: { ref, ...rest } }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-primary">Name</FormLabel>
                  <FormControl>
                    <FormInput {...rest} />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="status"
              render={({ field: { ref, ...rest } }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-primary">Status</FormLabel>
                  <FormControl>
                    <FormInput {...rest} />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
            <SheetFooter>
              <LoadingButton
                className={"mt-6 w-full"}
                size="lg"
                type="submit"
                loading={form.formState.isSubmitting}
              >
                Create Project
              </LoadingButton>
            </SheetFooter>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
}
