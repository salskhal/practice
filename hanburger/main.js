const hamburger = document.querySelector(".hamburger");
const hamb = document.querySelector("#nav-icon1")


function rotate(){
    hamburger.classList.toggle("open")
}
hamburger.addEventListener("click" , rotate)



function another(){
    hamb.classList.toggle("open")
}
hamb.addEventListener("click", another)