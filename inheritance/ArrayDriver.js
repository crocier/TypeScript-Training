"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Shape_1 = require("./Shape");
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var myShape = new Shape_1.Shape(3, 4);
var myCirle = new Circle_1.Cirle(2, 1, 6);
var myRectangle = new Rectangle_1.Rectangle(2, 3, 10, 12);
var shapeArray = [];
shapeArray.push(myShape);
shapeArray.push(myCirle);
shapeArray.push(myRectangle);
for (var _i = 0, shapeArray_1 = shapeArray; _i < shapeArray_1.length; _i++) {
    var tempShape = shapeArray_1[_i];
    console.log(tempShape.getInfo());
}
