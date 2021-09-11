import { Shape } from "./Shape";
import { Cirle } from "./Circle";
import { Rectangle } from "./Rectangle";

let myShape = new Shape(3,4);
console.log(myShape.getInfo());

let myCirle = new Cirle(2,1,6);
console.log(myCirle.getInfo());

let myRectangle = new Rectangle(2,3,10,12);
console.log(myRectangle.getInfo());