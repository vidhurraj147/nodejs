var Person = /** @class */ (function () {
    // just the special function without the name
    function Person() {
        this.firstName = "NO FIRSTNAME IS GIVEN";
        this.lastName = "NO LASTNAME IS GIVEN";
    }
    Person.prototype.getFullName = function () {
        return "from getFullName() FirstName is " + this.firstName + ", and LastName " + this.lastName;
    };
    return Person;
}());
var aPerson = new Person();
aPerson.firstName = "Rahul";
aPerson.lastName = "Kadgekar";
console.log(aPerson);
var bPerson = new Person();
bPerson.firstName = "Podisha";
bPerson.lastName = "Kadgekar";
console.log(bPerson);
console.log(bPerson.getFullName());
var cPerson;
cPerson = new Person(); // This is of type "any"4
console.log(cPerson);
var dPerson;
dPerson = new Person; // This is of type ONLY "Person"
console.log(dPerson);
