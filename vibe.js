// time detector
const now = new Date();
const currentHours = now.getHours();
const currentMinutes = now.getMinutes();

// time
const currentTime = (currentHours * 100) + currentMinutes; 

// araw
const week = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
const dayOfWeek = week[now.getDay()];

// Div
const sundayDiv = document.getElementById("sundayDiv");
const mondayDiv = document.getElementById("mondayDiv");
const tuesdayDiv = document.getElementById("tuesdayDiv");
const wednesdayDiv = document.getElementById("wednesdayDiv");
const thursdayDiv = document.getElementById("thursdayDiv");
const fridayDiv = document.getElementById("fridayDiv");
const saturdayDiv = document.getElementById("saturdayDiv");

// Sections
const mondayProgrammingSection = document.getElementById("mondayProgrammingSection");
const mondaySportsSection = document.getElementById("mondaySportsSection");
const sundayNoClassSection = document.getElementById("sundayNoClassSection");
const tuesdayNoClassSection = document.getElementById("tuesdayNoClassSection");
const wednesdayEthicsSection = document.getElementById("wednesdayEthicsSection");
const wednesdayWorldSection = document.getElementById("wednesdayWorldSection");
const wednesdayRizalSection = document.getElementById("wednesdayRizalSection");
const thursdayPhysicsSection = document.getElementById("thursdayPhysicsSection");
const fridayNoClassSection = document.getElementById("fridayNoClassSection");
const saturdayEthicsSection = document.getElementById("saturdayEthicsSection");
const saturdayWorldSection = document.getElementById("saturdayWorldSection");
const saturdayRizalSection = document.getElementById("saturdayRizalSection");

// STYLE
function applyStyle(element, isActive) {
    if (isActive) {
        element.style.boxShadow = "0 0 20px blue";
        element.style.backgroundColor = "white";
        element.style.borderColor = "blue";
    } else {
        element.style.boxShadow = "none";
        element.style.backgroundColor = "";
        element.style.borderColor = "";
    }
}

// SWITCH
switch(dayOfWeek){
    case "sunday":
        console.log(`it is ${currentTime} of ${dayOfWeek}`);
        sundayDiv.style.boxShadow = "0 0 50px blue";
        sundayDiv.style.borderColor = "blue";
        applyStyle(sundayNoClassSection, true);
        break;
        
    case "monday":
        console.log(`it is ${currentTime} of ${dayOfWeek}`);
        mondayDiv.style.boxShadow = "0 0 50px blue";
        mondayDiv.style.borderColor = "blue";
        
        // Programming: 10:30 - 11:30 (1030 to 1130)
        applyStyle(mondayProgrammingSection, currentTime >= 1030 && currentTime < 1130);
        
        // Sports: 15:30 - 16:30 (1530 to 1630)
        applyStyle(mondaySportsSection, currentTime >= 1530 && currentTime < 1630);
        break;
        
    case "tuesday":
        console.log(`it is ${currentTime} of ${dayOfWeek}`);
        tuesdayDiv.style.boxShadow = "0 0 50px blue";
        tuesdayDiv.style.borderColor = "blue";
        applyStyle(tuesdayNoClassSection, true);
        break;
        
    case "wednesday":
        console.log(`it is ${currentTime} of ${dayOfWeek}`);
        wednesdayDiv.style.boxShadow = "0 0 50px blue";
        wednesdayDiv.style.borderColor = "blue";
        
        // Ethics: 10:30 - 11:30
        applyStyle(wednesdayEthicsSection, currentTime >= 1030 && currentTime < 1130);
        
        // World History: 12:00 - 13:00
        applyStyle(wednesdayWorldSection, currentTime >= 1200 && currentTime < 1300);
        
        // Rizal: 13:30 - 14:30
        applyStyle(wednesdayRizalSection, currentTime >= 1330 && currentTime < 1430);
        break;
        
    case "thursday":
        console.log(`it is ${currentTime} of ${dayOfWeek}`);
        thursdayDiv.style.boxShadow = "0 0 50px blue";
        thursdayDiv.style.borderColor = "blue";
        
        // Physics: 12:00 - 13:00
        applyStyle(thursdayPhysicsSection, currentTime >= 1200 && currentTime < 1300);
        break;
        
    case "friday":
        console.log(`it is ${currentTime} of ${dayOfWeek}`);
        fridayDiv.style.boxShadow = "0 0 50px blue";
        fridayDiv.style.borderColor = "blue";
        applyStyle(fridayNoClassSection, true);
        break;
        
    case "saturday":
        console.log(`it is ${currentTime} of ${dayOfWeek}`);
        saturdayDiv.style.boxShadow = "0 0 50px blue";
        saturdayDiv.style.borderColor = "blue";
        
        // Ethics: 10:30 - 11:30
        applyStyle(saturdayEthicsSection, currentTime >= 1030 && currentTime < 1130);
        
        // World History: 12:00 - 13:00
        applyStyle(saturdayWorldSection, currentTime >= 1200 && currentTime < 1300);
        
        // Rizal: 13:30 - 14:30
        applyStyle(saturdayRizalSection, currentTime >= 1330 && currentTime < 1430);
        break;
}