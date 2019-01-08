"use strict";
document.getElementById("moreInterfaceExamples").innerHTML = "<b></br> More InterfaceExamples </b> </br>";
var Car = /** @class */ (function () {
    function Car(wheels) {
        this.wheels = wheels;
    }
    Car.prototype.drive = function () {
        document.write(" The car drives with the " + this.wheels + " wheels </br>");
    };
    return Car;
}());
var Bicycle = /** @class */ (function () {
    function Bicycle(wheels) {
        this.wheels = wheels;
    }
    Bicycle.prototype.drive = function () {
        document.write(" The bicycle drives with the " + this.wheels + " wheels </br>");
    };
    return Bicycle;
}());
var newCar = new Car(4);
var newBicycle = new Bicycle(2);
newCar.drive();
newBicycle.drive();
function GetWheels(vehicleName) {
    return vehicleName.drive();
}
GetWheels(newCar);
GetWheels(newBicycle);
