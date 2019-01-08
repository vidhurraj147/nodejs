var Foo = /** @class */ (function () {
    function Foo() {
    }
    // constructor(firstName: string, lastName: string ){
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    // }
    Foo.prototype.getFullName = function () {
        return this.firstName + this.lastName;
    };
    return Foo;
}());
var fooObj = new Foo();
var afooObj = new Foo();
var someObj = {
    firstName: "testFirstName",
    lastName: "testLastName",
    getFullName: function () { return "giving you test names"; }
};
fooObj = someObj; // This works completely fine 
// because the structure / syntax looks exactly the same
// THIS IS CALLED DUCK TYPING
console.log(fooObj.getFullName());
var someObj2 = {
    firstName: "testFirstName",
    lastName: "testLastName",
    getFullName: function () { return "giving you test names"; },
    addtionalField: "EXTRA_FIELD"
};
afooObj = someObj2;
console.log(afooObj.getFullName());
// console.log(afooObj.addtionalField); 
// The above calling additionalField wont work because aFooObj DOESNT HAS THAT FIELD
