fetch("./data.json")
.then(response =>{
    return response.json();
})
.then(word =>{
        document.getElementById("app").innerHTML = 
        `<h1>This is Nigeria</h1>
        ${word.map(data =>{
            return  `
            <h2>hllo<h2>
            `
        }).join("")}
        `
})