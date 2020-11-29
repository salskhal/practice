
const menu = document.querySelector("#menu")
const toogle = document.querySelector("#toggle")

menu.addEventListener('click', () =>{
    if (toogle.classList.contains("hidden")){
        toogle.classList.remove('hidden')
    } else (toogle.classList.add('hidden'))
})



fetch("./data.json")
.then(response =>{
    return response.json();
})
.then(word =>{
        document.getElementById("app").innerHTML = 

        `
        <div class="grid md:grid-cols-2 gap-3 lg:grid-cols-4 mt-6 mb-10">
        ${word.map(data =>{
            return  `
                <div>
                    <img src="${data.img}" alt="" class="">
                    <div class="down">
                        <div>
                            <span class="dollar">${data.price}</span>
                            <span class="brand">${data.title}</span>
                        </div>
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </div>
                    <div class="mt-3">
                        <span class="btn">${data.brand}</span>
                    </div>
                </div>

            `
        }).join("")}
        </div>
        `
})