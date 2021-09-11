import { Shape } from "./Shape";

export class Rectangle extends Shape{

    constructor(theX : number , theY : number , 
        private _length: number , private _breadth: number ){
            super(theX,theY);
    }
    public  get length(): number {
		return this._length ;
	}

	public set length(value : number) {
    this._length = value ;
}

	public  get breadth(): number {
    return this._breadth ;
}

	public set breadth(value : number) {
    this._breadth = value ;
}

getInfo(): string{
    return super.getInfo() + 
    ` Rectangle : length = ${this._length} , breadth = ${this._breadth} `;
}

}