import { Person } from "../models/Person.js";

export class Customer extends Person {
    constructor(id, name, address, email, company, orderValue, rate){
        super(id, name, address, email);
        this.company = company;
        this.orderValue = orderValue;
        this.rate = rate;
    }
}