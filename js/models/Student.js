import { Person } from "../models/Person.js";

export class Student extends Person {
    constructor(id, name, address, email, mathScore, physicScore, chemisScore ){
        super(id, name, address, email);
        this.mathScore = mathScore;
        this.physicScore = physicScore;
        this.chemisScore = chemisScore;
    }
    
    calcAverage(){
        return (((+this.mathScore) + (+this.physicScore) + (+this.chemisScore)) / 3).toFixed(2);
    }
}