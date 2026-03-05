document.addEventListener("DOMContentLoaded", ()=>{

/* ANIMACION PRODUCTOS */

const cards = document.querySelectorAll(".product-card");

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},{threshold:0.1});

cards.forEach(card=>{

card.style.opacity="0";
card.style.transform="translateY(30px)";
card.style.transition="all 0.6s ease-out";

observer.observe(card);

});


/* MENU MOVIL */

const menuBtn=document.querySelector(".menu-btn");
const nav=document.querySelector(".nav-links");

menuBtn.addEventListener("click",()=>{

nav.classList.toggle("active");

});

});

document.addEventListener("DOMContentLoaded", function () {

    const menuBtn = document.getElementById("menuBtn");
    const navMenu = document.getElementById("navMenu");

    if(menuBtn){
        menuBtn.addEventListener("click", function () {
            navMenu.classList.toggle("active");
            menuBtn.classList.toggle("open");
        });
    }

});

document.addEventListener("DOMContentLoaded",()=>{

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

navMenu.classList.toggle("active");

});

}

});

document.addEventListener("DOMContentLoaded",()=>{

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

navMenu.classList.toggle("active");

});

}

});