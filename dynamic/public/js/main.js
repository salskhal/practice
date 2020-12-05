
   
    const CLIENT_ID = "55d9e2683d6498d12012"
    const CLIENT_SECRET ="d7c4fba3f63adb39f468149cdbd179e262415c6a"



    function getUser() {
        let input = document.getElementById("input").value;
        let url = `https://api.github.com/users/${input}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
        fetch(url)
        .then(resp =>{
            return resp.json();
        })
        .then(data =>{
            console.log(data)
            document.getElementById("app").innerHTML =
            `
            <img src="${data.avatar_url}" alt="" class="w-24 h-24 mt-20 rounded-full border-2 border-user">
            <div class="text-btn mt-10 ">
                <span>${data.name}</span>
                <span>${data.email}</span>
            </div>
            <span>${data.location}</span>
            <div class="md:flex flex-row mt-10 place-content-around mb-20">
                <div class="flex flex-col">
                    <span>Followers</span>
                    <span>${data.followers}</span>
                </div>
                <div class="flex flex-col md:ml-12 mt-3 md:mt-0">
                    <span>Following</span>
                    <span>${data.following}</span>
                </div>
                <div class="flex flex-col md:ml-12 mt-3 md:mt-0">
                    <span>Public repo</span>
                    <span>${data.public_repos}</span>
                </div>
            </div>
            <div class="mb-10">
            <span>BIO: ${data.bio}</span>
            </div>
            `
        })
    }















    // fetch(`https://api.github.com/users/${input}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`)
    // .then(resp => {
    //     return resp.json();
    // })
    // .then(data => {
    //     console.log(data)
    // })


