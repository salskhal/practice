
const menu = document.querySelector("#menu")
const toogle = document.querySelector("#toggle")

menu.addEventListener('click', () =>{
    if (toogle.classList.contains("hidden")){
        toogle.classList.remove('hidden')
    } else (toogle.classList.add('hidden'))
})