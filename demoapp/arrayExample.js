document.getElementById("arrayExamples").innerHTML = "<b></br> Array examples</b>";
var names = ["name1", "Podisha", "Avaina", "Rahul", "Kadgekar", "name2", "name3"];
document.write(names.toString() + " </br> ");
var superHeros = [];
superHeros.push({
    realName: "Bruce Wayne",
    superName: "Batman"
});
document.write("SuperHero real name " + superHeros[0].realName + " </br> ");
document.write("SuperHero super name " + superHeros[0].superName + " </br> ");
