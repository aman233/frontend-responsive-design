var nav = document.querySelector("nav")
var header = document.querySelector("header")
var article = document.querySelector("article")
var body = document.querySelector("body")
var section = document.querySelector("section")
var hamburger = document.getElementById("menu")
var closenav = document.getElementById("cross")


///////////
var jsparent = document.getElementById("js-parent");
hamburger.addEventListener("click", function() {
    jsparent.classList.add('active');
    body.classList.add("scrolling");
});
closenav.addEventListener("click", function() {
    jsparent.classList.remove('active');
    body.classList.remove("scrolling");
});

// Broertje hielp met uitleg
var headerHeight = header.offsetHeight; //headheight kennen
var latestScroll = 0;
var previousScroll = 0; //prevsroll begint op 0
window.onscroll = function() { //bekijkt wanneer de gebruiker scrollt
    latestScroll = window.pageYOffset; // Bekijkt waar de gebruiker is op de pagina -> Y graden

    if (latestScroll > headerHeight) { // kijkt of latestscroll groter is dan headerheight -> dus of de gebruiker langs de header is, die 97 px
        if (previousScroll > latestScroll) { // kijkt of gebruiker naar boven of naar beneden scrolled
            header.classList.add('fixed'); //voegt header toe
            section.classList.add("fixed-padding"); // voegt padding zodat er geen verspringing is
            header.classList.remove('hidden'); //haalt de display:none weg
        } else {
            header.classList.add('hidden'); //scroll naar beneden voogt display:none toe
        }
    } else { //als de gebruiker naar de top van de pagina is verdwijnt dit effect
        header.classList.remove('fixed');
        section.classList.remove("fixed-padding")
    }
    previousScroll = latestScroll; //slaat de scroll positie van de gebruiker op voor een nieuwe check om header te tonen of niet
};