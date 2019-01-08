document.getElementById("forExamples").innerHTML = "<b></br> For and LOOP examples and implementation </b>";
var randArray = [15,26,37,48,59];

for(var val in randArray){
    document.write(val + "</br>");
}

var stringArray = randArray.map(String);

document.write("Using .map(string) and val of stringArray we get ");

for(var val of stringArray){
    document.write(val + "</br>");
}

document.write();