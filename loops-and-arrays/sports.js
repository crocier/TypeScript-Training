var sportsOne = ["badminton", "tennis", "football"];
// for(let i=0;i<sportsOne.length;i++){
//     console.log(sportsOne[i]);
// }
sportsOne.push("cricket");
sportsOne.push("hockey");
//using smplified for - loop
for (var _i = 0, sportsOne_1 = sportsOne; _i < sportsOne_1.length; _i++) {
    var tempSport = sportsOne_1[_i];
    if (tempSport == "badminton") {
        console.log(tempSport + "<< My Favarite Sports");
    }
    else {
        console.log(tempSport);
    }
}
