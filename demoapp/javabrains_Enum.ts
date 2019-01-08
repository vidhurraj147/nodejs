enum DaysOfTheWeek{
    SUN, MON, TUE, WED, THU, FRI, SAT
}

enum DaysOfTheWeekAdded100{
    SUN=100, MON, TUE, WED, THU, FRI, SAT
}

let day : DaysOfTheWeek;
day = DaysOfTheWeek.MON;

if(day === DaysOfTheWeek.MON){
    console.log("HAVE TO WORK");
}