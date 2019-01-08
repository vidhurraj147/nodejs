"use strict";
document.getElementById("genericFunctionExamples").innerHTML = "<b></br> Generic Function Examples </b> </br>";
function GetType(val) {
    return typeof (val);
}
var aStr = " Random String";
var aNum = 15;
document.write("Check the function getType for aStr " + GetType(aStr) + "</br>");
document.write("Check the function getType for aNum " + GetType(aNum) + "</br>");
