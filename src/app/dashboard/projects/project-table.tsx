import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ProjectDto } from "@/dto/project.dto";
import { ProjectActions } from "@/app/dashboard/projects/project-actions";

export function ProjectTable({ projects }: { projects: ProjectDto[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="hidden md:table-cell">Created at</TableHead>
          <TableHead>
            <span className="sr-only">Actions</span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {projects.map((project, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{project.name}</TableCell>
            <TableCell>
              <Badge variant="outline">{project.status}</Badge>
            </TableCell>
            <TableCell className="hidden md:table-cell">
              {project.createdAt}
            </TableCell>
            <TableCell>
              <ProjectActions project={project} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
