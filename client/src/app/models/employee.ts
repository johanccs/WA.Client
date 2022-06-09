import { JobTitle } from "./jobTitle";

export class Employee {

    constructor(
        public id: number, 
        public name: string, 
        public surname: string, 
        public jobTitleId: number,
        public jobTitle: JobTitle,
        public dateOfBirth: string){}
}