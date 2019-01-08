interface People{
    firstName: string;
    lastName: string;
    getFullName(): string;
}

class Foo implements People{
    firstName: string;
    lastName: string;

    // constructor(firstName: string, lastName: string ){
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    // }

    getFullName(): string{
        return this.firstName + this.lastName;
    }
}

var fooObj: Foo = new Foo();
let afooObj: People = new Foo();


let someObj = {
    firstName: "testFirstName",
    lastName: "testLastName",
    getFullName: () => "giving you test names"
}

fooObj = someObj; // This works completely fine 
// because the structure / syntax looks exactly the same
// THIS IS CALLED DUCK TYPING
console.log(fooObj.getFullName());

let someObj2 = {
    firstName: "testFirstName",
    lastName: "testLastName",
    getFullName: () => "giving you test names",
    addtionalField : "EXTRA_FIELD"
}

afooObj = someObj2;
console.log(afooObj.getFullName());
// console.log(afooObj.addtionalField); 
// The above calling additionalField wont work because aFooObj DOESNT HAS THAT FIELD



class Car{
    constructor(private name: string, private model: string){
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


    getName(){
        return this.name;
    }

    getModel(){
        return this.model;
    }

    setName(name: string){
        this.name = name;
    }

    setModel(model: string){
        this.model = model;
    }
}