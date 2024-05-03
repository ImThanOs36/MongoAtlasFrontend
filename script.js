let button = document.querySelector("#click");
let div = document.querySelector(".data");

button.addEventListener("click", async () => {
    let response = await fetch("https://mongo-atlas0.vercel.app/", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json', 
        }
    });
    const responseData = await response.json();
    const data = responseData.name; 
    console.log(data);
    data.forEach(element => {
        div.innerHTML += `<li>${element.name}</li>`; 
    });
});
