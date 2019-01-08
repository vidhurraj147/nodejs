var PersonReadOnly = /** @class */ (function () {
    function PersonReadOnly(job) {
        this.name = "This is READONLY variable";
        this.job = job;
    }
    return PersonReadOnly;
}());
var apersonReadOnly = new PersonReadOnly("He works for MICROSOFT");
// THIS WONT WORK BECAUSE OF READONLY
// apersonReadOnly.name = "THIS WONT WORK BECAUSE OF READONLY VARIABLE";
console.log(apersonReadOnly.name);
console.log(apersonReadOnly.job);
