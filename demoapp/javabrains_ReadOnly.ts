class PersonReadOnly{
    readonly name = "This is READONLY variable";

    // readonly job; 
    // constructor(job: string){
    //     this.job = job;
    // }

    constructor(readonly job: string){
        this.job = job;
    }

}

var apersonReadOnly : PersonReadOnly = new PersonReadOnly("He works for MICROSOFT");

// THIS WONT WORK BECAUSE OF READONLY
// apersonReadOnly.name = "THIS WONT WORK BECAUSE OF READONLY VARIABLE";

console.log(apersonReadOnly.name);
console.log(apersonReadOnly.job);