export class ProjectEmployeeDto {
   constructor(
       public projectName: string,
       public startDate: string,
       public endDate: string | null,
       public employees: string,
       public cost: number ){}
    
}