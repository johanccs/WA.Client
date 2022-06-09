export class NewEmployeeDto {

    constructor(
        public name: string, 
        public surname: string, 
        public jobTitleId: number,
        public dateOfBirth: string){}
}