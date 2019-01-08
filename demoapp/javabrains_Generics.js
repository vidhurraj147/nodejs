function echoAny(arg) {
    return arg;
}
var anyString = echoAny(1);
console.log(anyString);
// TO CONTROL THE ACCESS WE CAN DO "GENERICS"
function echoGeneric(arg) {
    return arg;
}
var anyNumber = echoGeneric(12);
console.log(anyNumber);
function echoGenericReturnString(arg) {
    return arg + " TAKES GENERIC AND RETURNS STRING";
}
var anyNumbertoString = echoGenericReturnString(122);
console.log(anyNumbertoString);
