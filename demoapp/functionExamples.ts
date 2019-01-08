document.getElementById("functionExamples").innerHTML = "<b></br> Function examples</b>";

var getSum = function(num1: number, num2: number): number{
    return num1 + num2;
}

var theSum1: number = getSum(5,2);

document.write(" 5 + 2 via getSum() = "+theSum1+"</br>");

var getDiff = function(num1: number, num2 = 2, num3?: number): number{
    if(typeof num3 != "undefined")
        return num1 - num2 - num3;
    return num1 - num2;    
}

var theDiff1 = getDiff(5,6);
var theDiff2 = getDiff(5);
var theDiff3 = getDiff(5,2,3);

document.write("5,6 getDiff "+theDiff1+"</br>");
document.write("5 getDiff "+theDiff2+"</br>");
document.write("5 2 3 getDiff "+theDiff3+"</br>");


var sumAll = function(...nums: number[]): void {
    var sum = nums.reduce((a,b) => a+b,0);
    document.write("sumAll() "+sum+"</br>");
}

var summAllReturn = function(...nums: number[]): number {
    return nums.reduce((a,b) => a+b,0);
}

sumAll(1,2,3,4,5);
var sumAllReturTest = summAllReturn(1,2,3,4,5,6);
document.write("sumAllReturTest "+sumAllReturTest+"</br>");