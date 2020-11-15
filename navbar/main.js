const hamburger = document.querySelector(".hamburger");
const mobile = document.querySelector(".cover")

function rotate() {
    hamburger.classList.toggle("open")
    mobile.classList.toggle("open")
}
hamburger.addEventListener("click", rotate)