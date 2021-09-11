import { Shape } from "./Shape";
import { Cirle } from "./Circle";
import { Rectangle } from "./Rectangle";

let myShape = new Shape(3,4);
let myCirle = new Cirle(2,1,6);
let myRectangle = new Rectangle(2,3,10,12);

let shapeArray : Shape[] = [];

shapeArray.push(myShape);
shapeArray.push(myCirle);
shapeArray.push(myRectangle);

for( let tempShape of shapeArray){
    console.log(tempShape.getInfo());
}
