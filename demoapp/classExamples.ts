document.getElementById("classExamples").innerHTML = "<b></br> Class Examples </b>";

class Animal{
    public favFood: string;

    static numOfAnimals: number = 0;

    constructor(private name: string, private owner: string){
        Animal.numOfAnimals++;
    }

    ownerInfo(){
        document.write("this.name "+this.name+ " is owned by " + this.owner + "</br>");
    }

    static howManyAnimals(): number{
        return Animal.numOfAnimals;
    }

    private _weight: number;

    get weight(): number{
        return this._weight;
    }

    set weight(weight:number){
        this._weight = weight;
    }

}

var spot = new Animal("Spot" , "Doug");
spot.ownerInfo();
spot.weight = 100;

document.write("Spot's weight is "+spot.weight + "</br>");
document.write("# of animals created so far "+Animal.numOfAnimals + "</br>");


class Dog extends Animal{
    constructor(name: string, owner: string){
        super(name,owner);
        Dog.numOfAnimals++;
    }
}

var grover = new Dog("Grover", "Jimmy");

document.write("# of animals "+ Animal.howManyAnimals() + "</br>");
document.write("# of DOG animals "+ Dog.numOfAnimals + "</br>");
document.write("Is a Dog instance of an Animal : " + (grover instanceof Animal) +  "</br>");
document.write("Does grover have a name : " + ('name' in Animal) +  "</br>");
document.write("Does grover have a age : " + ('age' in Animal) +  "</br>");

