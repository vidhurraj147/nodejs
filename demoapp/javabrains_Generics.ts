
function echoAny(arg: any): any{
    return arg;
}

var anyString : string = echoAny(1);
console.log(anyString);

// TO CONTROL THE ACCESS WE CAN DO "GENERICS"

function echoGeneric<T>(arg: T): T{
    return arg;
}
var anyNumber : number = echoGeneric(12);
console.log(anyNumber);

function echoGenericReturnString<T>(arg: T): string{
    return arg+" TAKES GENERIC AND RETURNS STRING";
}
var anyNumbertoString : string = echoGenericReturnString(122);
console.log(anyNumbertoString);


function echoGenericSomethingElse<T>(arg: T): T{
    return arg;
}

// ******************************************************************* \\ 
class PersonGeneric{

    constructor(private firstName: string, private lastName: string){
        this.firstName = "NO FIRSTNAME IS GIVEN";
        this.lastName = "NO LASTNAME IS GIVEN";
    }

    getFullName(){
        return "from getFullName() FirstName is "+this.firstName+", and LastName "+this.lastName;
    }
}

class Admin extends PersonGeneric{

}

class Manager extends PersonGeneric{
    
}

let admin = new Admin("admin","admin");
let manager = new Manager("manager","manager");

function personEcho<T>(aPerson: T): T{
    return aPerson;
}

function personEchoGeneralWay(aPerson: PersonGeneric): PersonGeneric{
    return aPerson;
}
var foo = personEchoGeneralWay(admin);
var foo2 = personEchoGeneralWay(manager);
// The problem with the above assignment is 
// for any type we get foo OR foo2 as admin and manager respectively

function personEchoitsRespectiveType<T extends PersonGeneric>(aPerson: T ): T{
    // NOW its check it extends PersonGeneric 
    // passes that parciluar extended object so GENERICS applied
    return aPerson;
}
var fooNEW = personEchoitsRespectiveType(admin);
var fooNEW2 = personEchoitsRespectiveType(manager);