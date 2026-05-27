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
// reseting styles
function resetStyles() {
    document.querySelectorAll("div, section").forEach(el => {
        el.style.boxShadow = "0 0 50px black";
        el.style.borderColor = "";
        el.style.backgroundColor = "";
    });
}
//pag palit ng style
setInterval(function() {
    // detecting araw ng linggo
    const weekDetector = new Date().getDay();
    const week = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
    const dayOfWeek = week[weekDetector];
    // detecting oras at minute ng linggo
    const hoursOfDay = new Date().getHours();
    // minutes
    const minutesOfHours = new Date().getMinutes();;
    resetStyles();
    switch(dayOfWeek){
        case "sunday":
            console.log(`it is ${hoursOfDay}:${minutesOfHours} of ${dayOfWeek}`);
            sundayDiv.style.boxShadow = "0 0 50px blue";
            sundayDiv.style.borderColor = "blue";
            sundayNoClassSection.style.boxShadow = "0 0 50px blue";
            sundayNoClassSection.style.backgroundColor = "white";
            sundayNoClassSection.style.borderColor = "blue";
            break;
        case "monday":
            console.log(`it is ${hoursOfDay}:${minutesOfHours} of ${dayOfWeek}`);
            mondayDiv.style.boxShadow = "0 0 50px blue";
            mondayDiv.style.borderColor = "blue";
            if((hoursOfDay === 10 && minutesOfHours >= 30) || (hoursOfDay === 11)){
                mondayProgrammingSection.style.boxShadow = "0 0 50px blue";
                mondayProgrammingSection.style.backgroundColor = "white";
                mondayProgrammingSection.style.borderColor = "blue";
            }
            else if((hoursOfDay === 15) || (hoursOfDay === 16)){
                mondaySportsSection.style.boxShadow = "0 0 20px blue";
                mondaySportsSection.style.backgroundColor = "white";
                mondaySportsSection.style.borderColor = "blue";
            }
            else{
                console.log("no classes");
            }
            break;
        case "tuesday":
            console.log(`it is ${hoursOfDay}:${minutesOfHours} of ${dayOfWeek}`);
            tuesdayDiv.style.boxShadow = "0 0 50px blue";
            tuesdayDiv.style.borderColor = "blue";
            tuesdayNoClassSection.style.boxShadow = "0 0 50px blue";
            tuesdayNoClassSection.style.backgroundColor = "white";
            tuesdayNoClassSection.style.borderColor = "blue";
            break;
        case "wednesday":
            console.log(`it is ${hoursOfDay}:${minutesOfHours} of ${dayOfWeek}`);
            wednesdayDiv.style.boxShadow = "0 0 50px blue";
            wednesdayDiv.style.borderColor = "blue";
            if((hoursOfDay === 10 && minutesOfHours >= 30) || (hoursOfDay === 11)){
                wednesdayEthicsSection.style.boxShadow = "0 0 50px blue";
                wednesdayEthicsSection.style.backgroundColor = "white";
                wednesdayEthicsSection.style.borderColor = "blue";
            }
            else if((hoursOfDay === 12) ||(hoursOfDay === 13 && minutesOfHours < 30)){
                wednesdayWorldSection.style.boxShadow = "0 0 50px blue";
                wednesdayWorldSection.style.backgroundColor = "white";
                wednesdayWorldSection.style.borderColor = "blue";
            }
            else if((hoursOfDay === 13 && minutesOfHours >= 30) || (hoursOfDay === 14)){
                wednesdayRizalSection.style.boxShadow = "0 0 50px blue";
                wednesdayRizalSection.style.backgroundColor = "white";
                wednesdayRizalSection.style.borderColor = "blue";
            }
            else{
                console.log("no classes");
            }
            break;
        case "thursday":
            console.log(`it is ${hoursOfDay}:${minutesOfHours} of ${dayOfWeek}`);
            thursdayDiv.style.boxShadow = "0 0 50px blue";
            thursdayDiv.style.borderColor = "blue";
            if((hoursOfDay === 12) ||(hoursOfDay === 13 && minutesOfHours < 30)){
                thursdayPhysicsSection.style.boxShadow = "0 0 50px blue";
                thursdayPhysicsSection.style.backgroundColor = "white";
                thursdayPhysicsSection.style.borderColor = "blue";
            }
            else{
                console.log("no classes");
            }
            break;
        case "friday":
        console.log(`it is ${hoursOfDay}:${minutesOfHours} of ${dayOfWeek}`);
            fridayDiv.style.boxShadow = "0 0 50px blue";
            fridayDiv.style.borderColor = "blue";
            fridayNoClassSection.style.boxShadow = "0 0 50px blue";
            fridayNoClassSection.style.backgroundColor = "white";
            fridayNoClassSection.style.borderColor = "blue";
            break;
        case "saturday":
            console.log(`it is ${hoursOfDay}:${minutesOfHours} of ${dayOfWeek}`);
            saturdayDiv.style.boxShadow = "0 0 50px blue"
            saturdayDiv.style.borderColor = "blue"
            if((hoursOfDay === 10 && minutesOfHours >= 30) || (hoursOfDay === 11)){
                saturdayEthicsSection.style.boxShadow = "0 0 50px blue";
                saturdayEthicsSection.style.backgroundColor = "white";
                saturdayEthicsSection.style.borderColor = "blue";
            }
            else if((hoursOfDay === 12) ||(hoursOfDay === 13 && minutesOfHours < 30)){
                saturdayWorldSection.style.boxShadow = "0 0 50px blue";
                saturdayWorldSection.style.backgroundColor = "white";
                saturdayWorldSection.style.borderColor = "blue";
            }
            else if((hoursOfDay === 13 && minutesOfHours >= 30) || (hoursOfDay === 14)){
                saturdayRizalSection.style.boxShadow = "0 0 50px blue";
                saturdayRizalSection.style.backgroundColor = "white";
                saturdayRizalSection.style.borderColor = "blue";
            }
            else{
                console.log("no classes");
            }
            break;
    }
}, 1000);
