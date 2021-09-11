"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shape = void 0;
var Shape = /** @class */ (function () {
    function Shape(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Object.defineProperty(Shape.prototype, "x", {
        get: function () {
            return this.x;
        },
        set: function (x) {
            this._x = x;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "y", {
        get: function () {
            return this._y;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "Number", {
        set: function (y) {
            this._y = y;
        },
        enumerable: false,
        configurable: true
    });
    Shape.prototype.getInfo = function () {
        return ("x=" + this._x + " , y=" + this._y);
    };
    return Shape;
}());
exports.Shape = Shape;
