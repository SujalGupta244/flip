const bars = document.querySelector("#bars");
const nav = document.querySelector(".nav-list");
const navItems = document.querySelectorAll(".nav-list ul li");

bars.addEventListener("click",()=>{
    nav.classList.toggle("active");
})

navItems.forEach(item =>{
    item.addEventListener("click",()=>{
        nav.classList.remove("active");
    })
})