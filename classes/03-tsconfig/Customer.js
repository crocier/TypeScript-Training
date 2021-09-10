"use strict";
var Customer = /** @class */ (function () {
    //creating constructor
    function Customer(first, last) {
        this._firstName = first;
        this._lastName = last;
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
//creating an instance
var myCustomer = new Customer("Ajai", "crocier");
// myCustomer.firstName="Ajai";
// myCustomer.lastName="crocier";
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
