// For navigation

let icon = document.querySelector(".icon");
let nav = document.querySelector("#navigation");
let link = document.querySelector("#link");

icon.addEventListener('click',  function(){
    nav.classList.toggle("hidden");
});

document.querySelector('#link1').addEventListener('click', forLinks);
document.querySelector('#link2').addEventListener('click', forLinks);
document.querySelector('#link3').addEventListener('click', forLinks);
document.querySelector('#link4').addEventListener('click', forLinks);

function forLinks() {
    nav.classList.add('hidden');
}