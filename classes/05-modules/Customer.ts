export class Customer{

    //creating constructor (parameter properties)
    constructor(private _firstName:string ,private _lastName:string){
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

