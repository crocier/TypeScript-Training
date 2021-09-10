"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
var Customer = /** @class */ (function () {
    //creating constructor (parameter properties)
    function Customer(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    Object.defineProperty(Customer.prototype, "firstName", {
        //get and set methods
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (input) {
            this._lastName = input;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
exports.Customer = Customer;
