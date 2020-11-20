setInterval(setClock, 1000)

const hourhand = document.querySelector("[data-hour-hand]")
const minutehand = document.querySelector("[data-minute-hand]")
const secondhand = document.querySelector("[data-seconds-hand]")


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