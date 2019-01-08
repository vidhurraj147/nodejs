export class Person{
    firstName;
    lastName;

    // just the special function without the name
    constructor(){
        this.firstName = "NO FIRSTNAME IS GIVEN";
        this.lastName = "NO LASTNAME IS GIVEN";
    }

    // As we cannot have a over loaded functions in the typescript 
    // similarly we cannot have a overloaded constructor 
    // ONLY 1 function is allowed

    // constructor(firstName: string, lastName: string){
    //     this.firstName = this.firstName;
    //     this.lastName = this.lastName;
    // }

    getFullName(){
        return "from getFullName() FirstName is "+this.firstName+", and LastName "+this.lastName;
    }
}


var aPerson = new Person();
aPerson.firstName = "Rahul";
aPerson.lastName = "Kadgekar";
console.log(aPerson);

var bPerson : Person = new Person();
bPerson.firstName = "Podisha";
bPerson.lastName = "Kadgekar";
console.log(bPerson);
console.log(bPerson.getFullName());

var cPerson;
cPerson = new Person(); // This is of type "any"4
console.log(cPerson);

var dPerson : Person;
dPerson = new Person; // This is of type ONLY "Person"
console.log(dPerson);

// var aPersonFullyInitialised = new Person("Rahul", "Kadgekar");
// console.log(aPerson);