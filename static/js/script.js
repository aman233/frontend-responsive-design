var nav = document.querySelector("nav")
var header = document.querySelector("header")
var article = document.querySelector("article")
var body = document.querySelector("body")
var section = document.querySelector("section")
var main = document.querySelector("main")
var form = document.querySelector("form")
var hamburger = document.getElementById("menu")
var closenav = document.getElementById("cross")
var logo = document.getElementById("logo-head")
var title = document.getElementById("logo-title")


hamburger.addEventListener("click", function() {
    nav.classList.add("visible")
    hamburger.classList.add("gone")
    logo.classList.add("gone")
    title.classList.add("gone")
    article.classList.add("gone")
    section.classList.add("gone")
    main.classList.add("gone")
    form.classList.add("gone")
    header.classList.add("header-big")
    body.classList.add("scrolling")
});

closenav.addEventListener("click", function() {
    nav.classList.remove("visible")
    hamburger.classList.remove("gone")
    logo.classList.remove("gone")
    title.classList.remove("gone")
    article.classList.remove("gone")
    section.classList.remove("gone")
    main.classList.remove("gone")
    form.classList.remove("gone")
    header.classList.remove("header-big")
    body.classList.remove("scrolling")

});



// Add event listener to hamburger menu to open overlay