setInterval(setClock, 1000)

const hourhand = document.querySelector("[data-hour-hand]")
const minutehand = document.querySelector("[data-minute-hand]")
const secondhand = document.querySelector("[data-seconds-hand]")


    let fetchDay = new Date().getDay();
    let day;
    
    if (fetchDay == 1){
        document.getElementById("day").innerHTML = "MON"
    } else if (fetchDay == 2){
        document.getElementById("day").innerHTML = "TUE"
    } else if (fetchDay == 3) {
        document.getElementById("day").innerHTML = "WED"
    } else if (fetchDay == 4){
        document.getElementById("day").innerHTML = "THUR"
    } else if (fetchDay == 5){
        document.getElementById("day").innerHTML = "FRI"
    } else if ( fetchDay == 6){
        document.getElementById("day").innerHTML = "SAT"
    } else {
        document.getElementById("day").innerHTML = "SUN"
    }


    console.log(day)    


function setClock() {
    const date = new Date();
    const seconds = date.getSeconds() / 60;
    const minute = (seconds + date.getMinutes()) / 60;
    const hour = (minute + date.getHours()) / 12;
    setRotation(hourhand, hour)
    setRotation(minutehand, minute)
    setRotation(secondhand, seconds)
};


function setRotation(element, rotationRatio){
    element.style.setProperty("--rotation" , rotationRatio * 360)
}

setClock()




