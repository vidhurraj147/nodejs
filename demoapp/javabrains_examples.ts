var a: number;
var b: string;
var c: boolean;

a = 10;
b = "qwerty";
c = false;

var someExample = () => "this is some example for arrow operator";
console.log(someExample());

var add = (num1: number, num2: number): number => num1 + num2;
console.log("This is add with ONLY numbers "+add(5,8));

var optionalFunction = (num1: number, num2: number, num3?:number): number => {
    if(num3){
        return num1 + num2;
    }
    return num1 + num2 + num3;
};
console.log(" optionalFunction 2 3 4 =  "+optionalFunction(2,3,4));
console.log(" optionalFunction 2 3 = "+optionalFunction(2,3));

var optionalFunctionwithDefaultValue = (num1: number, num2: number, num3:number = 1000): number => {
    return num1 + num2 + num3;
};
console.log(" optionalFunctionwithDefaultValue 2 3 4 =  "+optionalFunctionwithDefaultValue(2,3,4));
console.log(" optionalFunctionwithDefaultValue 2 3 = "+optionalFunctionwithDefaultValue(2,3));