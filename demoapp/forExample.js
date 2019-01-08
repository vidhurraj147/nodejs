document.getElementById("forExamples").innerHTML = "<b></br> For and LOOP examples and implementation </b>";
var randArray = [15, 26, 37, 48, 59];
for (var val in randArray) {
    document.write(val + "</br>");
}
var stringArray = randArray.map(String);
document.write("Using .map(string) and val of stringArray we get ");
for (var _i = 0, stringArray_1 = stringArray; _i < stringArray_1.length; _i++) {
    var val = stringArray_1[_i];
    document.write(val + "</br>");
}
document.write();
