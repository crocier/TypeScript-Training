class Customer{

    firstName : string;
    lastName : string;

    //creating constructor
    constructor(first:string , last:string){
        this.firstName = first;
        this.lastName = last;
    }
}

//creating an instance
let myCustomer = new Customer("Ajai","crocier");
// myCustomer.firstName="Ajai";
// myCustomer.lastName="crocier";

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);