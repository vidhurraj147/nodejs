"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function echoAny(arg) {
    return arg;
}
var anyString = echoAny(1);
console.log(anyString);
// TO CONTROL THE ACCESS WE CAN DO "GENERICS"
function echoGeneric(arg) {
    return arg;
}
var anyNumber = echoGeneric(12);
console.log(anyNumber);
function echoGenericReturnString(arg) {
    return arg + " TAKES GENERIC AND RETURNS STRING";
}
var anyNumbertoString = echoGenericReturnString(122);
console.log(anyNumbertoString);
function echoGenericSomethingElse(arg) {
    return arg;
}
// ******************************************************************* \\ 
var PersonGeneric = /** @class */ (function () {
    function PersonGeneric(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.firstName = "NO FIRSTNAME IS GIVEN";
        this.lastName = "NO LASTNAME IS GIVEN";
    }
    PersonGeneric.prototype.getFullName = function () {
        return "from getFullName() FirstName is " + this.firstName + ", and LastName " + this.lastName;
    };
    return PersonGeneric;
}());
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Admin;
}(PersonGeneric));
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Manager;
}(PersonGeneric));
var admin = new Admin("admin", "admin");
var manager = new Manager("manager", "manager");
function personEcho(aPerson) {
    return aPerson;
}
function personEchoGeneralWay(aPerson) {
    return aPerson;
}
var foo = personEchoGeneralWay(admin);
var foo2 = personEchoGeneralWay(manager);
// The problem with the above assignment is 
// for any type we get foo OR foo2 as admin and manager respectively
function personEchoitsRespectiveType(aPerson) {
    // NOW its check it extends PersonGeneric 
    // passes that parciluar extended object so GENERICS applied
    return aPerson;
}
var fooNEW = personEchoitsRespectiveType(admin);
var fooNEW2 = personEchoitsRespectiveType(manager);
