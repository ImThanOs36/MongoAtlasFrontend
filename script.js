let button = document.querySelector("#click");

button.addEventListener("click", async () => {
    let response = await fetch("https://mongo-atlas0.vercel.app/", ({
        method: 'GET',
        headers: {
            'Content-Type': 'application/json', 
        }
    }))
    const data = await response.json();
    console.log(data);
    
})