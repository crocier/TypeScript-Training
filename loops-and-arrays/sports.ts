let sportsOne: string[] = ["badminton", "tennis", "football"];

// for(let i=0;i<sportsOne.length;i++){
//     console.log(sportsOne[i]);
// }

sportsOne.push("cricket");
sportsOne.push("hockey");

//using smplified for - loop

for(let tempSport of sportsOne){

    if(tempSport == "badminton"){
        console.log(tempSport + "<< My Favarite Sports");
    }
    else {
        console.log(tempSport);
    }
     
    
}