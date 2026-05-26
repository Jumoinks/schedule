// detecting araw ng linggo
const weekDetector = new Date().getDay();
const week = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
const dayOfWeek = week[weekDetector];
// detecting oras at minute ng linggo
const hoursDetector = new Date().getHours();
const hours = ["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23"];
const hoursOfweek = hours[hoursDetector];
// minutes
const minutesDetector = new Date().getMinutes();
const minutes = ["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59"]
const minutesOfHours = minutes[minutesDetector];
// variables
const sundayDiv = document.getElementById("sundayDiv");
const mondayDiv = document.getElementById("mondayDiv");
const tuesdayDiv = document.getElementById("tuesdayDiv");
const wednesdayDiv = document.getElementById("wednesdayDiv");
const thursdayDiv = document.getElementById("thursdayDiv");
const fridayDiv = document.getElementById("fridayDiv");
const saturdayDiv = document.getElementById("saturdayDiv");
// tuesday section
const tuesdayNoClassSection = document.getElementById("tuesdayNoClassSection");
// wednesday section
const wednesdayEthicsSection = document.getElementById("wednesdayEthicsSection");
const wednesdayWorldSection = document.getElementById("wednesdayEthicsSection");
const wednesdayRizalSection = document.getElementById("wednesdayRizalSection");
// thursday section
const thursdayPhysicsSection = document.getElementById("thursdayPhysicsSection");
// friday section
const fridayNoClassSection = document.getElementById("fridayNoClassSection")
// saturday
const saturdayEthicsSection = document.getElementById("saturdayEthicsSection");
const saturdayyWorldSection = document.getElementById("saturdayEthicsSection");
const saturdayRizalSection = document.getElementById("saturdayRizalSection");

//pag palit ng style
switch(dayOfWeek){
    case "sunday":
        console.log("it is monday");
        break;
    case "monday":
        console.log("it is monday");
        break;
    case "tuesday":
        console.log(`it is ${hoursOfweek}:${minutesOfHours} of ${dayOfWeek}`);
        tuesdayDiv.style.boxShadow = "0 0 50px blue";
        tuesdayDiv.style.borderColor = "blue"
        tuesdayNoClassSection.style.boxShadow = "0 0 20px blue"
        tuesdayNoClassSection.style.backgroundColor = "white"
        tuesdayNoClassSection.style.borderColor = "blue"
        break;
    case "wednesday":
        console.log(`it is ${hoursOfweek}:${minutesOfHours} of ${dayOfWeek}`);
        wednesdayDiv.style.boxShadow = "0 0 50px blue"
        wednesdayDiv.style.borderColor = "blue"
        if(hoursOfweek === "11" && minutesOfHours === "31"){
            wednesdayEthicsSection.style.boxShadow = "0 0 20px blue";
            wednesdayEthicsSection.style.backgroundColor = "white";
            wednesdayEthicsSection.style.borderColor = "blue";
        }
        else if(hoursOfweek === "13" && minutesOfHours === "0"){
            wednesdayWorldSection.style.boxShadow = "0 0 20px blue";
            wednesdayWorldSection.style.backgroundColor = "white";
            wednesdayWorldSection.style.borderColor = "blue";
        }
        else if(hoursOfweek === "2" && minutesOfHours === "31"){
            wednesdayRizalSection.style.boxShadow = "0 0 20px blue";
            wednesdayRizalSection.style.backgroundColor = "white";
            wednesdayRizalSection.style.borderColor = "blue";
        }
        else{
            console.log("no classes");
        }
        break;
    case "thursday":
        console.log(`it is ${hoursOfweek}:${minutesOfHours} of ${dayOfWeek}`);
        thursdayDiv.style.boxShadow = "0 0 50px blue"
        thursdayDiv.style.borderColor = "blue"
        if(hoursOfweek === "13" && minutesOfHours === "0"){
            thursdayPhysicsSection.style.boxShadow = "0 0 20px blue";
            thursdayPhysicsSection.style.backgroundColor = "white";
            thursdayPhysicsSection.style.borderColor = "blue";
        }
        else{
            console.log("no classes");
        }
        break;
    case "friday":
       console.log(`it is ${hoursOfweek}:${minutesOfHours} of ${dayOfWeek}`);
        fridayDiv.style.boxShadow = "0 0 50px blue";
        fridayDiv.style.borderColor = "blue"
        fridayNoClassSection.style.boxShadow = "0 0 20px blue"
        fridayNoClassSection.style.backgroundColor = "white"
        fridayNoClassSection.style.borderColor = "blue"
        break;
    case "saturday":
        console.log(`it is ${hoursOfweek}:${minutesOfHours} of ${dayOfWeek}`);
        saturdayDiv.style.boxShadow = "0 0 50px blue"
        saturdayDiv.style.borderColor = "blue"
        if(hoursOfweek === "11" && minutesOfHours === "31"){
            wednesdayEthicsSection.style.boxShadow = "0 0 20px blue";
            wednesdayEthicsSection.style.backgroundColor = "white";
            wednesdayEthicsSection.style.borderColor = "blue";
        }
        else if(hoursOfweek === "13" && minutesOfHours === "0"){
            wednesdayWorldSection.style.boxShadow = "0 0 20px blue";
            wednesdayWorldSection.style.backgroundColor = "white";
            wednesdayWorldSection.style.borderColor = "blue";
        }
        else if(hoursOfweek === "2" && minutesOfHours === "31"){
            wednesdayRizalSection.style.boxShadow = "0 0 20px blue";
            wednesdayRizalSection.style.backgroundColor = "white";
            wednesdayRizalSection.style.borderColor = "blue";
        }
        else{
            console.log("no classes");
        }
        break;
}