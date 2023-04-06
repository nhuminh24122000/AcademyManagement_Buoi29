import { Person } from "../models/Person.js";

export class Teacher extends Person {
    constructor(id, name, address, email, workDay, basicSalary){
        super(id, name, address, email);
        this.workDay = workDay;
        this.basicSalary = basicSalary;
    }

    calcSalary(){
        return +this.workDay * +this.basicSalary;
    }
}