var myName: string = "Rahul";
var myAge: number = 41;
var canVote: boolean = true;
var anything: any = "SomeValue";
anything = 2 ;

document.getElementById("tsStuffex1").innerHTML = "first programe </br> My Name is "+myName;
document.write("myname is a " + typeof(myName) + " </br> ");
document.write("myname is a " + typeof(myAge) + " </br> ");
document.write("myname is a " + typeof(canVote) + " </br> ");

var strToNum: number = parseInt("5");
var numToStr: number = 5;

document.write(" numTOstring "+numToStr.toString()+ " </br>" );
document.write(" type of numostr "+typeof(numToStr)+ " </br>" );
document.write(" type of numostr "+typeof(numToStr.toString())+ " </br>" );

