var a;
var b;
var c;
a = 10;
b = "qwerty";
c = false;
var someExample = function () { return "this is some example for arrow operator"; };
console.log(someExample());
var add = function (num1, num2) { return num1 + num2; };
console.log("This is add with ONLY numbers " + add(5, 8));
var optionalFunction = function (num1, num2, num3) {
    if (num3) {
        return num1 + num2;
    }
    return num1 + num2 + num3;
};
console.log(" optionalFunction 2 3 4 =  " + optionalFunction(2, 3, 4));
console.log(" optionalFunction 2 3 = " + optionalFunction(2, 3));
var optionalFunctionwithDefaultValue = function (num1, num2, num3) {
    if (num3 === void 0) { num3 = 1000; }
    return num1 + num2 + num3;
};
console.log(" optionalFunctionwithDefaultValue 2 3 4 =  " + optionalFunctionwithDefaultValue(2, 3, 4));
console.log(" optionalFunctionwithDefaultValue 2 3 = " + optionalFunctionwithDefaultValue(2, 3));
