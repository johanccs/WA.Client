import { Employee } from "./employee";
import { Project } from "./project";

export interface ProjectEmployee {
    id: number;
    projectID: number;
    employeeID: number;
    employee: Employee;
    project: Project;
}