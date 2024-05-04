let button1 = document.querySelector("#get");
let button2 = document.querySelector("#post");
let button3 = document.querySelector("#put");
let button4 = document.querySelector("#delete");
let div = document.querySelector(".data");

button1.addEventListener("click", async () => {
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
        div.innerHTML = `<li>${element.name}</li>`; 
    });
});
button2.addEventListener("click", async () => {
    let response = await fetch("https://mongo-atlas0.vercel.app/add", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', 
        },
        body:{"name":"Shubham"},
        
    });
    const responseData = await response.json();
    const data = responseData.name; 
    console.log(data);
    data.forEach(element => {
        div.innerHTML = `<li>${element.name}</li>`; 
    });
});
