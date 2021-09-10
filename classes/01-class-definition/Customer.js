var Customer = /** @class */ (function () {
    //creating constructor
    function Customer(first, last) {
        this.firstName = first;
        this.lastName = last;
    }
    return Customer;
}());
//creating an instance
var myCustomer = new Customer("Ajai", "crocier");
// myCustomer.firstName="Ajai";
// myCustomer.lastName="crocier";
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
