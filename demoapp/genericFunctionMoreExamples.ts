// genericFunctionMoreExamples
document.getElementById("genericFunctionMoreExamples").innerHTML = "<b></br> Generic Function More Examples </b> </br>";

class GenericNumber<T>{
    add: (val1: T, val2: T) => T;
}

var aNumber = new GenericNumber<number>();
aNumber.add = function(x,y) {
    return x + y;
}

document.write(" 5 + 4 = "+aNumber.add(5,4)+"</br>");

// ------------- Lets check with STRING

var aString = new GenericNumber<String>();
aString.add = function(a,b){
    return a+" THIS IS ADDED FROM aString variable "+b;
}

var aStringNumberSend = new GenericNumber<String>();
aStringNumberSend.add = function(a,b){
    return String (Number(a)+Number(b));
}

document.write(" Rahul + KadgeKar = "+aString.add("Rahul","Kadgekar")+"</br>");
document.write(" 10 + 50 = "+aStringNumberSend.add("10","50")+"</br>");
