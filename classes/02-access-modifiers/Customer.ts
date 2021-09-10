class Customer{

    private _firstName : string;
    private _lastName

    //creating constructor
    constructor(first:string , last:string){
        this._firstName = first;
        this._lastName = last;
    }

    //get and set methods
    public get firstName(): string {
        return this._firstName;
    }
    public set firstName(value : string) {
        this._firstName = value;
    }
    
    public get lastName() : string {
        return this._lastName;
    }

    public set lastName(input : string) {
        this._lastName = input;
    }
}

//creating an instance
let myCustomer = new Customer("Ajai","crocier");
// myCustomer.firstName="Ajai";
// myCustomer.lastName="crocier";

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);