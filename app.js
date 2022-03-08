function startTime(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    minutes = checkTime(minutes)
    seconds = checkTime(seconds)

    let weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let day = weekday[date.getDay()];
    let fullTime = `${hours} :  ${minutes} :  ${seconds} ${day}`;
    // document.getElementById("day").innerHTML = fullTime;
    document.getElementById("clock").innerHTML = fullTime;
    
    setTimeout(startTime, 1000)
}
startTime();

function checkTime(i){
    if(i<10) {
        i = "0" + i; 
    }
    return i  
}

function getValue() {
    let person = prompt("Please enter your name")

    if(person != null) {
        document.getElementById("demo").innerHTML = `Hello ${person.toUpperCase()}! Welcome!`
    }
}

getValue();



