document.getElementById("moreInterfaceExamples").innerHTML = "<b></br> More InterfaceExamples </b> </br>";

interface Vehicle{
    drive(): any;
}

class Car implements Vehicle {
    constructor(private wheels: number){

    }

    drive(): void{
        document.write(" The car drives with the "+this.wheels + " wheels </br>")
    }
}

class Bicycle implements Vehicle {
    constructor(private wheels: number){

    }

    drive(): void{
        document.write(" The bicycle drives with the "+this.wheels + " wheels </br>")
    }
}

var newCar = new Car(4);
var newBicycle = new Bicycle(2);

newCar.drive();
newBicycle.drive();

function GetWheels<w extends Vehicle>( vehicleName: w): number{
    return vehicleName.drive();
}

GetWheels(newCar);
GetWheels(newBicycle);