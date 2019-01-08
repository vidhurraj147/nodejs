// genericFunctionMoreExamples
document.getElementById("genericFunctionMoreExamples").innerHTML = "<b></br> Generic Function More Examples </b> </br>";
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var aNumber = new GenericNumber();
aNumber.add = function (x, y) {
    return x + y;
};
document.write(" 5 + 4 = " + aNumber.add(5, 4) + "</br>");
// ------------- Lets check with STRING
var aString = new GenericNumber();
aString.add = function (a, b) {
    return a + " THIS IS ADDED FROM aString variable " + b;
};
var aStringNumberSend = new GenericNumber();
aStringNumberSend.add = function (a, b) {
    return String(Number(a) + Number(b));
};
document.write(" Rahul + KadgeKar = " + aString.add("Rahul", "Kadgekar") + "</br>");
document.write(" 10 + 50 = " + aStringNumberSend.add("10", "50") + "</br>");
