


let clickMhServer = document.querySelector(".server-web .container .click-server .mh-serv .text .click");
let clickKingServer = document.querySelector(".server-web .container .click-server .King-serv .text .click");

console.log(clickMhServer)

let webMhServer = document.querySelector(".server-web .container .click-server .mh-serv .mh-server");
let webKingServer = document.querySelector(".server-web .container .click-server .King-serv .king-server");


clickMhServer.addEventListener("click" , (e)=> {
webMhServer.classList.toggle("active")
webServer.classList.add("active")
moreServer.classList.add("block")
});
clickKingServer.addEventListener("click" , ()=> {
    webKingServer.classList.toggle("active")
    webServer.classList.add("active")
    moreServer.classList.add("block")
});


