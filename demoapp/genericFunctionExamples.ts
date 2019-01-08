document.getElementById("genericFunctionExamples").innerHTML = "<b></br> Generic Function Examples </b> </br>";


function GetType<T>(val: T): string{
    return typeof(val);
}

var aStr: string = " Random String";
var aNum: number = 15;

document.write("Check the function getType for aStr "+GetType(aStr) + "</br>");
document.write("Check the function getType for aNum "+GetType(aNum) + "</br>");
