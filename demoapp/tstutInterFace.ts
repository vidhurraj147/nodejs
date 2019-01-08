console.log("CHECK THIS")

interface SuperHero {
    realName: string;
    superName: string;
}

var superMan: SuperHero = {
    realName: "Clark Kent",
    superName: "Superman"
};

document.getElementById("interfaceExample").innerHTML = "<b>Interface example</b>";
document.write("RealName is " + superMan.realName + " </br> ");
document.write("SuperName is " + superMan.superName + " </br> ");