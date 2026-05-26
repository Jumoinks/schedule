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
const minutes = ["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59"];
const minutesOfHours = minutes[minutesDetector];
// variables
const sundayDiv = document.getElementById("sundayDiv");
const mondayDiv = document.getElementById("mondayDiv");
const tuesdayDiv = document.getElementById("tuesdayDiv");
const wednesdayDiv = document.getElementById("wednesdayDiv");
const thursdayDiv = document.getElementById("thursdayDiv");
const fridayDiv = document.getElementById("fridayDiv");
const saturdayDiv = document.getElementById("saturdayDiv");
// monday section
const mondayProgrammingSection = document.getElementById("mondayProgrammingSection");
const mondaySportsSection = document.getElementById("mondaySportsSection")
// sunday section
const sundayNoClassSection = document.getElementById("sundayNoClassSection");
// tuesday section
const tuesdayNoClassSection = document.getElementById("tuesdayNoClassSection");
// wednesday section
const wednesdayEthicsSection = document.getElementById("wednesdayEthicsSection");
const wednesdayWorldSection = document.getElementById("wednesdayWorldSection");
const wednesdayRizalSection = document.getElementById("wednesdayRizalSection");
// thursday section
const thursdayPhysicsSection = document.getElementById("thursdayPhysicsSection");
// friday section
const fridayNoClassSection = document.getElementById("fridayNoClassSection");
// saturday
const saturdayEthicsSection = document.getElementById("saturdayEthicsSection");
const saturdayWorldSection = document.getElementById("saturdayWorldSection");
const saturdayRizalSection = document.getElementById("saturdayRizalSection");

//pag palit ng style
switch(dayOfWeek){
    case "sunday":
        console.log(`it is ${hoursOfweek}:${minutesOfHours} of ${dayOfWeek}`);
        sundayDiv.style.boxShadow = "0 0 50px blue";
        sundayDiv.style.borderColor = "blue";
        sundayNoClassSection.style.boxShadow = "0 0 20px blue";
        sundayNoClassSection.style.backgroundColor = "white";
        sundayNoClassSection.style.borderColor = "blue";
        break;
    case "monday":
        console.log(`it is ${hoursOfweek}:${minutesOfHours} of ${dayOfWeek}`);
        mondayDiv.style.boxShadow = "0 0 50px blue";
        mondayDiv.style.borderColor = "blue";
        if(hoursOfweek === "10" && minutesOfHours === "30"){
            mondayProgrammingSection.style.boxShadow = "0 0 20px blue";
            mondayProgrammingSection.style.backgroundColor = "white";
            mondayProgrammingSection.style.borderColor = "blue";
        }
        else if(hoursOfweek === "15" && minutesOfHours === "30"){
            mondaySportsSection.style.boxShadow = "0 0 20px blue";
            mondaySportsSection.style.backgroundColor = "white";
            mondaySportsSection.style.borderColor = "blue";
        }
        else{
            console.log("no classes");
        }
        break;
    case "tuesday":
        console.log(`it is ${hoursOfweek}:${minutesOfHours} of ${dayOfWeek}`);
        tuesdayDiv.style.boxShadow = "0 0 50px blue";
        tuesdayDiv.style.borderColor = "blue";
        tuesdayNoClassSection.style.boxShadow = "0 0 20px blue";
        tuesdayNoClassSection.style.backgroundColor = "white";
        tuesdayNoClassSection.style.borderColor = "blue";
        break;
    case "wednesday":
        console.log(`it is ${hoursOfweek}:${minutesOfHours} of ${dayOfWeek}`);
        wednesdayDiv.style.boxShadow = "0 0 50px blue";
        wednesdayDiv.style.borderColor = "blue";
        if(hoursOfweek === "10" && minutesOfHours === "30"){
            wednesdayEthicsSection.style.boxShadow = "0 0 20px blue";
            wednesdayEthicsSection.style.backgroundColor = "white";
            wednesdayEthicsSection.style.borderColor = "blue";
        }
        else if(hoursOfweek === "12" && minutesOfHours === "0"){
            wednesdayWorldSection.style.boxShadow = "0 0 20px blue";
            wednesdayWorldSection.style.backgroundColor = "white";
            wednesdayWorldSection.style.borderColor = "blue";
        }
        else if(hoursOfweek === "13" && minutesOfHours === "30"){
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
        thursdayDiv.style.boxShadow = "0 0 50px blue";
        thursdayDiv.style.borderColor = "blue";
        if(hoursOfweek === "12" && minutesOfHours === "0"){
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
        fridayDiv.style.borderColor = "blue";
        fridayNoClassSection.style.boxShadow = "0 0 20px blue";
        fridayNoClassSection.style.backgroundColor = "white";
        fridayNoClassSection.style.borderColor = "blue";
        break;
    case "saturday":
        console.log(`it is ${hoursOfweek}:${minutesOfHours} of ${dayOfWeek}`);
        saturdayDiv.style.boxShadow = "0 0 50px blue"
        saturdayDiv.style.borderColor = "blue"
        if(hoursOfweek === "10" && minutesOfHours === "30"){
            saturdayEthicsSection.style.boxShadow = "0 0 20px blue";
            saturdayEthicsSection.style.backgroundColor = "white";
            saturdayEthicsSection.style.borderColor = "blue";
        }
        else if(hoursOfweek === "12" && minutesOfHours === "0"){
            saturdayWorldSection.style.boxShadow = "0 0 20px blue";
            saturdayWorldSection.style.backgroundColor = "white";
            saturdayWorldSection.style.borderColor = "blue";
        }
        else if(hoursOfweek === "13" && minutesOfHours === "30"){
            saturdayRizalSection.style.boxShadow = "0 0 20px blue";
            saturdayRizalSection.style.backgroundColor = "white";
            saturdayRizalSection.style.borderColor = "blue";
        }
        else{
            console.log("no classes");
        }
        break;
}