"use strict";
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
var Car = /** @class */ (function () {
    function Car(name, model) {
        this.name = name;
        this.model = model;
    }
    // constructor(public name: string, public model: string){
    // }
    // constructor(protected name: string, protected model: string){
    // }
    // This is accessible 
    //      Inside the CLASS
    //      Inside the EXTENDED class
    //  BUT cannot be accesed OUTSIDE the class
    // like aCar.name = "Ferrari" // This kind of assigning doesnt work
    // constructor(name: string, model: string){ 
    // }
    // The above constructor throws an error 
    Car.prototype.getName = function () {
        return this.name;
    };
    Car.prototype.getModel = function () {
        return this.model;
    };
    Car.prototype.setName = function (name) {
        this.name = name;
    };
    Car.prototype.setModel = function (model) {
        this.model = model;
    };
    return Car;
}());
